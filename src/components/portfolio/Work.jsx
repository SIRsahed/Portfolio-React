import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./work.css"
import Port1 from "../../assets/port1.png"
import Port3 from "../../assets/port3.png"
import Port9 from "../../assets/port9.png"
import Port5 from "../../assets/port5.png"
import { Tabs, Tab } from 'react-bootstrap'
import Workreusable from '../workreusable/Workreusable'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from '../reviewreusable/Reviewreusable'
import RazibSir from "../../assets/Razibsir.jpeg"

const Work = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <section id="work" >
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
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port9} title="QWERy Indonesia" content="This was my first project when I was just learnt basic HTML and CSS. I designed this landing using only HTML and CSS, not responsive. I" github="Git Hub" livesite="Live Site" />

              </Row>
            </Tab>
            <Tab eventKey="portfolio" title="Portfolio">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port9} title="QWERy Indonesia" content="This was my first project when I was just learnt basic HTML and CSS. I designed this landing using only HTML and CSS, not responsive. I" github="Git Hub" livesite="Live Site" />
              </Row>
            </Tab>
            <Tab eventKey="education" title="Education">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port9} title="QWERy Indonesia" content="This was my first project when I was just learnt basic HTML and CSS. I designed this landing using only HTML and CSS, not responsive. I" github="Git Hub" livesite="Live Site" />
              </Row>
            </Tab>
            <Tab eventKey="ecommerce" title="E-Commerce">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port9} title="QWERy Indonesia" content="This was my first project when I was just learnt basic HTML and CSS. I designed this landing using only HTML and CSS, not responsive. I" github="Git Hub" livesite="Live Site" />
              </Row>
            </Tab>
            <Tab eventKey="blog" title="Blog">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port9} title="QWERy Indonesia" content="This was my first project when I was just learnt basic HTML and CSS. I designed this landing using only HTML and CSS, not responsive. I" github="Git Hub" livesite="Live Site" />
              </Row>
            </Tab>
            <Tab eventKey="restaurant" title="Restaurant">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices using Bootstrap V5.3 I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="Git Hub" livesite="Live Site" />

                <Workreusable image={Port9} title="QWERy Indonesia" content="This was my first project when I was just learnt basic HTML and CSS. I designed this landing using only HTML and CSS, not responsive. I" github="Git Hub" livesite="Live Site" />
              </Row>
            </Tab>
          </Tabs>
        </Row>
        <Row>
          <div className="review">
            <div className="review-head text-center">
              <h2>Testimonials</h2>
            </div>
            <Slider {...settings}>
              <Reviewreusable img={RazibSir} name="Razibur Rahman" designation="Sr Faculty, Web & Software" company="Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
              <Reviewreusable img={RazibSir} name="Bean Sandi" designation="Sr Faculty, Web & Software" company="Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
              <Reviewreusable img={RazibSir} name="Bean Sandi" designation="Sr Faculty, Web & Software" company="Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
              <Reviewreusable img={RazibSir} name="Bean Sandi" designation="Sr Faculty, Web & Software" company="Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
            </Slider>
          </div>
        </Row>
      </Container>
    </section >
  )
}

export default Work