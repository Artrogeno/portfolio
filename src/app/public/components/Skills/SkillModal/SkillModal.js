import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Timeline from 'app/components/UI/Timeline/Timeline'
import SkillProgress from 'app/public/components/UI/SkillProgress/SkillProgress'

const SkillModal = (props) => {
  let { data } = props
  return (
    <Fragment>
      <Container fluid>
        <Row noGutters className="pt-2 wrap-skills">
          <Col md={6} className="text-center mr-auto ml-auto">
            <h2 className="title">{data.title}</h2>
            <p className="subtitle wrap-skills">{data.subtitle}</p>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row>
          <Col md={6} className="pt-4">
            <Timeline data={data.timeline} />
          </Col>
          <Col md={6} className="pt-4">
            <Row noGutters>
              <Col md={12}>
                <h2 className="title pt-1rem">{data.titleSkill}</h2>
              </Col>
              <Col md={12} className="pt-4">
                <SkillProgress data={data.skills} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default SkillModal
