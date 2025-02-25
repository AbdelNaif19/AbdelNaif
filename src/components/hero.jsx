import React from 'react';
import profilePicture from '../assets/profile.png';
import AB from '../assets/AB.png';

const Hero = () => {
  return (
    <div className="hero-container">
        
      <div className="hero-image">
        <img src={profilePicture} alt="Abdel Naif P. Balacuit" />
      </div>

      <div className="hero-content">
        <div className='hero-initial'>
          <img src={AB} alt="" />
        </div>
        <h1>Hi, Its me <span>ABDEL NAIF BALACUIT</span></h1>
        <h2>Graphic Designer</h2>
      </div>

    </div>
  );
};

export default Hero;
