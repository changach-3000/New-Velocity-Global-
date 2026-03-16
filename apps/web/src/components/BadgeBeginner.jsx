import React from 'react';

const BadgeBeginner = ({ size = 120, className = "", locked = false }) => {
  const width = size;
  const height = size;

  return (
    <div 
      className={`relative inline-block ${className} ${locked ? 'grayscale opacity-70' : 'badge-hover-effect badge-glow'}`}
      style={{ width, height }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bronzeGradient" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#CD7F32" />
            <stop offset="50%" stopColor="#B87333" />
            <stop offset="100%" stopColor="#8B4513" />
          </linearGradient>
          <linearGradient id="goldHighlight" x1="100" y1="0" x2="100" y2="200">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
          <filter id="softShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Main Body */}
        <circle cx="100" cy="100" r="90" fill="url(#bronzeGradient)" filter="url(#softShadow)" />
        <circle cx="100" cy="100" r="85" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.5" />
        
        {/* Filigree Pattern (Simplified) */}
        <circle cx="100" cy="100" r="75" stroke="#5A3010" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M100 20 Q120 20 120 40 T140 60" stroke="#5A3010" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M100 20 Q80 20 80 40 T60 60" stroke="#5A3010" strokeWidth="1" fill="none" opacity="0.3" />
        
        {/* Center Background */}
        <circle cx="100" cy="100" r="50" fill="#5A3010" fillOpacity="0.2" />

        {/* Open Book Icon */}
        <g transform="translate(65, 70) scale(0.7)">
          <path 
            d="M10 20 C10 20 30 15 50 20 C70 15 90 20 90 20 V80 C90 80 70 75 50 80 C30 75 10 80 10 80 V20Z" 
            fill="#FFD700" 
            stroke="#3E2723" 
            strokeWidth="2"
          />
          <line x1="50" y1="20" x2="50" y2="80" stroke="#3E2723" strokeWidth="2" />
        </g>

        {/* Text Banner */}
        <path id="curveBeginner" d="M 40 150 Q 100 180 160 150" fill="transparent" />
        <text width="200" textAnchor="middle">
          <textPath href="#curveBeginner" startOffset="50%" textAnchor="middle" className="font-serif text-lg font-bold fill-white tracking-wider">
            BEGINNER
          </textPath>
        </text>

        {/* Highlights */}
        <circle cx="100" cy="100" r="88" stroke="url(#goldHighlight)" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
};

export default BadgeBeginner;