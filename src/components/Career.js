import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Career.css';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const positions = [
    'Frontend Developer',
    'Backend Developer',
    'Game Designer',
    '3D Artist',
    'VFX Artist',
    'Social Media Manager',
    'Community Moderator'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="career-success">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Application Sent!</h2>
          <p>Thank you for applying, {formData.name}. Our recruitment team will review your profile and get in touch if your skills match our requirements.</p>
          <Link to="/" className="premium-btn">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="career-page">
      <Link to="/" className="top-back-link">
        ← Back to Home
      </Link>
      
      <div className="career-container">
        <div className="career-header">
          <h1 className="career-title">Join Our <span className="highlight">Elite Team</span></h1>
          <p className="career-subtitle">
            We are always looking for passionate individuals who want to redefine the future of E-sports and Gaming.
          </p>
        </div>

        <form className="career-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="input-group">
              <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
              <label>Full Name</label>
            </div>
            
            <div className="input-group">
              <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
              <label>Phone Number</label>
            </div>

            <div className="input-group">
              <select name="position" required value={formData.position} onChange={handleInputChange}>
                <option value="" disabled></option>
                {positions.map(pos => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
              <label className={formData.position ? 'active-label' : ''}>Desired Position</label>
            </div>

            <div className="input-group">
              <input type="text" name="experience" required value={formData.experience} onChange={handleInputChange} />
              <label>Years of Experience</label>
            </div>

            <div className="input-group">
              <input type="url" name="portfolio" required value={formData.portfolio} onChange={handleInputChange} />
              <label>Portfolio/Resume Link (URL)</label>
            </div>

            <div className="input-group full-width">
              <textarea name="message" rows="1" required value={formData.message} onChange={handleInputChange}></textarea>
              <label>Tell us why you want to join CodeKnight</label>
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="premium-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
