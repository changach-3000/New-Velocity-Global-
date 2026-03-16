import React from 'react';

const BadgeExpert = ({ size = 120, className = "", locked = false }) => {
  const width = size;
  const height = size;

  return (
    <div 
      className={`relative inline-block ${className} ${locked ? 'grayscale opacity-70' : 'badge-hover-effect badge-dual-glow'}`}
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
          <linearGradient id="platinumGradient" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#F0F0F0" />
            <stop offset="50%" stopColor="#E5E4E2" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E5E4E2" stopOpacity="0" />
          </radialGradient>
          <filter id="expertShadow">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FFD700" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Glow Ring */}
        <circle cx="100" cy="100" r="96" stroke="#FFD700" strokeWidth="1" opacity="0.6" />

        {/* Main Body */}
        <circle cx="100" cy="100" r="94" fill="url(#platinumGradient)" filter="url(#expertShadow)" />
        
        {/* Complex Filigree */}
        <circle cx="100" cy="100" r="88" stroke="#333" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="84" stroke="#FFD700" strokeWidth="2" />
        
        {/* Ornamental Flourishes */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path d="M100 10 L103 18 L100 22 L97 18 Z" fill="#333" />
          </g>
        ))}

        {/* Center Crown */}
        <g transform="translate(65, 65) scale(0.7)">
          <path 
            d="M10 80 L25 30 L50 60 L75 30 L90 80 H10 Z" 
            fill="#FFD700" 
            stroke="#B8860B" 
            strokeWidth="2"
          />
          <circle cx="25" cy="30" r="5" fill="#FFF" />
          <circle cx="50" cy="60" r="5" fill="#FFF" />
          <circle cx="75" cy="30" r="5" fill="#FFF" />
        </g>

        {/* Top Arc Text */}
        <path id="curveMaster" d="M 50 50 Q 100 20 150 50" fill="transparent" />
        <text width="200" textAnchor="middle">
          <textPath href="#curveMaster" startOffset="50%" textAnchor="middle" className="font-serif text-xs font-bold fill-slate-500 tracking-[0.3em]">
            MASTER
          </textPath>
        </text>

        {/* Bottom Text */}
        <path id="curveExpert" d="M 40 145 Q 100 180 160 145" fill="transparent" />
        <text width="200" textAnchor="middle">
          <textPath href="#curveExpert" startOffset="50%" textAnchor="middle" className="font-serif text-xl font-bold fill-slate-900 tracking-widest">
            EXPERT
          </textPath>
        </text>

        {/* Inner Radiance */}
        <circle cx="100" cy="100" r="60" fill="url(#centerGlow)" style={{ mixBlendMode: 'soft-light' }} />
      </svg>
    </div>
  );
};

export default BadgeExpert;