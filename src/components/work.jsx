import React, {useState} from "react";
import { Link } from 'react-router-dom';
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import AB from '../assets/AB.png';

const Work = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
       <div className="work-container">
        <div className='initial'>
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

            <div className="work-title">
                <h1>MY <span>WORKS</span></h1>
            </div>

            <div className="work-box">
                <div className="works">
                    <WorkBox image={work1} />
                    <WorkBox image={work2} />
                </div>
                
                <div className="works">
                    <WorkBox image={work3} />
                    <WorkBox image={work4} />
                </div>
            </div>

       </div>
    );
};

const WorkBox = ({ image }) => {
    return (
      <>
      <div className="work-bx">
        <img src={image} alt="Work Preview" />
        <div className="overlay">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-eye preview-icon"></i>
          </a>
        </div>
      </div>
      </>
    );
  };

export default Work;