import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import img1 from '.././src/assets/images/business centre.jpg';
import img2 from '.././src/assets/images/gym.jpg';
import img3 from '.././src/assets/images/spa rainforest.jpg';
import img4 from '.././src/assets/images/hotel image 3.jpg';
import img5 from '.././src/assets/images/hiking.jpg';
import img6 from '.././src/assets/images/playroom.jpg';
import img7 from '.././src/assets/images/hotel image 2.jpg';
import img8 from '.././src/assets/images/stargazing.jpg';
import img9 from '.././src/assets/images/wedding image outdoor 2.jpg';
import './Amenities.css';


export default function Amenities() {
  return (
    <>
      <Header/>
      <h1>Amenities</h1>
      <h5>Some of the things activites we have on offer, on and off site</h5>
      <table className="amenities-container">
      <tr>
        <td className='images'>
          <img src={img1} alt=''/>
          </td>
          <td className='text'>
           <h4>Uncapped WiFi and Business Centre</h4>
           <p>We have a large WiFi network and a business centre for your convenience.</p>
        </td>
        <td className='images'>
        <img src={img2} alt=''/>
        </td>
        <td className='text'>
          <h4>State of the art Gym</h4>
          <p>We have a state of the art gym with all the equipment you need to get fit.</p>
        </td>
      </tr>
      <tr>
        <td className='images'>
        <img src={img3} alt=''/></td>
        <td className='text'>
          <h4>Indoor and outdoor Spa</h4>
          <p>We have an indoor and outdoor spa for you to relax and get your body in shape.</p>
        </td>
        <td className='images'>
        <img src={img4} alt=''/></td>
        <td className='text'>
          <h4>Outdoor spring water sourced pool</h4>
          <p>We have a naturally sourced pool for you to enjoy and relax in.</p>
        </td>
      </tr>
      <tr>
        <td className='images'>
        <img src={img5} alt=''/></td>
        <td className='text'>
          <h4>Forest and local town guides</h4>
          <p>We have a local guide for you to get to know the area and the local culture.</p>
        </td>
        <td className='images'>
        <img src={img6} alt=''/></td>
        <td className='text'>
          <h4>Children's play centre</h4>
          <p>We have a children's play centre for you to play with your children.</p>
        </td>
      </tr>
      <tr>
        <td className='images'>
        <img src={img7} alt=''/></td>
        <td className='text'>
          <h4>Restaurant and Bar</h4>
          <p>We have a restaurant and bar for you to enjoy your stay.</p>
        </td>
        <td className='images'>
        <img src={img8} alt=''/></td>
        <td className='text'>
        <h4>Stargazing centre</h4>
          <p>We have a stargazing centre for you to enjoy your stay.</p>
        </td>
      </tr>
      <tr>
        <td className='image-lastrow'>
        <img src={img9} alt=''/>
        </td>
        <td className='lastrow-heading'><h2>Celebratory and Corporate Events</h2></td>
        <td className='lastrow-text'><p>We have a large range of events for you to enjoy and enjoy your stay. Be it your birthday celebreation, anniversary, your big day, graduation party, reunion, year-end party, baby shower, team-building, conference and any other event that you may think of that you want to celebrate. We've got you.<br/><br/> Email:events@foresthotel.com or call Sabrina Avenigle on +30 585238696236/38</p></td>
      </tr>
      </table>
      <h5 className='lower-text'>**Feel free to call our hotel prior to your stay to have an itinerary co-ordinated for you by your assigned concierge. A complete list of our amenities will be emailed to after confirmation of booking. Additional costs will be charged for activites that are not offered by us.</h5>
      <Footer/>
    </>
  )
}

