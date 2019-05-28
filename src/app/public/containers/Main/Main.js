import React from 'react'
import { Container } from 'reactstrap'

import Home from 'app/public/components/Home/Home'
import About from 'app/public/components/About/About'
import Skills from 'app/public/components/Skills/Skills'
import Portfolio from 'app/public/components/Portfolio/Portfolio'
import Contact from 'app/public/components/Contact/Contact'
import Footer from 'app/public/components/Footer/Footer'

const Main = () => (
  <Container fluid className="page">
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </Container>
)

export default Main
