import React, { Fragment } from 'react'
import { Spinner } from 'reactstrap'

const Load = (props) => (
  <Fragment>
    { props.active ? <Spinner type="grow" color="success" style={{ width: '3rem', height: '3rem' }} /> : props.children }
  </Fragment>
)

export default Load
