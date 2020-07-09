import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
export default function Stores() {
    return (
        <div className="container  p-3 card mt-5">
            <h2>Closese Stores</h2>
             <Row>
    <Col xs={6} md={3}>
    <Card>
    <Card.Img variant="top" src={require('../../assets/images/caro1.jpg')} />
    <Card.Body>
      <Card.Text>
      Tvs
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={3}>
    <Card>
    <Card.Img variant="top" src={require('../../assets/images/caro.jpg')} />
    <Card.Body>
      <Card.Text>
    Phones
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={3}>
    <Card>
    <Card.Img variant="top" src={require('../../assets/images/caro2.jpg')} />
    <Card.Body>
      <Card.Text>
      Fashion
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={3}>
    <Card>
    <Card.Img variant="top" src={require('../../assets/images/caro.jpg')} />
    <Card.Body>
      <Card.Text>
      Agriculture
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={3}>
    <Card>
    <Card.Img variant="top" src={require('../../assets/images/caro2.jpg')} />
    <Card.Body>
      <Card.Text>
        Electronice
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={3}>
    <Card>
    <Card.Img variant="top" src={require('../../assets/images/caro1.jpg')} />
    <Card.Body>
      <Card.Text>
Cars
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
  </Row>
        </div>
    )
}
