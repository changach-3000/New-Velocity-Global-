import React from 'react';

const BadgeAdvanced = ({ size = 120, className = "", locked = false }) => {
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
          <radialGradient id="goldRadial" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="80%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#DAA520" />
          </radialGradient>
          <linearGradient id="goldSheen" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0" />
            <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0.4" />
          </linearGradient>
          <filter id="deepGoldShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#B8860B" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Main Body */}
        <circle cx="100" cy="100" r="92" fill="url(#goldRadial)" filter="url(#deepGoldShadow)" />
        
        {/* Intricate Filigree */}
        <path d="M100 8 L100 25 M100 175 L100 192 M8 100 L25 100 M175 100 L192 100" stroke="#8B4513" strokeWidth="2" />
        <circle cx="100" cy="100" r="85" stroke="#DAA520" strokeWidth="3" />
        <circle cx="100" cy="100" r="78" stroke="#8B4513" strokeWidth="1" strokeDasharray="1 3" />
        
        {/* Decorative Flourishes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <circle 
            key={i}
            cx={100 + 85 * Math.cos(angle * Math.PI / 180)} 
            cy={100 + 85 * Math.sin(angle * Math.PI / 180)} 
            r="3" 
            fill="#FFF" 
          />
        ))}

        {/* Center Star */}
        <g transform="translate(100, 95)">
          <path 
            d="M0 -35 L10 -10 L35 -10 L15 10 L25 35 L0 20 L-25 35 L-15 10 L-35 -10 L-10 -10 Z" 
            fill="#FFF" 
            stroke="#DAA520" 
            strokeWidth="2"
            filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))"
          />
        </g>

        {/* Text Banner */}
        <path id="curveAdvanced" d="M 35 145 Q 100 180 165 145" fill="transparent" />
        <text width="200" textAnchor="middle">
          <textPath href="#curveAdvanced" startOffset="50%" textAnchor="middle" className="font-serif text-lg font-bold fill-amber-900 tracking-widest">
            ADVANCED
          </textPath>
        </text>

        {/* Sheen */}
        <circle cx="100" cy="100" r="92" fill="url(#goldSheen)" />
      </svg>
    </div>
  );
};

export default BadgeAdvanced;