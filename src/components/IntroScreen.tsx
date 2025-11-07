import React, { useEffect } from 'react';
import { Logo } from './Logo';
import './IntroScreen.css';

interface IntroScreenProps {
  onComplete: () => void;
  duration?: number;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete, duration = 3000 }) => {
  useEffect(() => {
    // Auto-complete after duration
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="intro-screen accelerated">
      <div className="intro-content">
        <div className="logo-container">
          <Logo className="intro-logo" animated={true} />
        </div>
        <div className="intro-text">
          <h1 className="intro-title">Spin &amp; Spur Co.</h1>
          <p className="intro-tagline">Quality and Tradition</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="intro-decoration intro-decoration-top"></div>
      <div className="intro-decoration intro-decoration-bottom"></div>
    </div>
  );
};
