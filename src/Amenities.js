import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Amenities() {
  return (
    <>
      <Header/>
      <h1>Amenities</h1>
      <h5>Some of the things activites we have on offer, on and off site</h5>
      <Container>
      <Row>
        <Col>
          <div className="img-1"></div>
          <h4>Uncapped WiFi and Business Centre</h4>
          <p>We have a large WiFi network and a business centre for your convenience.</p>
        </Col>
        <Col>
          <div className="img-2"></div>
          <h4>State of the art Gym</h4>
          <p>We have a state of the art gym with all the equipment you need to get fit.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="img-3"></div>
          <h4>Indoor and outdoor Spa</h4>
          <p>We have an indoor and outdoor spa for you to relax and get your body in shape.</p>
        </Col>
        <Col>
          <div className="img-4"></div>
          <h4>Outdoor spring water sourced pool</h4>
          <p>We have a naturally sourced pool for you to enjoy and relax in.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="img-5"></div>
          <h4>Forest and local town guides</h4>
          <p>We have a local guide for you to get to know the area and the local culture.</p>
        </Col>
        <Col>
          <div className="img-6"></div>
          <h4>Children's play centre</h4>
          <p>We have a children's play centre for you to play with your children.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="img-7"></div>
          <h4>Restaurant and Bar</h4>
          <p>We have a restaurant and bar for you to enjoy your stay.</p>
        </Col>
        <Col>
          <div className="img-8"></div>
          <h4>Stargazing centre</h4>
          <p>We have a stargazing centre for you to enjoy your stay.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="img-9"></div>
          <h2>Celebratory and Corporate Events</h2>
          <p>We have a large range of events for you to enjoy and enjoy your stay.</p>
        </Col>
      </Row>
      </Container>
      <h5>**Feel free to call our hotel prior to your stay to have an itinerary co-ordinated for you by your assigned concierge. A complete list of our amenities will be emailed to after confirmation of booking. Additional costs will be charged for activites that are not offered by us.</h5>
      <Footer/>
    </>
  )
}

