import React from 'react'
import "./reviewreusable.css"
import { Col } from 'react-bootstrap'

const Reviewreusable = (props) => {
    return (
        <>
            <Col lg={{ span: 8, offset: 2 }}>
                <div className="review-item">
                    <div className="item-left">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="item-right">
                        <p>{props.comment}</p>
                        <h3>{props.name}</h3>
                        <h4>{props.designation}</h4>
                        <h5>{props.company}</h5>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Reviewreusable