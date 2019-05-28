import React from 'react'
import { Container,  NavItem, NavLink } from 'reactstrap'

import { ScrollSpy } from 'app/components/UI/ScrollSpy'
import './Footer.scss'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <footer className="Footer">
      <Container>
        <nav>
          <ScrollSpy
            className="nav d-flex flex-row"
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
        </nav>

        <div className="copyright">
          © 2016 - {year}, Coded by <a href="https://github.com/Artrogeno" target="blank">Artrogeno</a>.
        </div>
      </Container>
    </footer>
  )
  }

export default Footer
