import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo-section'>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt='CodeKnight Logo' className='logo-img' />
          <span className='brand-name'>Codeknight Esports</span>
        </Link>
        </div>

        <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href='/#home' className='nav-item' onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href='/#about' className='nav-item' onClick={() => setIsMenuOpen(false)}>About</a>
          <a href='/#services' className='nav-item' onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href='https://lush-spleen-0cd.notion.site/CODEKNIGHT-ESPORTS-PORTFOLIO-12de0fdcaf078086818efa2f7c1dec60' target='_blank' rel='noopener noreferrer' className='nav-item' onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href='/#team' className='nav-item' onClick={() => setIsMenuOpen(false)}>Team</a>
          <a href='/#contact' className='nav-item' onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
