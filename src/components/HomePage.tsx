import React from 'react';
import { Logo } from './Logo';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="header-logo">
          <Logo className="header-logo-svg" />
        </div>
        <nav className="header-nav">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to<br />
            <span className="hero-title-highlight">Spin &amp; Spur Co.</span>
          </h1>
          <p className="hero-description">
            Crafting excellence with tradition and innovation. Experience quality 
            that stands the test of time.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-logo-container">
            <Logo className="hero-logo" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Quality First</h3>
              <p className="feature-description">
                We never compromise on quality. Every product is crafted with 
                meticulous attention to detail.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Trusted Brand</h3>
              <p className="feature-description">
                Years of experience and thousands of satisfied customers speak 
                to our commitment.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Innovation</h3>
              <p className="feature-description">
                Blending traditional craftsmanship with modern techniques for 
                outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Logo className="footer-logo-svg" />
              <p className="footer-tagline">Spin &amp; Spur Co.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#careers">Careers</a>
                <a href="#press">Press</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#contact">Contact</a>
                <a href="#faq">FAQ</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#privacy">Privacy</a>
                <a href="#terms">Terms</a>
                <a href="#cookies">Cookies</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Spin &amp; Spur Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
