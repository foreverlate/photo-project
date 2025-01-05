import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './Navbar.css';

    function Navbar() {
      const [dropdownStates, setDropdownStates] = useState({
        home: false,
        about: false,
        gallery: false,
        contact: false,
      });

      const handleMouseEnter = (menu) => {
        setDropdownStates((prevState) => ({ ...prevState, [menu]: true }));
      };

      const handleMouseLeave = (menu) => {
        setDropdownStates((prevState) => ({ ...prevState, [menu]: false }));
      };

      return (
        <nav className="navbar">
          <div className="navbar-container">
            <ul className="navbar-menu">
              <li
                className="navbar-item"
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={() => handleMouseLeave('home')}
              >
                <span className="navbar-link">Home</span>
                {dropdownStates.home && (
                  <div className="dropdown">
                    <Link to="/home/featured" className="dropdown-item">Featured</Link>
                    <Link to="/home/latest-work" className="dropdown-item">Latest Work</Link>
                    <Link to="/home/behind-the-scenes" className="dropdown-item">Behind the Scenes</Link>
                  </div>
                )}
              </li>
              <li
                className="navbar-item"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={() => handleMouseLeave('about')}
              >
                <span className="navbar-link">About</span>
                {dropdownStates.about && (
                  <div className="dropdown">
                    <Link to="/about/team" className="dropdown-item">Team</Link>
                    <Link to="/about/history" className="dropdown-item">History</Link>
                    <Link to="/about/values" className="dropdown-item">Values</Link>
                  </div>
                )}
              </li>
              <li
                className="navbar-item"
                onMouseEnter={() => handleMouseEnter('gallery')}
                onMouseLeave={() => handleMouseLeave('gallery')}
              >
                <span className="navbar-link">Gallery</span>
                {dropdownStates.gallery && (
                  <div className="dropdown">
                    <Link to="/gallery/landscapes" className="dropdown-item">Landscapes</Link>
                    <Link to="/gallery/portraits" className="dropdown-item">Portraits</Link>
                    <Link to="/gallery/events" className="dropdown-item">Events</Link>
                  </div>
                )}
              </li>
              <li
                className="navbar-item"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={() => handleMouseLeave('contact')}
              >
                <span className="navbar-link">Contact</span>
                {dropdownStates.contact && (
                  <div className="dropdown">
                    <Link to="/contact/general" className="dropdown-item">General Inquiry</Link>
                    <Link to="/contact/booking" className="dropdown-item">Booking</Link>
                    <Link to="/contact/support" className="dropdown-item">Support</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;
