import React, { Fragment } from 'react'
import { Row, Col, Progress } from 'reactstrap'

const SkillProgress = (props) => {
  const { data } = props

  return (
    <Fragment>
      {
        data.map((item, i) => (
          <Row noGutters key={i}>
            <Col className="mr-1rem mr-1rem" md={{ size: 'auto' }}>
              <span className={`ar-icons ${item.icon} ${item.iconColor} font-1dot6rem`}></span>
            </Col>
            <Col md={10}>
              <Progress value={item.progress} color={item.color || ''} className={`progress-dark progress-size-2 ${item.align}`}>
                {item.title}
              </Progress>
            </Col>
          </Row>
        ))
      }
    </Fragment>
  )
}

export default SkillProgress
