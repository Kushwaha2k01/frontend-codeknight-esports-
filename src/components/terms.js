import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './terms.css';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <Link to="/" className="top-back-link">← Back to Home</Link>
      <div className="terms-container">
        <header className="terms-header">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-date">Last Updated: August 2025</p>
          <div className="header-line"></div>
        </header>

        <section className="terms-content">
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>Welcome to <strong>Codeknight Esports</strong> ("we," "our," "us"). These Terms & Conditions ("Terms") govern your access to and use of our:</p>
            <ul>
              <li>Website (www.codeknightesports.in)</li>
              <li>Services, including game development, testing, animation, localization, AR/VR, Web3, tournaments, and events</li>
              <li>Community features (Discord, live chats, social media)</li>
            </ul>
            <p>By using our website or services, you agree to these Terms. If you do not agree, you must discontinue use immediately.</p>
          </div>

          <div className="terms-section">
            <h2>2. Eligibility</h2>
            <ul>
              <li>You must be at least 13 years old to access our services.</li>
              <li>If you are between 13 and 18, you must have parental/guardian consent.</li>
              <li>Certain tournaments or services may have additional eligibility rules.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>3. Services Offered</h2>
            <p>Our services include, but are not limited to:</p>
            <ul>
              <li>Game Testing (Manual, Automation, Alpha/Beta)</li>
              <li>Game Development (2D/3D, AR/VR)</li>
              <li>Game Animation & Art</li>
              <li>Game Localization & Voiceovers</li>
              <li>Web3, Blockchain & Metaverse Integration</li>
              <li>Sound & Music for Games</li>
              <li>Web & Mobile App Development</li>
              <li>Esports tournaments and events</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>4. User Accounts</h2>
            <ul>
              <li>You may be required to create an account to access certain features.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You must not share your account or impersonate another person.</li>
              <li>We may suspend or terminate accounts for violating these Terms.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>5. Tournament Rules</h2>
            <ul>
              <li>By registering for a tournament, you agree to follow all published rules.</li>
              <li>Cheating, hacking, exploiting bugs, or using unauthorized software will result in disqualification.</li>
              <li>We reserve the right to modify, postpone, or cancel tournaments at any time.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>6. Payments & Refunds</h2>
            <ul>
              <li>Payments for services, tournament entries, or digital goods are processed through secure third-party gateways.</li>
              <li>All sales are final unless stated otherwise in a written agreement.</li>
              <li>Refunds are only issued in cases of duplicate charges, service errors, or as required by law.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>7. Intellectual Property</h2>
            <ul>
              <li>All website content, branding, graphics, code, and materials are owned by Codeknight Esports unless stated otherwise.</li>
              <li>You may not copy, distribute, modify, or exploit our intellectual property without written permission.</li>
              <li>Game assets, art, and code provided under service contracts remain the property of the client unless otherwise agreed in writing.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>8. Web3, Blockchain & Metaverse Use</h2>
            <ul>
              <li>You are responsible for safeguarding your crypto wallet private keys.</li>
              <li>We do not recover lost wallets, passwords, or NFTs.</li>
              <li>Blockchain transactions are public and irreversible.</li>
              <li>We are not liable for losses due to hacking, phishing, or third-party exploits.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>9. Prohibited Activities</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Use our services for illegal purposes.</li>
              <li>Upload harmful or malicious software.</li>
              <li>Harass, threaten, or abuse other users.</li>
              <li>Violate intellectual property rights.</li>
              <li>Engage in activities that disrupt tournaments or services.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>10. Disclaimers</h2>
            <ul>
              <li>Our services are provided "AS IS" without warranties of any kind.</li>
              <li>We do not guarantee uninterrupted or error-free services.</li>
              <li>We are not responsible for technical issues, server downtime, or third-party failures.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>We are not liable for indirect, incidental, or consequential damages.</li>
              <li>Our total liability in any claim will not exceed the amount paid by you for the service in question.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>12. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Codeknight Esports, its employees, and partners from any claims, damages, or expenses resulting from your use of our services, violation of these Terms, or infringement of third-party rights.</p>
          </div>

          <div className="terms-section">
            <h2>13. Third-Party Links & Services</h2>
            <p>Our website may contain links to external websites (e.g., YouTube, Twitch, Discord). We are not responsible for their content or policies.</p>
          </div>

          <div className="terms-section">
            <h2>14. Termination</h2>
            <p>We may suspend or terminate your access without notice if:</p>
            <ul>
              <li>You violate these Terms.</li>
              <li>You engage in harmful or illegal activities.</li>
              <li>Required by law enforcement or legal orders.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>15. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>
          </div>

          <div className="terms-section">
            <h2>16. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Changes will be posted on this page with the "Last Updated" date. Continued use of our services after changes means you accept the updated Terms.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
