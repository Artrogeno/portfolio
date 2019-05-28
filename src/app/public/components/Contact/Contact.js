import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Api from 'app/api.js'
import { getStorage, setStorage } from 'app/utils/services/session.storage'
import Load from 'app/components/UI/Load/Load'

import './Contact.scss'

const Contact = () => {
  let [load, setLoad] = useState(true)
  let [info, setInfo] = useState({wrap: {}, list: []})

  const getApi = async () => {
    let storage = getStorage('cach-contact')
    if (!storage) {
      const { data } = await Api.get(`contact.json`)
      storage = data
      setStorage('cach-contact', data)
    }
    setInfo(storage.info)
    setLoad(false)
  }

  useEffect(() => {
    if (load) {
      getApi()
    }
  })

  return (
    <section id="contact" className="sectionScroll Contact section-image" style={{backgroundImage: `url(${info.wrap.image})`}}>
      <Container fluid>
        <Row noGutters className="pt-6 wrap-skills">
          <Col md={6} className="text-center mr-auto ml-auto">
            <Load active={load}>
              <h2 className="title text-center">{info.wrap.title}</h2>
              <p className="subtitle wrap-skills">{info.wrap.subtitle}</p>
            </Load>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="pt-6 info-list">
          {
            info.list.map((item, i) => (
              <Col md={12/info.list.length} className="info-contact" key={i}>
                <div className="icon icon-primary">
                  <span className={`ar-icons ${item.icon} ${item.iconColor}`}></span>
                </div>
                <h4 className="info-title">{item.title}</h4>
                <p className="info-description" dangerouslySetInnerHTML={{__html: item.description}}></p>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Contact
