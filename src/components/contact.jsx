import React, {useState} from "react";
import { Link } from 'react-router-dom';
import contact from "../assets/contact.jpg";
import AB from '../assets/AB.png';

const Contact = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <>
        <div className="contact-container">
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

            <div className="top-container">
                <img src={contact} alt="" />
            </div>

            <div className="btm-container">
                <div className="btm-1">
                    <h1>SUGGESTIONS?</h1>
                    <h1>QUESTIONS?</h1>
                </div>

                <div className="btm-2">
                    <h1>MY CONTACT:</h1>
                    <p><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a> <span>ABDEL NAIF PAKING BALACUIT</span></p>
                    <p><a href="https://www.phone.com">
                        <i className="fas fa-phone-alt"></i>
                    </a><span>+63 9538699373</span></p>
                    <p><a href="https://www.email.com" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-envelope"></i>
                        </a><span>ABDELNAIF19@GMAIL.COM</span></p>
                    <div className="contact-btn">
                        {/* <button>FILL UP FORM</button> */}
                        <button onClick={() => setModalOpen(true)}>SEND A MESSAGE  </button>
                    </div>
                </div>
            </div>
        </div>

        {modalOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <button className="close-btn" onClick={() => setModalOpen(false)}>&times;</button>
                    <h2>Send Message</h2>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="send-btn">Send</button>
                </div>
            </div>
        )}
</>
    );
};

export default Contact;