import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./work.css"
import Port1 from "../../assets/port1.png"
import Port3 from "../../assets/port3.png"
import Agency from "../../assets/agency.png"
import Port9 from "../../assets/port9.png"
import { Tabs, Tab } from 'react-bootstrap'
import Workreusable from '../workreusable/Workreusable'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from '../reviewreusable/Reviewreusable'
import RazibSir from "../../assets/Razibsir.jpeg"
import Orebi from "../../assets/orebi.png"
import NewsPro from "../../assets/newspro.png"

const Work = () => {
  var settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
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
          <Tabs defaultActiveKey="ecommerce" className="mb-4 list11">
            <Tab eventKey="ecommerce" title="E-Commerce">
              <Row>
                <Workreusable image={Orebi} title="Finsweet Multipage" content="Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies." github="https://github.com/SIRsahed/E-commerce" livesite="https://oreby-ecommerce.netlify.app/" />
              </Row>
            </Tab>
            <Tab eventKey="business" title="Business">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/SIRsahed/Finsweet-10Pages" livesite="https://sirsahed.github.io/Finsweet-10Pages/" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="https://github.com/SIRsahed/Nepali-Travel-Agency" livesite="https://sirsahed.github.io/Nepali-Travel-Agency/" />

                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/SIRsahed/Petro-Oil-Tailwind" livesite="https://github.com/SIRsahed/Petro-Oil-Tailwind" />

              </Row>
            </Tab>
            <Tab eventKey="newspaper" title="Newspaper">
              <Row>
                <Workreusable image={NewsPro} title="NewsPro" content="It's a newspaper website's template. It contains various contents and attractive styles. User interface is so attractive I" github="https://github.com/SIRsahed/NewsPro" livesite="https://sirsahed.github.io/NewsPro/" />
              </Row>
            </Tab>
            <Tab eventKey="portfolio" title="Portfolio">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/SIRsahed/Finsweet-10Pages" livesite="https://sirsahed.github.io/Finsweet-10Pages/" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="https://github.com/SIRsahed/Nepali-Travel-Agency" livesite="https://sirsahed.github.io/Nepali-Travel-Agency/" />

                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/SIRsahed/Petro-Oil-Tailwind" livesite="https://github.com/SIRsahed/Petro-Oil-Tailwind" />
              </Row>
            </Tab>
            <Tab eventKey="education" title="Education">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/SIRsahed/Finsweet-10Pages" livesite="https://sirsahed.github.io/Finsweet-10Pages/" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="https://github.com/SIRsahed/Nepali-Travel-Agency" livesite="https://sirsahed.github.io/Nepali-Travel-Agency/" />

                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/SIRsahed/Petro-Oil-Tailwind" livesite="https://github.com/SIRsahed/Petro-Oil-Tailwind" />
              </Row>
            </Tab>
            <Tab eventKey="restaurant" title="Restaurant">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/SIRsahed/Finsweet-10Pages" livesite="https://sirsahed.github.io/Finsweet-10Pages/" />

                <Workreusable image={Port3} title="Emprise Landing Page" content="This is a travel agency website named 'Emprise' with a variety of hovers and animations added. It is a Nepal Based Travel Agency website I" github="https://github.com/SIRsahed/Nepali-Travel-Agency" livesite="https://sirsahed.github.io/Nepali-Travel-Agency/" />

                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/SIRsahed/Petro-Oil-Tailwind" livesite="https://github.com/SIRsahed/Petro-Oil-Tailwind" />
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
              <Reviewreusable img={RazibSir} name="Razibur Rahman" designation="Sr Faculty, Creative IT Institute" company="Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
              <Reviewreusable img={RazibSir} name="Razibur Rahman" designation="Sr Faculty, Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
            </Slider>
          </div>
        </Row>
      </Container>
    </section >
  )
}

export default Work