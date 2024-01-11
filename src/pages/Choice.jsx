import React from 'react';
import '../component/Choice.css';
import Navbar from '../component/Navbar';
import Main from '../component/Main';


const Choice = () => {
  return (
    <div className="container--choice">
    <Navbar/>
    <Main greating = {"Namaste !!!"} wish={"This is how we say great in India"} target={"Explore Our New collection"}/>
    <div className="flip-car-container">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="https://www.ikea.com/images/a0/7c/a07c9e5a0fcf9d962f5e2049358e9747.png?f=xxs" alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect &amp; Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
    </div>
     
    </div>
  )
}

export default Choice
