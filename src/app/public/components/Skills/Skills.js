import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'reactstrap'

import Api from 'app/api.js'
import { getStorage, setStorage } from 'app/utils/services/session.storage'
import Load from 'app/components/UI/Load/Load'
import ExpandContent from 'app/components/UI/ExpandContent/ExpandContent'
import SkillModal from './SkillModal/SkillModal'

import './Skills.scss'

const Skills = () => {
  let [load, setLoad] = useState(true)
  let [content, setContent] = useState ({})
  let [modal, setModal] = useState (false)
  let [info, setInfo] = useState({wrap: {}, list: []})

  const openContent = (content) => {
    const dataContent = info.list.filter(item => item.hashModal === content)[0];
    setContent(dataContent)
    toggleHandle()
  }

  const toggleHandle = () => {
    setModal(!modal)
  }

  const getApi = async () => {
    let storage = getStorage('cach-skill')
    if (!storage) {
      const { data } = await Api.get(`skill.json`)
      storage = data
      setStorage('cach-skill', data)
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
    <section id="skills" className="sectionScroll Skills pt-0">
      <Container fluid>
        <Row noGutters className="pt-6 wrap-skills">
          <Col md={6} className="text-center mr-auto ml-auto">
            <Load active={load}>
              <h2 className="title">{info.wrap.title}</h2>
              <p className="subtitle wrap-skills">{info.wrap.subtitle}</p>
            </Load>
          </Col>
        </Row>
      </Container>

      <Container className="hero-section">
          <Row noGutters className="card-grid">
            <Load active={load}>
              {info.list.map((item, i) => (
                <Card key={i}>
                  <div className="card__background" style={{backgroundImage: `url(${item.image})`}}></div>
                  <div className="card__content">
                    <p className="card__category">{item.category}</p>
                    <h3 className="card__heading">{item.heading}</h3>
                    <div className="card__button">
                      <Button color="info" size="md" onClick={() => { openContent(item.hashModal) }}>Read more</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </Load>
          </Row>
      </Container>

      <Container fluid>
        <Row noGutters>
          <ExpandContent toggle={toggleHandle} modal={modal}>
            <SkillModal data={content} />
          </ExpandContent>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
