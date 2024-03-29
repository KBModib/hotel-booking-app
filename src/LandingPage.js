import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LandingPage.css';
import img1 from '.././src/assets/images/hotel image.jpg';
import img2 from '.././src/assets/images/hotel image 2.jpg';
import img3 from '.././src/assets/images/hotel image 3.jpg';
import img4 from '.././src/assets/images/spa.jpg';
import img5 from '.././src/assets/images/wedding image indoor.jpg';
import img6 from '.././src/assets/images/hotel image.jpg';
import img7 from '.././src/assets/images/standard room.jpg';
import img8 from '.././src/assets/images/deluxe suite.jpg';
import img9 from '.././src/assets/images/studio suite.jpg';
import img10 from '.././src/assets/images/executive suite.jpg';
import img11 from '.././src/assets/images/penthouse.jpg';
import img12 from '.././src/assets/images/pres Penthouse.jpg';
import img13 from '.././src/assets/icons/wifi.png';
import img14 from '.././src/assets/icons/spa.png';
import img15 from '.././src/assets/icons/dumbell.png';
import img16 from '.././src/assets/icons/parking.png';
import img17 from '.././src/assets/icons/airport.png';
import img18 from '.././src/assets/icons/hiking.png';
import img24 from '.././src/assets/icons/instagram.png';
import img22 from '.././src/assets/icons/facebook (1).png';
import img20 from '.././src/assets/icons/twitter.png';
import img21 from '.././src/assets/icons/whatsapp.png';
import img23 from '.././src/assets/icons/tik-tok.png';
import img19 from '.././src/assets/icons/bell.png';

