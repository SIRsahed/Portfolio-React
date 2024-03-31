import React from 'react'
import { Col } from 'react-bootstrap'
import "./workreusable.css"

const Workreusable = (props) => {
    return (
        <>
            <Col lg={4}>
                <div className="project">
                    <img src={props.image} alt="" className='w-100' />
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <a href="https://github.com/SIRsahed/Finsweet-10Pages" target='blank'>{props.github}</a>
                    <a href="https://sirsahed.github.io/Finsweet-10Pages/" target='blank'>{props.livesite}</a>
                </div>
            </Col>
        </>
    )
}

export default Workreusable