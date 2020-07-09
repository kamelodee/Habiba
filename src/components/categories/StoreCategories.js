import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
export default function StoreCategories() {
    return (
        <div className=" mt-3">
        <Row>
                <Col xs={3} md={2} sm={12}>
                    <div className="text-center  card-shadow py-2 px-2 text-center mt-2 ">
                    <div> <FontAwesomeIcon icon={faCartPlus} /></div>
                           <span>  Whole Sale </span>                      
                        
                    </div>
                </Col>
                <Col xs={3} md={3} sm={12}>
                    <div className="text-center card-shadow py-2 px-2 text-center mt-2 ">
                    <div> <FontAwesomeIcon icon={faCartPlus} /></div>
                        <span> Retail stores</span>     
                       
                    </div>
                </Col>
                <Col xs={3} md={3} sm={12}>
                    <div className="text-center card-shadow py-2 px-2 text-center mt-2">
                    <div> <FontAwesomeIcon icon={faCartPlus} /></div>
                        <span>  Manufacturing</span>
                       
                    </div>
                </Col>
                <Col xs={3} md={2} sm={12}>
                    <div  className="text-center card-shadow py-2 px-2 text-center mt-2">
                   
                   <div> <FontAwesomeIcon icon={faCartPlus} /></div>
                       <span>  Logistics</span>
                      
                    </div>
                </Col>
                <Col xs={3} md={2} sm={12}>
                    <div  className="text-center card-shadow py-2 px-2 text-center mt-2">
                    <div> <FontAwesomeIcon icon={faCartPlus} /></div>
                      <span> Automobile</span>
                       
                    </div>
                </Col>
        </Row>
       </div>

    )
}
