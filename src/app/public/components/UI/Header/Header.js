import React, { useState } from 'react'
// import { NavLink as NavHref } from 'react-router-dom'
import {
  Container, Collapse,
  Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink
} from 'reactstrap'

import { ScrollSpy, ScrolledTop } from 'app/components/UI/ScrollSpy'

const Header = () => {
  const [isOpen, toggleCollapse] = useState(false)

  return (
    <Navbar color="dark" dark fixed="top" expand="md" className="header-nav active" id="NavBarTop">
      <Container>
        <ScrolledTop tag="home">
          <NavbarBrand>Artrogeno</NavbarBrand>
        </ScrolledTop>
        <NavbarToggler onClick={toggleCollapse} />
        <Collapse isOpen={isOpen} navbar>
          <ScrollSpy
            className="ml-auto navbar-nav"
            navClass="nav-link"
            activeClass="nav-active"
            level={2}
            offset={10}
            selectorClass="sectionScroll"
            navbarId="NavBarTop"
            navbarClass="active"
            navbarOffset={300}>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </ScrollSpy>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
