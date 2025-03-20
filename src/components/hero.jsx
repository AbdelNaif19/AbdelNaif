import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/profile.png';
import AB from '../assets/AB.png';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-container">
        
      <div className="hero-image">
        <img src={profilePicture} alt="Abdel Naif P. Balacuit" />
      </div>

      <div className="hero-content">
        <div className='hero-initial'>
          <img src={AB} alt="" />

        <div className='burger-menu' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
              <div className="close-icon">&times;</div> // X icon
          ) : (
              <>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
              </>
          )}
          </div>

          <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/work"}>Work</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
          </nav>

        </div>

        <h1>Hi, It's me <span>ABDEL NAIF BALACUIT</span></h1>
        <h2>Graphic Designer</h2>
      </div>

    </div>
  );
};

export default Hero;
