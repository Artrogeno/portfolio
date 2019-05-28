import React, { useState } from 'react'
import {
  Container, Row, Col,
  Nav, NavItem, NavLink,
  TabContent, TabPane
  // Card, CardBody, CardTitle
} from 'reactstrap'
import classnames from 'classnames'

import CardBackground from '../UI/CardBackground/CardBackground';

import BgImg2 from 'assets/images/bg/bg2.jpg'
import BgImg7 from 'assets/images/bg/bg7.jpg'
import BgImg8 from 'assets/images/bg/bg8.jpg'
import BgImg11 from 'assets/images/bg/bg11.jpg'
import './Skills.scss'

const Skills = () => {
  let [activeTab, setActiveTab] = useState ('front')

  return (
    <section id="skills" className="sectionScroll Skills">
      <Container fluid className="section-image" style={{backgroundImage: `url('${BgImg11}')`}}>
        <Container>
          <Row noGutters className="pt-6 wrap-skills">
            <Col md={6} className="text-center mr-auto ml-auto">
              <h2 className="title">Trello lets you work more.</h2>
              <p className="subtitle wrap-skills">
                Trello’s boards, lists, and cards enable you
                to organize and prioritize your projects in a fun,
                flexible and rewarding way.
                </p>
            </Col>
          </Row>

          <Row className="align-items-center pb-3 pt-4 wrap-skills">
            <Col md={6}>
              <Nav vertical>
                <NavItem className="m-auto">
                  <NavLink className={classnames('info info-horizontal', { active: activeTab === 'front' })} onClick={() => { setActiveTab('front') }}>
                    <div className="icon">
                      <i className="ar-icons ar-html5 text-orange"></i>
                    </div>
                    <div className="description">
                      <h3 className="info-title">For Developers</h3>
                      <p>The moment you use Black Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="m-auto">
                  <NavLink className={classnames('info info-horizontal', { active: activeTab === 'back' })} onClick={() => { setActiveTab('back') }}>
                    <div className="icon">
                      <i className="ar-icons ar-node-dot-js text-green"></i>
                    </div>
                    <div className="description">
                      <h3 className="info-title">For Developers</h3>
                      <p>The moment you use Black Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="m-auto">
                  <NavLink className={classnames('info info-horizontal', { active: activeTab === 'database' })} onClick={() => { setActiveTab('database') }}>
                    <div className="icon">
                      <i className="ar-icons ar-database1 text-blue"></i>
                    </div>
                    <div className="description">
                      <h3 className="info-title">For Developers</h3>
                      <p>The moment you use Black Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col md={6} className="ml-auto">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="front">
                  <Row className="content-tab">
                    <h1>Front</h1>
                  </Row>
                </TabPane>

                <TabPane tabId="back">
                  <Row className="content-tab">
                    <h1>Back</h1>
                  </Row>
                </TabPane>

                <TabPane tabId="database">
                  <Row className="content-tab">
                    <h1>Database</h1>
                  </Row>
                </TabPane>

              </TabContent>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="mt-6">
        <Row>
          <Col md={4}>
            <CardBackground background={BgImg2} fonticon={["ar-react text-blue", "ar-node-dot-js text-green", "ar-mongodb text-artrogeno"]} />
          </Col>
          <Col md={4}>
            <CardBackground background={BgImg7} fonticon={["ar-angular text-red", "ar-laravel text-red", "ar-postgresql text-blue"]} />
          </Col>
          <Col md={4}>
            <CardBackground background={BgImg8} fonticon={["ar-react text-blue", "ar-redux text-info", "ar-java", "ar-mysql text-blue"]} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
