import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import Api from 'app/api.js'
import { getStorage, setStorage } from 'app/utils/services/session.storage'
import Load from 'app/components/UI/Load/Load'
import { ScrolledToId } from 'app/components/UI/ScrollSpy'
import CardProfile from 'app/components/CardProfile/CardProfile'

import './About.scss'

const About = () => {
  const [load, setLoad] = useState(true)
  const [info, setInfo] = useState({wrap: {}, list: []})
  const [profile, setProfile] = useState({content: {}, image: { image: null, url: null }})

  const getApi = async () => {
    let storage = getStorage('cach-about')
    if (!storage) {
      const {data} = await Api.get(`about.json`)
      storage = data
      setStorage('cach-about', data)
    }
    setInfo(storage.info)
    setProfile(storage.profile)
    setLoad(false)
  }

  useEffect(() => {
    if (load) {
      getApi()
    }
  })

  return (
    <section id="about" className="sectionScroll About">
      <Container>
        <Row noGutters className="justify-content-between">
          <Col md={5}>
            <Load active={load}>
              <CardProfile data={profile.image} image={profile.image.url} />
            </Load>
          </Col>

          <Col md={6}>
            <Load active={load}>
              <Row noGutters>
                <Col md={12}>
                  <p className="subtitle">{profile.content.subtitle}</p>
                  <h2 className="title">{profile.content.title}</h2>
                </Col>
                <Col md={12} className="describe">
                  <p dangerouslySetInnerHTML={{ __html: profile.content.describe }}></p>
                  { profile.content.button ?
                    <div className="wrap-btn-to-skills">
                      <ScrolledToId>
                        <Button outline color={`${profile.content.button.color || 'primary' }`} findid={profile.content.button.hash} reactstrap="Button">What I Do?</Button>
                      </ScrolledToId>
                    </div>
                    : null
                  }
                </Col>
              </Row>
            </Load>
          </Col>
        </Row>
      </Container>

      <Container fluid id="aboutMe" className="sectionScroll pt-6 mt-14">
        <Row noGutters>
          <Col md={12}>
            <Row noGutters>
              <Load active={load}>
                <Col md={6} className="text-center mr-auto ml-auto">
                  <h2 className="title">{info.wrap.title}</h2>
                  <p className="subtitle" dangerouslySetInnerHTML={{ __html: info.wrap.subtitle }}></p>
                </Col>
              </Load>
            </Row>
            <Row>
              <Load active={load}>
                {
                  info.list.map((item, i) =>(
                    <Col md={5} className="ml-auto" key={i}>
                      <div className="info info-horizontal">
                        { item.icon ?
                          <div className="icon">
                            <span className={`bubble ${item.icon.color}`}></span>
                            <span className={`ar-icons ${item.icon.icon}`}></span>
                          </div>
                          : null
                        }
                        <div className="description">
                          <h3 className="info-title">{item.description.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: item.description.paragraph }}></p>
                        </div>
                      </div>
                    </Col>
                  ))
                }
              </Load>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