export default function LandingPage() {

  
  return (
 <>
    <Header />
    <Carousel fade className="sliderContainer">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="1"
          
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="2"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img4}
          alt="3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img5}
          alt="3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img6}
          alt="3"
        />
      </Carousel.Item>
    </Carousel>
    <div>
      <h1 className='rooms-titles'>Rooms on offer</h1>
      <div className="roomsContainer"> 
      <Card className='room-cards'>
        <Card.Img variant="top" src={img7} className='room-card-img'/>
        <Card.Body>
          <Card.Title className='room-card-title'>Standard Room</Card.Title>
          <Card.Text className='room-card-text'>
          Glamping with a twist. Rainforest outside and birdies as your alarm clock. waterfall as your white noise machine putting you to sleep.
          </Card.Text>
          <Button className='room-btn rb-1'><Link to="/rooms" className='rooms-btn'>View</Link></Button>
        </Card.Body>
      </Card> 
      <Card className='room-cards'>
        <Card.Img variant="top" src={img8} className='room-card-img'/>
        <Card.Body>
          <Card.Title className='room-card-title'>Deluxe Suite</Card.Title>
          <Card.Text className='room-card-text'>
          Rooms have been designed to give you the feeling of being in the  rainforest, with views of the rainforest from all angles. Room is vast and you feel like you are a step away from being amongst the animals in the trees of the forest.
          </Card.Text>
          <Button className='room-btn rb-2'><Link to="/rooms" className='rooms-btn'>View</Link></Button>
        </Card.Body>
      </Card> 
      <Card className='room-cards'>
        <Card.Img variant="top" src={img9} className='room-card-img'/>
        <Card.Body>
          <Card.Title className='room-card-title'>Studio suite</Card.Title>
          <Card.Text className='room-card-text'>
          End to end view of the forest and your company. Studio suite is perfect for solo travellers,couples and even little families. This takes being your forest experience to the next level with stunning 360-degree views from every corner of the park.
          </Card.Text>
          <Button className='room-btn rb-3'><Link to="/rooms" className='rooms-btn'>View</Link></Button>
        </Card.Body>
      </Card> 
      <Card className='room-cards'>
        <Card.Img variant="top" src={img10} className='room-card-img'/>
        <Card.Body>
          <Card.Title className='room-card-title'>Executive Suite</Card.Title>
          <Card.Text className='room-card-text'>
          Luxury suites with smart technologies blend the natural forest atmosphere with technology. Beautiful furniture, lush textures that remind you of the jungle and luxurious furnishings for guests to enjoy.
          </Card.Text>
          <Button className='room-btn rb-4'><Link to="/rooms" className='rooms-btn'>View</Link></Button>
        </Card.Body>
      </Card>
      <Card className='room-cards'>
        <Card.Img variant="top" src={img11} className='room-card-img'/>
        <Card.Body>
          <Card.Title className='room-card-title'>Penthouse</Card.Title>
          <Card.Text className='room-card-text'>
          Great for big groups of family and friends to stay in, or little families who just love their own private nooks and crans-sur-bois.
          </Card.Text>
          <Button className='room-btn rb-5'><Link to="/rooms" className='rooms-btn'>View</Link></Button>
        </Card.Body>
      </Card> 
      <Card className='room-cards'>
        <Card.Img variant="top" src={img12} className='room-card-img'/>
        <Card.Body>
          <Card.Title className='room-card-title'>Presidential Penthouse</Card.Title>
          <Card.Text className='room-card-text'>
          The property has been designed to blend the natural forest atmosphere with technology for guests to enjoy every aspect of a luxury holiday.
          </Card.Text>
          <Button className='room-btn rb-6'><Link to="/rooms" className='rooms-btn'>View</Link></Button>
        </Card.Body>
      </Card>
      </div>
    </div>
    <div className="amenitiesContainer">
      <ul>
        <li>
          <h1>Amenities</h1><br/>
          <p>Available to all guests. Equire about access passes</p>
        </li>
        <li>
          <img src={img13} alt="1" className='amenities-img'/>
          <h4>Wi-Fi</h4><br/>
          <p>Uncappped</p>
        </li>
        <li>
          <img src={img14} alt="1" className='amenities-img'/>
          <h4>Spa</h4>
        </li>
        <li>
          <img src={img15} alt="1" className='amenities-img'/>
          <h4>Gym</h4>
        </li>
        <li>
          <img src={img16} alt="1" className='amenities-img'/>
          <h4>Secured Parking</h4>
        </li>
        <li>
          <img src={img17} alt="1" className='amenities-img'/>
          <h4>Transfers</h4>
        </li>
        <li>
          <img src={img18} alt="1" className='amenities-img'/>
          <h4>Forest Guides</h4>
        </li>
        <li>
          <img src={img19} alt="1" className='amenities-img'/>
          <h4>Concierge</h4>
        </li>
        <li className='amenities-btn-container'>
          <Link to="/amenities" className='amenities-btn'>More</Link>
        </li>
      </ul>
    </div>
    <div className="contactContainer">
    <ul>
        <li>
          <div className='mapstyle'></div>
          <h3 className='contact-detail'>
              1987A Rigout Road 
              Trenture Side Oaks
              Apline Estate East
              1589476
            </h3>
        </li>
        <li>
          <h3 className='contact-details'>+30-2106019311 (landline)</h3>
          <h3 className='contact-details'>+30-6977664062 (mobile phone)</h3>
          <h3 className='contact-details'> +30-2106398905 (fax)</h3>
          <h3 className='contact-details'>reception@forest.com</h3>
          <h3 className='contact-details'>bookings@foresthotel.com</h3>
        </li>
        <li>
        <img src={img20} alt="1" className='contact-icon'/><h4>@foresthotelZN</h4>
        <img src={img21} alt="1" className='contact-icon'/><h4>@foresthotelZN</h4>
        <img src={img22} alt="1" className='contact-icon'/><h4>@foresthotelZN</h4>
        <img src={img23} alt="1" className='contact-icon'/><h4>Forest Hotel Zululand</h4>
        <img src={img24} alt="1" className='contact-icon'/><h4>@foresthotelZN</h4>
        </li>
      </ul>
    </div>
    <Footer />
 </>
  )
};
