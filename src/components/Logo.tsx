import React from 'react';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', animated = false }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: animated ? 'logoFadeIn 1s ease-in-out' : 'none',
      }}
    >
      {/* Background circle */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
        style={{
          animation: animated ? 'circleGrow 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none',
          transformOrigin: 'center',
        }}
      />
      
      {/* Spur star design */}
      <g
        style={{
          animation: animated ? 'starSpin 1.5s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none',
        }}
      >
        <path
          d="M100,40 L110,70 L140,75 L115,95 L122,125 L100,110 L78,125 L85,95 L60,75 L90,70 Z"
          fill="#d4af37"
          stroke="#1a1a1a"
          strokeWidth="1"
        />
      </g>
      
      {/* Company initials */}
      <text
        x="100"
        y="110"
        fontFamily="serif"
        fontSize="48"
        fontWeight="bold"
        textAnchor="middle"
        fill="#1a1a1a"
        style={{
          animation: animated ? 'textFadeIn 1s ease-in-out 0.5s both' : 'none',
        }}
      >
        S&amp;S
      </text>
      
      {/* Company name arc */}
      <path
        id="arcPath"
        d="M30,100 A70,70 0 0,1 170,100"
        fill="none"
      />
      <text
        fontSize="12"
        fontFamily="sans-serif"
        fontWeight="600"
        fill="#4a4a4a"
        letterSpacing="2"
        style={{
          animation: animated ? 'textFadeIn 1s ease-in-out 0.8s both' : 'none',
        }}
      >
        <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
          SPIN &amp; SPUR CO.
        </textPath>
      </text>
      
      <style>{`
        @keyframes logoFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes circleGrow {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes starSpin {
          from {
            transform: rotate(-180deg);
            transform-origin: center;
            opacity: 0;
          }
          to {
            transform: rotate(0deg);
            transform-origin: center;
            opacity: 1;
          }
        }
        
        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </svg>
  );
};
