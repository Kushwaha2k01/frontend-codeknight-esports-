import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      category: 'Game Testing',
      title: 'Launch with confidence.',
      description: 'Our QA experts provide full-cycle testing across platforms to ensure flawless gameplay.',
      features: [
        'Functional, Compatibility & Regression Testing',
        'Alpha, Beta & Pre-launch Testing',
        'Localization QA',
        'Load, Performance & Security Testing',
        'LiveOps & Post-launch QA'
      ]
    },
    {
      category: 'Game Development (2D / 3D)',
      title: 'Design. Build. Launch. Repeat.',
      description: 'Our game developers create high-performance games using the most trusted engines.',
      features: [
        'Unity, Unreal, Godot & Roblox',
        'Single-player, Multiplayer & Cross-platform Games',
        'Custom Game Mechanics, AI & Physics',
        'Game Economy & Reward Systems',
        'NFT / Token Integration (Optional)'
      ]
    },
    {
      category: 'Game Animation (2D / 3D + Metahuman)',
      title: 'Bring Characters to Life.',
      description: 'From 2D stylized movement to hyper-realistic Metahuman avatars, we add the wow factor.',
      features: [
        'Spine, Frame-by-Frame & Blender Animations',
        '3D Rigging, Facial Capture, Lip Sync',
        'MetaHuman Integration for AAA-quality realism',
        'Custom Emotes & Cinematic Cutscenes'
      ]
    },
    {
      category: 'AR / VR Game Development',
      title: 'Experience Gaming Beyond Screens.',
      description: 'We create immersive AR and VR experiences for futuristic storytelling and gameplay.',
      features: [
        'Oculus, HTC Vive & WebXR Platforms',
        'VR Game Design & Prototyping',
        'AR for Simulation, Education & Training',
        'Cross-device Performance Optimization'
      ]
    },
    {
      category: 'UI/UX Design',
      title: 'User-first interfaces for powerful gameplay.',
      description: 'Clean, intuitive, and gamer-centric UI/UX design that elevates interaction.',
      features: [
        'HUDs, Menus, Game Maps',
        'Motion UI & Interactive Prototypes',
        'Responsive Design for All Devices'
      ]
    },
    {
      category: 'Web & Mobile App Development',
      title: 'Support your game with smart digital tools.',
      description: 'Build portals, launchers, and companion apps that integrate with your core experience.',
      features: [
        'React, Node.js, Firebase, Flutter',
        'Game Portals & Leaderboards',
        'Admin Dashboards & CRM',
        'UPI / Wallet / Referral Systems'
      ]
    },
    {
      category: 'Sound & Music for Games',
      title: 'Hear the Game, Feel the World.',
      description: 'Sound is the soul of a game. From immersive ambient effects to epic orchestral scores, our audio experts craft soundscapes that pull players deep into your universe.',
      features: [
        'Original Soundtrack Composition (Orchestral, Electronic, Hybrid)',
        'Dynamic In-game Sound Effects (SFX)',
        'Voice-over Recording & Processing',
        '3D Spatial & Surround Sound Design',
        'Adaptive Music Systems for Interactive Gameplay',
        'Audio Mixing & Mastering for All Platforms'
      ]
    }
  ];

  return (
    <div id="services" className="services-container">
      <div className="services-wrapper">
        <h2 className="services-section-title">Our Services</h2>
        <p className="services-section-subtitle">
          Comprehensive game development services - from testing and animation to full-scale development and immersive audio experiences.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <span className="service-category">{service.category}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
