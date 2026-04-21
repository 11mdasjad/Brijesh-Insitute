import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAdmissionModal = () => setIsModalOpen(true);
  const closeAdmissionModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar onAdmissionClick={openAdmissionModal} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAdmissionClick={openAdmissionModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses onAdmissionClick={openAdmissionModal} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        <AdmissionModal isOpen={isModalOpen} onClose={closeAdmissionModal} />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
