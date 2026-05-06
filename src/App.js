import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Collab from './components/collab';
import Contact from './components/contact';
import Footer from './components/footer';
import Quotation from './components/Quotation';
import Terms from './components/terms';
import Privacy from './components/Privacy';
import Career from './components/Career';

// Styles
import './App.css';

const LandingPage = () => (
  <>
    <Home />
    <About />
    <Services />
    <Team />
    <Collab />
    <Contact />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const specialPages = ['/quotation', '/privacy', '/terms', '/career'];
  const isSpecialPage = specialPages.includes(location.pathname);

  return (
    <div className="App">
      {!isSpecialPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      {!isSpecialPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;