import React from 'react';

const BadgeIntermediate = ({ size = 120, className = "", locked = false }) => {
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
          <linearGradient id="silverGradient" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="50%" stopColor="#C0C0C0" />
            <stop offset="100%" stopColor="#A9A9A9" />
          </linearGradient>
          <linearGradient id="platinumHighlight" x1="0" y1="0" x2="200" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
          <filter id="silverShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Main Body */}
        <circle cx="100" cy="100" r="90" fill="url(#silverGradient)" filter="url(#silverShadow)" />
        
        {/* Detailed Filigree */}
        <circle cx="100" cy="100" r="82" stroke="#707070" strokeWidth="1" />
        <path d="M100 10 L110 25 L100 20 L90 25 Z" fill="#707070" />
        <path d="M100 190 L110 175 L100 180 L90 175 Z" fill="#707070" />
        <path d="M10 100 L25 90 L20 100 L25 110 Z" fill="#707070" />
        <path d="M190 100 L175 90 L180 100 L175 110 Z" fill="#707070" />
        
        <circle cx="100" cy="100" r="70" stroke="#707070" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Center Background */}
        <circle cx="100" cy="100" r="55" fill="#F5F5F5" stroke="#A9A9A9" strokeWidth="2" />

        {/* Ascending Arrow Icon */}
        <g transform="translate(70, 70) scale(0.6)">
          <path 
            d="M10 80 L40 50 L60 70 L90 20" 
            stroke="#1e3a8a" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M90 20 L65 20 M90 20 L90 45" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Text Banner */}
        <path id="curveIntermediate" d="M 30 145 Q 100 185 170 145" fill="transparent" />
        <text width="200" textAnchor="middle">
          <textPath href="#curveIntermediate" startOffset="50%" textAnchor="middle" className="font-serif text-base font-bold fill-slate-800 tracking-widest">
            INTERMEDIATE
          </textPath>
        </text>

        {/* Shine */}
        <circle cx="100" cy="100" r="90" fill="url(#platinumHighlight)" style={{ mixBlendMode: 'overlay' }} />
      </svg>
    </div>
  );
};

export default BadgeIntermediate;