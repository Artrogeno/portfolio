import React from 'react'
import { NavLink } from 'reactstrap'

const NavlinkStrap = (props) => (
  <NavLink className={props.className} onClick={props.click}>
    {props.children}
  </NavLink>
)

export default NavlinkStrap
