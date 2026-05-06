import React from 'react';
import './Team.css';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Avinash Kushwaha',
      role: 'Founder & CEO',
      image: require('../assets/Avinash Kushwaha.jpeg'),
      description: 'Visionary leader driving Codeknight Esports from inception to excellence. Strategic architect of our gaming ecosystem, forging partnerships and setting industry benchmarks in competitive gaming and development innovation.',
      linkedin: 'https://www.linkedin.com/in/avinash-kushwaha-2k01/'
    },
    {
      id: 2,
      name: 'Mohammad Zaki',
      role: 'Co-Founder & Head of Business Partnership',
      image: require('../assets/Mohammad Zaki.jpg'),
      description: 'Strategic deal architect building bridges between innovation and opportunity. Master negotiator forging high-impact partnerships that expand our global reach and create sustainable business ecosystems across the gaming industry.',
      linkedin: 'https://www.linkedin.com/in/mohammad-zaki-kave-1277041b1/'
    },
    {
      id: 3,
      name: 'Khushi Gupta',
      role: 'Co-Founder & Head of Operations',
      image: require('../assets/Khushi Gupta.jpeg'),
      description: 'Operational excellence architect optimizing every workflow for peak performance. Visionary leader streamlining processes, managing resources, and building scalable systems that ensure seamless execution of our gaming ecosystem.',
      linkedin: 'https://www.linkedin.com/in/khushi22/'
    }
  ];

  return (
    <div id="team" className="team-container">
      <div className="team-wrapper">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">Meet the creative minds behind Codeknight Esports</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={member.id} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-image-overlay"></div>
              </div>
              <div className="team-content">
                <span className="team-role">{member.role}</span>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-description">{member.description}</p>
                <div className="team-socials">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;