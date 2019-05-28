import React from 'react'
import {
  Container, Row, Col, Button, FormGroup, Label,
  Input, InputGroup, InputGroupAddon, InputGroupText,
  Card, CardBody, CardHeader, CardTitle
} from 'reactstrap'

import './Contact.scss'
import BgImg12 from 'assets/images/bg/bg12.jpg'

const Contact = () => {
  return (
    <section id="contact" className="sectionScroll Contact section-image" style={{ backgroundImage: `url(${BgImg12})` }}>
      <Container>
        <Row className="pt-6">
          <Col md={6}>
            <Row noGutters>
              <Col md={12}>
                <h2 className="title">Contact</h2>
                <h4 className="description">
                  You need more information? Check what other persons are saying about our product.
                  They are very happy with their purchase.
                </h4>
              </Col>
              <Col md={12} className="info info-horizontal">
                <div className="icon icon-primary">
                  <span className="ar-icons ar-map-pin"></span>
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at the office</h4>
                  <p className="description"> Bld Mihail Kogalniceanu, nr. 8,<br />
                    7652 Bucharest,<br />
                    Romania
                      </p>
                </div>
              </Col>
              <Col md={12} className="info info-horizontal">
                <div className="icon icon-primary">
                  <span className="ar-icons ar-phone1"></span>
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p className="description">
                    Michael Jordan <br />
                    +40 762 321 762 <br />
                    Mon - Fri, 8:00-22:00
                      </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="text-center mr-auto ml-auto">
            <Card className="card-contact card-raised">
              <form id="contact-form" method="post">
                <CardHeader className="text-center">
                  <CardTitle tag="h2">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={6} className="pr-2 p-t-10">
                      <Label>First name</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <span className="ar-icons ar-user-11"></span>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="First Name..." aria-label="First Name..." />
                      </InputGroup>
                    </Col>
                    <Col md={6} className="pr-2 p-t-10">
                      <Label>Last name</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <span className="ar-icons ar-letter"></span>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Last Name..." aria-label="Last Name..." />
                      </InputGroup>
                    </Col>
                  </Row>
                  <FormGroup className="pr-2 p-t-10">
                    <Label>Email address</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <span className="ar-icons ar-gmail"></span>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email Here..." />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label>Your message</Label>
                    <Input type="textarea" name="message" id="message"/>
                  </FormGroup>

                  <Row>
                    <Col md={6}>
                      <div className="form-check">
                        <Label className="form-check-label">
                          <input className="form-check-input" type="checkbox" />
                          <span className="form-check-sign"></span>
                          I'm not a robot
                        </Label>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Button type="submit" outline color="secondary" className="btn-round pull-right">Send Message</Button>
                    </Col>
                  </Row>
                </CardBody>

              </form>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="hero-section" style={{ height: '200px' }}>
        <Row noGutters className="card-grid">

        </Row>
      </Container>
    </section>
  )
}

export default Contact
