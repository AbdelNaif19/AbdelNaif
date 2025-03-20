import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Icon1 from "../assets/cooperate-icon.png";
import Icon2 from "../assets/multitask-icon.png";
import Icon3 from "../assets/achiever-icon.png";
import AB from '../assets/AB.png';

const About = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="about-container">
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
    
                {/* Navigation Menu */}
                <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/work"}>Work</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
                </nav>
    
            </div>

            <div className="about-title">
                <h1>ABOUT ME</h1>
            </div>

            <div className="about-box">
                <div className="cooperate">
                    <h1>COOPERATE</h1>
                    <p>Cooperating diffent <br />task in a company</p>
                    <div className="icon">
                        <img src={Icon1} alt="" />
                    </div>
                </div>

                <div className="multitask">
                    <h1>MULTITASKER</h1>
                    <p>Handling different task <br />at the same time</p>
                    <div className="icon">
                        <img src={Icon2} alt="" />
                    </div>
                </div>

                <div className="achiever">
                    <h1>ACHIEVER</h1>
                    <p>Pursuing his dream to <br />become achiever</p>
                    <div className="icon">
                        <img src={Icon3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
