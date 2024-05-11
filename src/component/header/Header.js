import React, { useState } from 'react';
import logo from "../../assests/Timzoid Logo Trans 3.svg";
import { Link } from 'react-router-dom';

// Import SVG icons for flags
import UKFlag from "../../assests/flags/circle-flags_uk.svg"
import NGFlag from '../../assests/flags/nigeria.svg';
import EEFlag from '../../assests/flags/emojione_flag-for-estonia.svg';

export const Header = () => {
  const countries = [
    { code: 'GB', name: 'United Kingdom', flag: UKFlag, emoji: '🇬🇧' },
    { code: 'NG', name: 'Nigeria', flag: NGFlag, emoji: '🇳🇬' },
    { code: 'EE', name: 'Estonia', flag: EEFlag, emoji: '🇪🇪' },
    // Add more countries as needed
  ];
  const [selectedCountry, setSelectedCountry] = useState('NG'); // Set Nigeria as default country
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setMenuOpen(false); // Close menu when select is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="heads">
        <div className="head_container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
            <ul>
              <Link to="/about"><li>About us</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
            </ul>
          </div>
          <div className="selections" onClick={closeMenu}>
           <div className='select_tog'>
           <div className='selecting'>
              <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    <div className='inside'>{country.name} {country.emoji}</div>
                  </option>
                ))}
              </select>
            </div>
            <div className="flag">
              {selectedCountry && (
                <img src={countries.find(c => c.code === selectedCountry).flag} alt="Flag" />
              )}
            </div>
           </div>
            <div className="contact_link">
              <Link to="/contact">
                <button>
                  Speak with an expert 
                </button>
              </Link>
            </div>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};
