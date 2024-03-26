import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <section id="banner">
            <Container>
                <Row className='justify-content-end'>
                    <Col lg={7}>
                        <div class="ban-text">
                        <h1>I'M SAHED RAHMAN.</h1>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'I am a Front-End Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'I am a Bootstrap Developer',
                                    1000,
                                    'I am a React Developer',
                                    1000,
                                    'I am a Back-End Developer',
                                    1000,
                                    'I am a Python Developer',
                                    1000,
                                    'I am a Full Stack Developer',
                                    1000,
                                    'I am a Machine Learning Engineer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: "32px", display: 'inline-block', fontWeight: '600', color: 'yellow', paddingLeft: "70px"}}
                                repeat={Infinity}
                            />
                            <p>I'm a European based <b>Full Stack Developer </b> and <b>Machine Learning Engineer </b> focused on crafting clean & user‑friendly experiences, I am passionate about building excellent web applications that improves the lives of those around me.</p>
                            <a href="#"><button>MORE ABOUT ME</button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner