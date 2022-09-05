import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import img5 from '.././src/assets/icons/instagram.png';
import img3 from '.././src/assets/icons/facebook (1).png';
import img1 from '.././src/assets/icons/twitter.png';
import img2 from '.././src/assets/icons/whatsapp.png';
import img4 from '.././src/assets/icons/tik-tok.png';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Header/>
      <div className='contact-container'>
        <h1>How to reach us</h1>
        <div className='contact-dets'>
          <div className='map'>
            <img src='' />
            <h3>
              1987A Rigout Road 
              Trenture Side Oaks
              Apline Estate East
              1589476 
            </h3>
          </div>
          <div className='contact-info'>
            <h3>+30-2106019311 (landline)</h3>
            <h3>+30-6977664062 (mobile phone)</h3>
            <h3>+30-2106398905 (fax)</h3>
            <h3>reception@forest.com<br/>bookings@foresthotel.com</h3>
          </div>
          <div className='social-info'>
            <img src={img1} alt=''className='contact-icon'/><h3>@foresthotelZN</h3>
            <img src={img2} alt=''className='contact-icon'/><h3>@foresthotelZN</h3>
            <img src={img3} alt=''className='contact-icon'/><h3>@foresthotelZN</h3>
            <img src={img4} alt=''className='contact-icon'/><h3>Forest Hotel Zululand</h3>
            <img src={img5} alt=''className='contact-icon'/><h3>@foresthotelZN</h3>
          </div>
          <ContactForm/>
        </div>
      </div>
      <Footer/>
    </>
  )
}



