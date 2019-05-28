import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

import './CardLogo.scss'

const CardLogo = (props) => {
  let { data } = props
  return (
    <Card tag="a" className="CardLogo" href={data.link} target="blank">
      <CardHeader className="mt-2" dangerouslySetInnerHTML={{__html: data.header}}></CardHeader>
      <CardBody className="text-center p-4">
        <img src={data.image} className="img-fluid rounded-circle shadow" alt={data.title}/>
        <CardTitle tag="h4">{data.title}</CardTitle>
        <CardText tag="p" dangerouslySetInnerHTML={{__html: data.text}}></CardText>
        <CardSubtitle tag="h5" className="mt-4">{data.subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default CardLogo
