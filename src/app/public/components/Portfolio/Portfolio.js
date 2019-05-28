import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

import Api from 'app/api.js'
import { getStorage, setStorage } from 'app/utils/services/session.storage'
import Load from 'app/components/UI/Load/Load'
import CardLogo from 'app/public/components/UI/CardLogo/CardLogo'

import './Portfolio.scss'

const Portfolio = () => {
  const [load, setLoad] = useState(true)
  const [info, setInfo] = useState({wrap: {}, list: []})
  const [activeTab, setActiveTab] = useState(null)

  const getApi = async () => {
    let storage = getStorage('cach-portfolio')
    if (!storage) {
      const {data} = await Api.get(`portfolio.json`)
      storage = data
      setStorage('cach-portfolio', data)
    }
    setInfo(storage.info)
    setActiveTab(storage.info.list[0].hash)
    setLoad(false)
  }

  useEffect(() => {
    if (load) {
      getApi()
    }
  })

  return (
    <section id="portfolio" className="sectionScroll Portfolio">
      <Container fluid>
        <Row noGutters>
          <Col md={6} className="text-center mr-auto ml-auto">
            <Load active={load}>
              <h2 className="title">{info.wrap.title}</h2>
              <p className="subtitle">{info.wrap.subtitle}</p>
            </Load>
          </Col>
        </Row>
      </Container>
      <Container className="mt-6">
        <Row className="align-items-center">
          <Nav pills className="nav-portfolio m-auto">
            <Load active={load}>
              {
                info.list.map((item, i) => (
                  <NavItem className="m-auto" key={i}>
                    <NavLink className={classnames({ active: activeTab === item.hash })} onClick={() => { setActiveTab(item.hash) }}>
                      <span className={`ar-icons ${item.icon} ${item.iconColor}`}></span>
                      {item.category}
                    </NavLink>
                  </NavItem>
                ))
              }
            </Load>
          </Nav>
        </Row>
      </Container>

      <Container className="tab-portfolio">
        <Load active={load}>
          <TabContent activeTab={activeTab}>
          {
            info.list.map((items, index) =>(
              <TabPane tabId={items.hash} key={index}>
                <Row className="content-tab">
                {
                  items.projects.map((item, i) => (
                    <Col md={4} key={i}>
                      <CardLogo data={item} />
                    </Col>
                  ))
                }
                </Row>
              </TabPane>
            ))
          }
          </TabContent>
        </Load>
      </Container>
    </section>
  )
}

export default Portfolio
