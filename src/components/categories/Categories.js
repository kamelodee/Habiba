import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Categories() {
    return (
        <div className="category-bg  p-5">
             <Card>
   
             <Row>
    <Col xs={6} md={2}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        cars
    </Col>
    <Col xs={6} md={2}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        electronics
    </Col>
    <Col xs={6} md={2}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        phones
    </Col>
    <Col xs={6} md={2}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        properties
    </Col>
    <Col xs={6} md={2}>
    <FontAwesomeIcon icon={faCartPlus} />
    </Col>
                    <Col xs={6} md={2}>
                        agriculture
    <FontAwesomeIcon icon={faCartPlus} />
    </Col>
   </Row>
   </Card>
        </div>
    )
}
