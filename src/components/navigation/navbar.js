import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/hometutorhublogo.png';
// import EmailIcon from '@mui/icons-material/Email';
// import PlaceIcon from '@mui/icons-material/Place';
// import CallIcon from '@mui/icons-material/Call';
// import { db  } from '../../firebase/firebase';
// import { ref, push,set } from 'firebase/database';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToContactSection = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };



 

  return (
    <div>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="navbar-container">
          <Link to="/" onClick={(e) => { e.preventDefault(); scrollToRef(homeRef); }}>
            <img className="navbar-logo" src={logo} alt="Logo" />
          </Link>
          <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
            <Link to="/" onClick={(e) => { e.preventDefault(); scrollToRef(homeRef); }}>Home</Link>
            {/* <Link to="/jointutor">Join as Tutor</Link> */}
            {/* <Link to="/joinstudent">Join as Student</Link> */}
            {/* <Link to="/findtutor">Find Tutor</Link> */}
            {/* <Link to="/" onClick={(e) => { e.preventDefault(); scrollToRef(aboutRef); }}>About</Link> */}
            {/* <Link to="/" onClick={(e) => { e.preventDefault(); scrollToRef(contactRef); }}>Contact</Link> */}
            <div className="navbar-dropdown">
              <button className="dropbtn">Login</button>
              <div className="dropdown-content">
                {/* <Link to="/studentlogin">Student</Link> */}
                <Link to="/slogin">Super Admin</Link>
                <Link to="/blogin">Branch Admin</Link>
                {/* <Link to="/tutorlogin">Tutor</Link> */}
              </div>
            </div>
          </div>
          <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
            &#9776; {/* Unicode for the hamburger icon */}
          </div>
        </div>
      </nav>
      <div ref={homeRef} className="fullscreen-section home-section">
        <h1 className='landing-page'>EduNest</h1>
        <p className='landing-paragraph'>
          Unlock the power of personalized Learning at Your doorstep!<br />
          Learning made easy: One-on-One at Home <br />
          Where education meets Comfort, and personalized<br /> learning thrives.
        </p>
        <button className="know-more-button" >Admin Page</button>
      </div>
 
    
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 EduNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
