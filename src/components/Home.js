import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeVideo from '../assets/home.mp4';

const Home = () => {
  return (
    <section id='home' className='home'>
      <video className='home-video' autoPlay muted loop playsInline>
        <source src={homeVideo} type='video/mp4' />
      </video>
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='home-title'>
            Welcome to Codeknight Esports
          </h1>
          <h2 className='home-subtitle'>
            Where <span className='gradient-text'>Imagination</span> Becomes <span className='gradient-text'>Interaction</span>
          </h2>
          <p className='home-description'>
            We're not just building games - we're shaping the future of gaming.
            From pixel-perfect testing to immersive gameplay experiences,
            CodeKnight is your end-to-end creative and technical powerhouse.
          </p>
          <div className='button-container'>
            <a href='#services' className='glass-button'>View Services</a>
            <Link to='/quotation' className='glass-button'>Get Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;