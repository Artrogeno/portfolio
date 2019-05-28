import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

import './CardBackground.scss'

const CardBackground = (props) => {
  let { background, fonticon } = props
  return (
    <Card className="CardBackground" style={{backgroundImage: `url(${background})`}}>
      <CardBody className="text-left">
        <h6 className="card-category">
          { fonticon.map((item, i) => (<span className={`ar-icons ${item}`} key={i}></span> )) }
        </h6>
        <Button color="link">
          <CardTitle tag="h1">Project Alpha</CardTitle>
        </Button>

        <CardSubtitle tag="h6">Java App</CardSubtitle>
        <Button color="info">Watch Later</Button>
      </CardBody>
    </Card>
  )
}

export default CardBackground
