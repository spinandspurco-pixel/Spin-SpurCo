import React, { useState, useEffect } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { HomePage } from './components/HomePage';
import './styles/global.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if user has seen intro before (in this session)
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setShowIntro(false);
    }
    
    setIsReady(true);
  }, []);

  const handleIntroComplete = () => {
    // Mark intro as seen for this session
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  if (!isReady) {
    return null; // Prevent flash before decision
  }

  return (
    <>
      {showIntro ? (
        <IntroScreen onComplete={handleIntroComplete} duration={3500} />
      ) : (
        <HomePage />
      )}
    </>
  );
}

export default App;
