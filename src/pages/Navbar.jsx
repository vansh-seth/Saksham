//Navbar.jsx
import React from 'react'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import img100 from './assets/image.png'

const Navbar = () => {

  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarOpaque(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
        
        <nav className={`navbar ${isNavbarOpaque ? "opaque" : ""}`}>
          <div className="container main-nav flex">
            <a href="#" className="company-logo">
                <img src={img100} alt="company logo"/>
            </a>
            <div className="nav-links">
                <ul className="flex">
                    <li><NavLink to="/Home" className="hover-links">Home</NavLink></li>
                    <li><NavLink to="/Vision1" className="hover-links">Vision</NavLink></li>
                    <li><NavLink to="/Physical" className="hover-links">Physically Abled</NavLink></li>
                    <li><NavLink to="/Mental" className="hover-links">Mentally Abled</NavLink></li>
                    <li><NavLink to="/signin" className="hover-links">Sign In</NavLink></li>
                    <li><NavLink to="/Signup" className="hover-links">Sign Up</NavLink></li>
                    <li><NavLink to="/Prosthetics" className="hover-links">Prosthetics</NavLink></li>
                    <li><NavLink to="/Map" className="hover-links">Maps</NavLink></li>
                    <li><NavLink to="/Alert" className="hover-links">Alert</NavLink></li>
                </ul>
            </div>
        </div>
        </nav>
        
      
      
    </>
  )
}

export default Navbar;
