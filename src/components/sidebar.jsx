import React from "react";
import { Link } from 'react-router-dom';
import AB from "../assets/AB.png";

const Sidebar = () => {
    return (
        <nav>
            <div className="sidebar-image">
                <img src={AB} alt="" />
            </div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Me</Link></li>
                <li><Link to={"/work"}>Works</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>

            <div className="sidebar-icon">
                <a href="https://github.com/" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
            </div>
 
        </nav>
    );
};

export default Sidebar;