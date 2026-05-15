import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


import logo from '../assets/logo.png';
import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as DiscordIcon } from './icons/discord.svg';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-top-line'></div>
      <div className='footer-container'>
        {/* Brand Column */}
        <div className='footer-col footer-brand'>
          <div className='footer-logo-section'>
            <img src={logo} alt='CodeKnight Logo' className='footer-logo' />
            <span className='footer-brand-name'>Codeknight Esports</span>
          </div>
          <p className='footer-brand-desc'>
            Crafting immersive gaming experiences with cutting-edge development, testing, and creative services since 2024.
          </p>
          <div className='footer-social'>
            <a href='https://x.com/Codeknight_ep' target='_blank' rel='noopener noreferrer' aria-label='Twitter' className='footer-social-link'>
              <TwitterIcon />
            </a>
            <a href='https://www.instagram.com/codeknight_esports/' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='footer-social-link'>
              <InstagramIcon />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61559502523556' target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='footer-social-link'>
              <FacebookIcon />
            </a>
            <a href='www.youtube.com/@Codeknight_esports' target='_blank' rel='noopener noreferrer' aria-label='YouTube' className='footer-social-link'>
              <YoutubeIcon />
            </a>
            <a href='https://in.linkedin.com/company/codeknightesports' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='footer-social-link'>
              <LinkedinIcon />
            </a>
            <a href='https://discord.gg/cCfxzt2rJC' target='_blank' rel='noopener noreferrer' aria-label='Discord' className='footer-social-link'>
              <DiscordIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='footer-col'>
          <h4 className='footer-heading'>Quick Links</h4>
          <ul className='footer-links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#team'>Our Team</a></li>
            <li><Link to='/career'>Careers</Link></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className='footer-col'>
          <h4 className='footer-heading'>Services</h4>
          <ul className='footer-links'>
            <li><a href='#services'>Game Testing</a></li>
            <li><a href='#services'>Game Development</a></li>
            <li><a href='#services'>Game Animation</a></li>
            <li><a href='#services'>AR / VR Development</a></li>
            <li><a href='#services'>UI/UX Design</a></li>
            <li><a href='#services'>Sound &amp; Music</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='footer-col'>
          <h4 className='footer-heading'>Contact</h4>
          <ul className='footer-contact-list'>
            <li>
              <span className='footer-contact-label'>Office 1</span>
              <span className='footer-contact-value'>Kanpur Nagar, Uttar Pradesh, India</span>
            </li>
            <li>
              <span className='footer-contact-label'>Office 2</span>
              <span className='footer-contact-value'>Bangalore, Karnataka, India</span>
            </li>
            <li>
              <span className='footer-contact-label'>Registration Address</span>
              <span className='footer-contact-value'>116/220 Rawatpur Gaon, Kanpur Nagar, Uttar Pradesh - 208019</span>
            </li>
            <li>
              <span className='footer-contact-label'>Email</span>
              <span className='footer-contact-value'>contact@codeknightesports.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='footer-bottom'>
        <div className='footer-bottom-container'>
          <p className='footer-copyright'>
            &copy; {currentYear} <span className='footer-highlight'>Codeknight Esports Pvt. Ltd</span>. All Rights Reserved.
          </p>
          <div className='footer-bottom-links'>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/terms'>Terms of Service</Link>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;