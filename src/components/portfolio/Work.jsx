import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./work.css"
import Port1 from "../../assets/port1.png"
import Port3 from "../../assets/port3.png"
import Port5 from "../../assets/port5.png"
import { Tabs, Tab } from 'react-bootstrap'

const Work = () => {
  return (
    <section id="work">
      <Container>
        <Row className='text-center'>
          <div className="work_head">
            <h2>Works</h2>
            <h3>My</h3>
            <h4>Portfolio</h4>
          </div>
        </Row>
        <Row className='text-center'>
          <Tabs defaultActiveKey="business" className="mb-4 list11">
            <Tab eventKey="business" title="Business">
              <Row>
                <Col lg={4}>
                  <div className="project">
                    <img src={Port1} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port3} alt="" className='w-100' />
                    <h3>Emprise Landing Page</h3>
                    <p>This is a travel agency website named "Emprise" with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I</p>
                    <a href="https://github.com/SIRsahed/Nepali-Travel-Agency" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Nepali-Travel-Agency/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port5} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="portfolio" title="Portfolio">
            <Row>
                <Col lg={4}>
                  <div className="project">
                    <img src={Port1} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port3} alt="" className='w-100' />
                    <h3>Emprise Landing Page</h3>
                    <p>This is a travel agency website named "Emprise" with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I</p>
                    <a href="https://github.com/SIRsahed/Nepali-Travel-Agency" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Nepali-Travel-Agency/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port5} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="education" title="Education">
            <Row>
                <Col lg={4}>
                  <div className="project">
                    <img src={Port1} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port3} alt="" className='w-100' />
                    <h3>Emprise Landing Page</h3>
                    <p>This is a travel agency website named "Emprise" with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I</p>
                    <a href="https://github.com/SIRsahed/Nepali-Travel-Agency" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Nepali-Travel-Agency/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port5} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="ecommerce" title="E-Commerce">
            <Row>
                <Col lg={4}>
                  <div className="project">
                    <img src={Port1} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port3} alt="" className='w-100' />
                    <h3>Emprise Landing Page</h3>
                    <p>This is a travel agency website named "Emprise" with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I</p>
                    <a href="https://github.com/SIRsahed/Nepali-Travel-Agency" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Nepali-Travel-Agency/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port5} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="blog" title="Blog">
            <Row>
                <Col lg={4}>
                  <div className="project">
                    <img src={Port1} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port3} alt="" className='w-100' />
                    <h3>Emprise Landing Page</h3>
                    <p>This is a travel agency website named "Emprise" with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I</p>
                    <a href="https://github.com/SIRsahed/Nepali-Travel-Agency" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Nepali-Travel-Agency/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port5} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="restaurant" title="Restaurant">
            <Row>
                <Col lg={4}>
                  <div className="project">
                    <img src={Port1} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port3} alt="" className='w-100' />
                    <h3>Emprise Landing Page</h3>
                    <p>This is a travel agency website named "Emprise" with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I</p>
                    <a href="https://github.com/SIRsahed/Nepali-Travel-Agency" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Nepali-Travel-Agency/" target='blank'>Live Site</a>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="project">
                    <img src={Port5} alt="" className='w-100' />
                    <h3>Finsweet Multipage</h3>
                    <p>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>Git Hub</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>Live Site</a>
                  </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </section>
  )
}

export default Work