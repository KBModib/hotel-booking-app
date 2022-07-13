import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LandingPage.css';
import img1 from './assets/images/hiking.jpg';

export default function LandingPage() {

  
  return (
 <>
    <Header />
    <Carousel className="sliderContainer">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="1"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="2"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="3"
        />
      </Carousel.Item>
    </Carousel>
    <div className="roomsContainer"> 
    <Card className='room-cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Standard Room</Card.Title>
        <Card.Text>
        Glamping with a twist. Rainforest outside and birdies as your alarm clock. waterfall as your white noise machine putting you to sleep.
        </Card.Text>
        <Button><Link to="/rooms" className='rooms-btn'>View</Link></Button>
      </Card.Body>
    </Card> 
    <Card className='room-cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Deluxe Suite</Card.Title>
        <Card.Text>
        Rooms have been designed to give you the feeling of being in the  rainforest, with views of the rainforest from all angles. Room is vast and you feel like you are a step away from being amongst the animals in the trees of the forest.
        </Card.Text>
        <Button><Link to="/rooms" className='rooms-btn'>View</Link></Button>
      </Card.Body>
    </Card> 
    <Card className='room-cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Studio suite</Card.Title>
        <Card.Text>
        End to end view of the forest and your company. Studio suite is perfect for solo travellers,couples and even little families. This takes being your forest experience to the next level with stunning 360-degree views from every corner of the park.
        </Card.Text>
        <Button><Link to="/rooms" className='rooms-btn'>View</Link></Button>
      </Card.Body>
    </Card> <Card className='room-cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Executive Suite</Card.Title>
        <Card.Text>
        Luxury suites with smart technologies blend the natural forest atmosphere with technology. Beautiful furniture, lush textures that remind you of the jungle and luxurious furnishings for guests to enjoy.
        </Card.Text>
        <Button><Link to="/rooms" className='rooms-btn'>View</Link></Button>
      </Card.Body>
    </Card> <Card className='room-cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Penthouse</Card.Title>
        <Card.Text>
        Great for big groups of family and friends to stay in, or little families who just love their own private nooks and crans-sur-bois.
        </Card.Text>
        <Button><Link to="/rooms" className='rooms-btn'>View</Link></Button>
      </Card.Body>
    </Card> <Card className='room-cards'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Presidential Penthouse</Card.Title>
        <Card.Text>
        The property has been designed to blend the natural forest atmosphere with technology for guests to enjoy every aspect of a luxury holiday.
        </Card.Text>
        <Button><Link to="/rooms" className='rooms-btn'>View</Link></Button>
      </Card.Body>
    </Card>
    </div>
    <div className="amenitiesContainer">Amenities
    <Link to="/amenities" className='amenities-btn'>More</Link>
    </div>
    <Container className="contactContainer">
    <Row>
        <Col xs={12} md={8}>
          <h6>
              1987A Rigout Road 
              Trenture Side Oaks
              Apline Estate East
              1589476
            </h6>
        </Col>
        <Col xs={6} md={4}>
          <h6>
              +30-2106019311 (landline)
              +30-6977664062 (mobile phone)
              +30-2106398905 (fax)
              reception@forest.com
              bookings@foresthotel.com
            </h6>
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </Container>
    <Footer />
 </>
  )
};
