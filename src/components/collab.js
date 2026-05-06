import React from 'react';
import './collab.css';

function Collab() {
  const collaborations = [
    {
      name: 'Namor Global',
      image: require('../assets/Namor Global 1.jfif'),
      url: 'https://www.linkedin.com/company/namor-global/'
    },
    {
      name: 'Red Taiger Production',
      image: require('../assets/Red Taiger Production.png'),
      url: 'https://www.redtaigerproductions.com/'
    },
    {
      name: 'Digitran Solutions',
      image: require('../assets/Digitran Solutions.png'),
      url: 'https://digitransolutions.in/'
    },
    {
      name: 'Alpha Nova',
      image: require('../assets/Alpha Nova.jfif'),
      url: 'https://alphanovastudio.com/'
    }
  ];

  return (
    <div className="collab-container">
      <div className="collab-header">
        <h2 className="collab-title">Our Collaborations</h2>
        <p className="collab-subtitle">Trusted partners in gaming innovation and excellence</p>
      </div>
      <div className="collab-logos">
        {collaborations.map((collab, index) => (
          <div key={index} className="collab-logo-item" 
               onClick={collab.url ? () => window.open(collab.url, '_blank') : undefined}
               style={{ cursor: collab.url ? 'pointer' : 'default' }}>
            <img src={collab.image} alt={collab.name} className="collab-logo" />
            <div className="collab-logo-name">{collab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collab;