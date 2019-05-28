import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const Buttons = () => (
  <Container>
    <Row>
      <Col md={12} className="m-2">
        <h2>BTN</h2>
      </Col>
      <Col md={12}>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>{' '}
        <Button color="artrogeno">artrogeno</Button>
      </Col>

      <Col md={12} className="mt-5 mb-2">
        <h2>BTN Outline</h2>
      </Col>
      <Col md={12}>
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>{' '}
        <Button outline color="artrogeno">artrogeno</Button>
      </Col>

      <Col md={12} className="mt-5 mb-2">
        <h2> BTN Large</h2>
      </Col>
      <Col md={12}>
        <Button color="primary" size="lg">primary</Button>{' '}
        <Button color="secondary" size="lg">secondary</Button>{' '}
        <Button color="success" size="lg">success</Button>{' '}
        <Button color="info" size="lg">info</Button>{' '}
        <Button color="warning" size="lg">warning</Button>{' '}
        <Button color="danger" size="lg">danger</Button>{' '}
        <Button color="artrogeno" size="lg">artrogeno</Button>
      </Col>

      <Col md={12} className="mt-5 mb-2">
        <h2>BTN Small</h2>
      </Col>
      <Col md={12}>
        <Button color="primary" size="sm">primary</Button>{' '}
        <Button color="secondary" size="sm">secondary</Button>{' '}
        <Button color="success" size="sm">success</Button>{' '}
        <Button color="info" size="sm">info</Button>{' '}
        <Button color="warning" size="sm">warning</Button>{' '}
        <Button color="danger" size="sm">danger</Button>{' '}
        <Button color="artrogeno" size="sm">artrogeno</Button>
      </Col>

      <Col md={12} className="mt-5 mb-2">
        <h2>BTN Block</h2>
      </Col>
      <Col md={12}>
        <Button color="primary" size="lg" block>primary</Button>{' '}
        <Button color="secondary" size="lg" block>secondary</Button>{' '}
        <Button color="success" size="lg" block>success</Button>{' '}
        <Button color="info" size="lg" block>info</Button>{' '}
        <Button color="warning" size="lg" block>warning</Button>{' '}
        <Button color="danger" size="lg" block>danger</Button>{' '}
        <Button color="artrogeno" size="lg" block>artrogeno</Button>
      </Col>
    </Row>
  </Container>
)

export default Buttons
