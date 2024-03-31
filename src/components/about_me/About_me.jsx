import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about_me.css";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaGraduationCap, FaPenRuler, FaBullhorn } from "react-icons/fa6";
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

const About_me = () => {
    return (
        <section id="about">
            <Container>
                <Row className="text-center">
                    <div class="about-head">
                        <h2>RESUME</h2>
                        <h3>about</h3>
                        <h4>me</h4>
                    </div>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <div class="all-head">
                                <h2>PERSONAL INFOS</h2>
                            </div>
                            <Col lg={6}>
                                <div class="about-left-left">
                                    <ul>
                                        <li>
                                            <p>First Name:</p> <span>Sahed</span>
                                        </li>
                                        <li>
                                            <p>Last Name:</p> <span>Rahman</span>
                                        </li>
                                        <li>
                                            <p>Age:</p> <span>21 Years</span>
                                        </li>
                                        <li>
                                            <p>Nationality:</p> <span>Bangladeshi</span>
                                        </li>
                                        <li>
                                            <p>Freelance:</p> <span>Available</span>
                                        </li>
                                    </ul>
                                    <a href="#">
                                        <button>
                                            Download cv <i class="fa-solid fa-cloud-arrow-down"></i>
                                        </button>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="about-left-right">
                                    <ul>
                                        <li>
                                            <p>Address:</p> <span>Dhaka</span>
                                        </li>
                                        <li>
                                            <p>Phone:</p>{" "}
                                            <span>
                                                <a href="tel:+8801609302239">+880 1609-302239</a>
                                            </span>
                                        </li>
                                        <li>
                                            <p>Email:</p>{" "}
                                            <span>
                                                <a href="mailto:sahedrahmanshakil@gmail.com">
                                                    shakil@gmail.com
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <p>Linkedin:</p> <span>Md. Sahed Rahman</span>
                                        </li>
                                        <li>
                                            <p>Languages:</p> <span>Bangla, English</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6}>
                                <div class="about-right">
                                    <h2>2+</h2>
                                    <h3>Years of Experience</h3>
                                </div>
                                <div class="about-right">
                                    <h2>50+</h2>
                                    <h3>Happy Customers</h3>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="about-right">
                                    <h2>30+</h2>
                                    <h3>Responsive Projects Done</h3>
                                </div>
                                <div class="about-right">
                                    <h2>5+</h2>
                                    <h3>
                                        Awards <br /> Won
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <div class="skill-head">
                        <h2>My Skills</h2>
                    </div>
                    <Col lg={{ span: 11, offset: 1 }}>
                        <Row>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={85}>
                                    <div className="center_text">
                                        <strong>
                                            85%
                                            <br />
                                            HTML
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={80}>
                                    <div className="center_text">
                                        <strong>
                                            80%
                                            <br />
                                            CSS
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={65}>
                                    <div className="center_text">
                                        <strong>
                                            65%
                                            <br />
                                            JAVASCRIPT
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={90}>
                                    <div className="center_text">
                                        <strong>
                                            90%
                                            <br />
                                            BOOTSTRAP
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={80}>
                                    <div className="center_text">
                                        <strong>
                                            80%
                                            <br />
                                            REACT JS
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={55}>
                                    <div className="center_text">
                                        <strong>
                                            55%
                                            <br />
                                            TAILWIND
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={70}>
                                    <div className="center_text">
                                        <strong>
                                            70%
                                            <br />
                                            NEXT JS
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbarWithChildren value={50}>
                                    <div className="center_text">
                                        <strong>
                                            50%
                                            <br />
                                            GIT
                                        </strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <div class="ex-head">
                        <h2>Experiences & Education</h2>
                    </div>
                    <Col lg={{ span: 11, offset: 1 }}>
                        <Row>
                            <Col lg={6}>
                                <div class="ex-item">
                                    <h4>2023 - PRESENT</h4>
                                    <h2>
                                        WEB DEVELOPER<span> - Creative IT</span>
                                    </h2>
                                    <p>
                                        At Creative IT Institute, pioneering avant-garde web
                                        solutions, fostering synergy, and mastering emerging
                                        technologies.
                                    </p>
                                    <RiHomeOfficeLine className="icon" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="ex-item">
                                    <h4>2023 - 2024</h4>
                                    <h2>
                                        Diploma DEGREE<span> - creative it</span>
                                    </h2>
                                    <p>
                                        Diploma graduate from Creative IT Institute, achieving
                                        excellence and distinction in web development with top
                                        honors.
                                    </p>
                                    <FaGraduationCap className="icon" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="ex-item">
                                    <h4>2023 - PRESENT</h4>
                                    <h2>
                                        Full Stack Developer<span> - Fiverr</span>
                                    </h2>
                                    <p>
                                        On Fiverr: Navigating dynamic challenges, coding innovation,
                                        and sculpting digital landscapes as a full-stack virtuoso.
                                    </p>
                                    <FaPenRuler className="icon" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="ex-item">
                                    <h4>2020 - 2022</h4>
                                    <h2>
                                        Higher Secondary<span> - GSC</span>
                                    </h2>
                                    <p>
                                        Higher Secondary Graduate from Government Science College,
                                        achieving first-class honors, demonstrating academic
                                        excellence.
                                    </p>
                                    <FaGraduationCap className="icon" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="ex-item">
                                    <h4>2022 - 2022</h4>
                                    <h2>
                                        Front End DEVELOPER<span> - Fiverr</span>
                                    </h2>
                                    <p>
                                        Fiverr front-end dev: Customized web solutions for diverse
                                        clients worldwide, honing versatility and client rapport.
                                    </p>
                                    <FaBullhorn className="icon" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="ex-item">
                                    <h4>2018 - 2020</h4>
                                    <h2>
                                        Secondary<span> - GSC</span>
                                    </h2>
                                    <p>
                                        Secondary School graduate from Gacchani Secondary School
                                        with perfect GPA 5.00, showcasing academic excellence and
                                        dedication.
                                    </p>
                                    <FaGraduationCap className="icon" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About_me;
