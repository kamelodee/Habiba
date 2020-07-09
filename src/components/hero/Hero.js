
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CategoriesSections from '../categories/CategoriesSections'
import StoreCategories from '../categories/StoreCategories'


export default function Hero() {

 
  const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


  return (
    <div className="container bg-white p-4 mt-3 hero">

      <Row>
      <Col xs={12} md={2} sm={6}>
          <CategoriesSections/>              
         
      </Col>
      <Col xs={12} md={10} sm={12}>
      <div className="container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../assets/images/caro1.jpg')}
              alt="First slide"
              height="300"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../assets/images/caro.jpg')}
              alt="Second slide"
              height="300"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../assets/images/caro2.jpg')}
              alt="Third slide"
              height="300"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
          </div>
          <StoreCategories/>
      </Col>
     
      </Row>
      </div>
  );

   
}
