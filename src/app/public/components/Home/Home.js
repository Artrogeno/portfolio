import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'

import Api from 'app/api.js'
import { getStorage, setStorage } from 'app/utils/services/session.storage'
import Load from 'app/components/UI/Load/Load'
import Sphere from 'app/components/Particles/Sphere'
import './Home.scss'

const Home = () => {
  const [load, setLoad] = useState(true)
  const [home, setHome] = useState({title: '', subtitle: ''})

  const getApi = async () => {
    let storage = getStorage('cach-home')
    if (!storage) {
      const { data } = await Api.get(`home.json`)
      storage = data
      setStorage('cach-home', data)
    }
    setHome(storage)
    setLoad(false)
  }

  useEffect(() => {
    if (load) {
      getApi()
    }
  })

  return (
    <section id="home" className="Home">
      <Container fluid>
        <Load active={load} >
          <Row>
            <Col md={6} className="head-line">
                <h4>{home.subtitle}</h4>
                <h2>{home.title}</h2>
            </Col>
            <Col md={6}>
              <Sphere />
            </Col>
          </Row>
        </Load>
      </Container>
    </section>
  )
}

export default Home
