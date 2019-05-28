import React from 'react'
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap'

const Cards = () => (
  <Container>
    <Row>
      <Col md={12} className="m-2">
        <h2>Card Basic Example</h2>
      </Col>
      <Col md={4} className="d-flex">
        <Card>
          <CardBody>
            <div className="mb-3 mb-lg-5 flex-grow-1">
              <span className="h2 mb-0">Color Matching</span>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <Button class="hover-arrow">Learn More</Button>
          </CardBody>
        </Card>
      </Col>

    </Row>
  </Container>
)

export default Cards
