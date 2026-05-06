import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quotation.css';

const Quotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '50k-100k',
    services: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'Game Design',
    '3D Modeling',
    'Game Testing',
    'VFX & Animation',
    'Audio Engineering',
    'UI/UX Design',
    'E-sports Consulting',
    'Web Development',
    'Mobile App Development',
    'Meta Human Character',
    'Game Development',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setFormData(prev => {
      const currentServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: currentServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = 'https://backend-codeknight-esports-i6i5.vercel.app';
      const response = await fetch(`${API_URL}/api/quotation`, {
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
        alert('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="quotation-success">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Request Received!</h2>
          <p>Thank you, {formData.name}. Our strategic team will review your project requirements and get back to you within 24 hours.</p>
          <Link to="/" className="premium-btn" style={{ display: 'inline-block', marginTop: '30px', textDecoration: 'none' }}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="quotation-page">
      <Link to="/" className="top-back-link">
        ← Back to Home
      </Link>

      <div className="quotation-container">
        <div className="quotation-header">
          <h1 className="quotation-title">Request a <span className="highlight">Quotation</span></h1>
          <p className="quotation-subtitle">
            Let's build something extraordinary. Provide your project details below and our experts will craft a tailored strategy for your vision.
          </p>
        </div>

        <form className="quotation-form" onSubmit={handleSubmit}>
          {/* ... existing form grid ... */}
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
              <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
              <label>Company Name (Optional)</label>
            </div>

            <div className="input-group">
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
              <label>Phone Number</label>
            </div>

            <div className="input-group full-width">
              <textarea name="message" rows="1" required value={formData.message} onChange={handleInputChange}></textarea>
              <label>Tell us about your project vision</label>
            </div>
          </div>

          <div className="services-selection">
            <h3>Select Required Services</h3>
            <div className="quotation-services-grid">
              {availableServices.map(service => (
                <div
                  key={service}
                  className={`service-item ${formData.services.includes(service) ? 'active' : ''}`}
                  onClick={() => toggleService(service)}
                >
                  <div className="checkbox">{formData.services.includes(service) ? '✓' : ''}</div>
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="budget-selection">
            <h3>Estimated Budget (USD)</h3>
            <div className="budget-options">
              {['Under 50k', '50k-100k', '100k-500k', '500k+'].map(range => (
                <label key={range} className="budget-radio">
                  <input
                    type="radio"
                    name="budget"
                    value={range}
                    checked={formData.budget === range}
                    onChange={handleInputChange}
                  />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="premium-btn">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quotation;
