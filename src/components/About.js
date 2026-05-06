import React, { useState } from 'react';
import './About.css';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="about" className="about-container">
      <div className="about-wrapper">
        <div className="about-content">
          <h1 className="about-title">About us</h1>
          <p className="about-desc">
            Founded in September 2024, Codeknight Esports has swiftly become a prominent player in the global gaming ecosystem. Specializing in game testing, development, localization, animation, and sound & music, we collaborate with mid-level game studios to bring their titles to life.
          </p>
          <p className="about-desc">
            Our strength lies in delivering immersive, flawless, and emotionally engaging games. From bug-free code to cinematic animation, every project we touch is crafted for excellence.
          </p>
          <button className="glass-button" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Less' : 'More'}
          </button>
          
          {showMore && (
            <div className="about-extra">
              <div className="extra-section fadeInUp">
                <h2 className="extra-title">Our Mission</h2>
                <p className="extra-desc">
                  To launch polished, bug-free games that elevate the player experience and ensure total immersion. Because every gamer deserves a perfect digital world.
                </p>
              </div>
              
              <div className="extra-section fadeInUp">
                <h2 className="extra-title">Our Vision</h2>
                <p className="extra-desc">
                  We see a future where gaming becomes an international language of unity, driven by Olympic-style esports events and ethical, collaborative game development practices.
                </p>
              </div>
              
              <div className="extra-section fadeInUp">
                <h2 className="extra-title">We aim to:</h2>
                <ul className="extra-list">
                  <li>Unite gamers globally through competitive digital sports.</li>
                  <li>Elevate esports to mainstream recognition.</li>
                  <li>Build a community based on fair play, skill, and passion.</li>
                  <li>Define the gold standard for digital entertainment.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="about-image">
          <img src={process.env.PUBLIC_URL + '/about.png'} alt="About Codeknight Esports" />
        </div>
      </div>
    </div>
  );
}

export default About;