import React from 'react'
import { Card, CardBody, CardLink, CardTitle } from 'reactstrap'

import './CardProfile.scss'

const CardProfile = (props) => {
  const {image, data} = props
  return (
    <Card className="CardProfile card-prodile">
      <div className="full-background" style={{backgroundImage: `url(${image})`}}></div>
      <CardBody>
        <div className="card-content-bottom">
          <CardTitle tag="h3">{data.title}</CardTitle>
          {
            data.links.map((item, i) => (
              <CardLink key={i} href={item.href} tag="a">
                {item.icon ? <span className={`ar-icons ${item.icon}`}></span> : null}
                {item.title}
              </CardLink>
            ))
          }
        </div>
      </CardBody>
    </Card>
  )
}

export default CardProfile
