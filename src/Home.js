import React, { useState } from 'react';
import './Home.css';
import Footer from './Footer';
export default function Home(){
    return (<>
        <div className="home-container">
          
          <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to our App.</h1>
        <p>Experience the best features and services.</p>  
        <h1>About Our Appliance Booking System.</h1>
        <p>
          Welcome to our online appliance booking system! We aim to provide a seamless and convenient way for you to book appliances for various purposes.
        </p>
        <h2>Key Features:</h2>
        <ul>
          <li>•     Explore a wide range of appliances for booking.</li>
          <li>•     Simple and user-friendly interface for easy navigation.</li>
          <li>•     Secure online transactions for appliance reservations.</li>
          <li>•     Track the status of your bookings in real-time.</li>
          <li>•     Responsive customer support for any inquiries.</li>
        </ul>
        <h2>How It Works:</h2>
        <ol>
          <li>Browse through our catalog of available appliances.</li>
          <li>Select the appliance you want to book and choose your preferred dates.</li>
          <li>Complete the booking process by providing necessary details.</li>
          <li>Receive confirmation and details of your booking via email.</li>
          <li>Enjoy the convenience of your reserved appliance on the scheduled dates.</li>
        </ol>
        <p>
          We are committed to providing you with a hassle-free experience in booking appliances for your needs. If you have any questions or feedback, feel free to <a href="/contact">contact us</a>.
        </p>
      </div>
      </div>
    </div>
      <Footer></Footer>
      </>
          )
          };