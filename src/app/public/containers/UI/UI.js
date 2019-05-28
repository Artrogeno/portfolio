import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, TabContent, TabPane, Nav } from 'reactstrap'
import classnames from 'classnames'

import NavlinkStrap from 'app/components/UI/NavlinkStrap/NavlinkStrap'
import Buttons from 'app/public/components/UI/Example/Buttons/Buttons'
import Cards from 'app/public/components/UI/Example/Cards/Cards'

import './UI.scss'

const UI = () => {
  const [activeTab, toggleTab] = useState('BTN')

  return (
    <Container fluid className="page">
    <Row>
      <Col>
        <NavLink className="btn btn-artrogeno" to="/">Back to Main</NavLink>
      </Col>
    </Row>
    <Row className="bd-example">
      <Col md={3}>
        <Nav vertical tag="div" className="flex-column nav-pills">
          <NavlinkStrap className={classnames({ active: activeTab === 'BTN' })} click={() => toggleTab('BTN')}>
            Buttons
          </NavlinkStrap>
          <NavlinkStrap className={classnames({ active: activeTab === 'Card' })} click={() => toggleTab('Card')}>
            Cards
          </NavlinkStrap>
        </Nav>
      </Col>
      <Col md={9}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="BTN">
            <Buttons />
          </TabPane>
          <TabPane tabId="Card">
            <Cards />
          </TabPane>
        </TabContent>
      </Col>
    </Row>

    </Container>
  )
}

export default UI
