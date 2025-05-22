import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PortfolioDetails from './Pages/PortfolioDetails';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PortfolioPage from './Pages/Portfolio';
import AdminPage from './Pages/Admin';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import SkillsPage from './Pages/Skills'

function App() {
  return (
    <Router>
      <Header /> {/* 👈 Now it will render at the top */}
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;