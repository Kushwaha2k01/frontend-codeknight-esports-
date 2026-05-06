import React, { useState } from 'react';
import './contact.css';
import { ReactComponent as LocationIcon } from './icons/location.svg';
import { ReactComponent as EmailIcon } from './icons/email.svg';
import { ReactComponent as DiscordIcon } from './icons/discord.svg';
import { ReactComponent as SocialIcon } from './icons/social.svg';
import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : (process.env.REACT_APP_API_URL || 'https://backend-codeknight-esports-i6i5.vercel.app');
    try {
      console.log(`🚀 Sending Contact Message to: ${API_URL}/api/contact`, formData);
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown server error' }));
        alert(`Failed to send message: ${errorData.error || errorData.message || response.statusText}${errorData.detail ? ` (${errorData.detail})` : ''}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(`Network error: ${error.message}. Ensure the backend is running at ${API_URL}`);
    }
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='contact-accent-blob'></div>
      <div className='contact-container'>
        <div className='contact-header'>
          <h2 className='section-title'>Get In <span className='highlight'>Touch</span></h2>
          <p className='section-subtitle'>Let's build the future of gaming together. Reach out via our official channels.</p>
        </div>

        <div className='contact-grid'>
          {/* Info Side */}
          <div className='contact-info-panel'>
            <div className='info-card'>
              <div className='info-icon'>
                <LocationIcon />
              </div>
              <div className='info-text'>
                <h3>Location</h3>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
            <div className='info-card'>
              <div className='info-icon'>
                <EmailIcon />
              </div>
              <div className='info-text'>
                <h3>Email Us</h3>
                <p>contact@codeknightesports.in</p>
              </div>
            </div>
            <div className='info-card'>
              <div className='info-icon'>
                <SocialIcon />
              </div>
              <div className='info-text'>
                <h3>Social Media</h3>
                <div className='social-icons-row'>
                  <a href='https://x.com/Codeknight_ep' target='_blank' rel='noopener noreferrer' aria-label='Twitter'><TwitterIcon /></a>
                  <a href='https://www.instagram.com/codeknight_esports/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'><InstagramIcon /></a>
                  <a href='https://www.facebook.com/profile.php?id=61559502523556' target='_blank' rel='noopener noreferrer' aria-label='Facebook'><FacebookIcon /></a>
                  <a href='www.youtube.com/@Codeknight_esports' target='_blank' rel='noopener noreferrer' aria-label='YouTube'><YoutubeIcon /></a>
                  <a href='https://in.linkedin.com/company/codeknightesports' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><LinkedinIcon /></a>
                  <a href='https://discord.gg/cCfxzt2rJC' target='_blank' rel='noopener noreferrer' aria-label='Discord'><DiscordIcon /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className='contact-form-wrapper'>
            <form className='premium-form' onSubmit={handleSubmit}>
              <div className='input-group'>
                <input
                  type='text'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label>Full Name</label>
              </div>
              <div className='input-group'>
                <input
                  type='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label>Email Address</label>
              </div>
              <div className='input-group'>
                <textarea
                  name='message'
                  rows='4'
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <label>Your Message</label>
              </div>
              <button type='submit' className='premium-btn'>
                <span>{isSubmitted ? 'Message Sent!' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;