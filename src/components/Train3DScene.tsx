'use client';

import { useEffect, useState } from 'react';

export default function Train3DScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="train-scene-wrapper"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 40%',
        width: '100%',
        height: '380px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '24px',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Sky gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #e0f7fa 0%, #b2ebf2 30%, #e8f5e9 60%, #c8e6c9 100%)',
          zIndex: 0,
        }}
      />

      {/* Sun / glow */}
      <div
        style={{
          position: 'absolute',
          top: '45px', /* Moved down */
          right: '60px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fff9c4 0%, #ffee58 40%, transparent 70%)',
          boxShadow: '0 0 40px 15px rgba(255,238,88,0.3)',
          zIndex: 1,
        }}
      />

      {/* Distant mountains (parallax layer) */}
      <div
        style={{
          position: 'absolute',
          bottom: '180px', /* Shifted up */
          left: '-20px',
          right: '-20px',
          height: '120px',
          zIndex: 2,
          transform: 'translateZ(-200px) scale(1.2)',
        }}
      >
        <svg viewBox="0 0 800 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,120 L0,80 Q50,20 120,70 Q180,30 240,60 Q320,10 400,55 Q460,25 520,65 Q600,15 680,50 Q740,30 800,70 L800,120 Z" fill="#81c784" opacity="0.6" />
          <path d="M0,120 L0,90 Q80,50 160,80 Q240,40 320,75 Q400,35 480,70 Q560,45 640,80 Q720,50 800,85 L800,120 Z" fill="#66bb6a" opacity="0.7" />
        </svg>
      </div>

      {/* Distant mountains Reflection */}
      <div
        style={{
          position: 'absolute',
          bottom: '-22px', /* Moved upward */
          left: '-20px',
          right: '-20px',
          height: '120px',
          zIndex: 5, /* Above water */
          opacity: 0.35, /* Faint reflection */
          transform: 'translateZ(-200px) scale(1.2)', /* Same parallax */
          filter: 'blur(3px)',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 800 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%', transform: 'scaleY(-1)' }}>
          <path d="M0,120 L0,80 Q50,20 120,70 Q180,30 240,60 Q320,10 400,55 Q460,25 520,65 Q600,15 680,50 Q740,30 800,70 L800,120 Z" fill="#81c784" opacity="0.6" />
          <path d="M0,120 L0,90 Q80,50 160,80 Q240,40 320,75 Q400,35 480,70 Q560,45 640,80 Q720,50 800,85 L800,120 Z" fill="#66bb6a" opacity="0.7" />
        </svg>
      </div>

      {/* Mount Fuji silhouette */}
      <div
        style={{
          position: 'absolute',
          bottom: '175px', /* Slightly lower */
          left: '10%', /* Moved further to the left */
          zIndex: 3,
          transform: 'translateZ(-100px) scale(1.2)',
        }}
      >
        <svg width="140" height="90" viewBox="0 0 140 90">
          <path d="M70,5 L10,90 L130,90 Z" fill="#5c6bc0" opacity="0.4" />
          <path d="M70,5 L55,25 Q70,20 85,25 L70,5 Z" fill="white" opacity="0.8" />
        </svg>
      </div>

      {/* Mount Fuji Reflection */}
      <div
        style={{
          position: 'absolute',
          bottom: '13px', /* Moved upward */
          left: '10%',
          zIndex: 5, /* Above water */
          opacity: 0.35, /* Faint reflection */
          transform: 'translateZ(-100px) scale(1.2)', /* Same parallax */
          filter: 'blur(3px)',
          pointerEvents: 'none',
        }}
      >
        <svg width="140" height="90" viewBox="0 0 140 90" style={{ transform: 'scaleY(-1)' }}>
          <path d="M70,5 L10,90 L130,90 Z" fill="#5c6bc0" opacity="0.4" />
          <path d="M70,5 L55,25 Q70,20 85,25 L70,5 Z" fill="white" opacity="0.8" />
        </svg>
      </div>

      {/* Clouds floating - move right to simulate train moving left */}
      <div style={{ position: 'absolute', top: '20px', left: '10%', zIndex: 2, animation: 'cloudDrift 12s linear infinite' }}>
        <svg width="80" height="30" viewBox="0 0 80 30">
          <ellipse cx="40" cy="18" rx="35" ry="12" fill="white" opacity="0.7" />
          <ellipse cx="25" cy="15" rx="20" ry="10" fill="white" opacity="0.6" />
          <ellipse cx="55" cy="14" rx="22" ry="11" fill="white" opacity="0.6" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '35px', right: '20%', zIndex: 2, animation: 'cloudDrift 16s linear infinite 3s' }}>
        <svg width="60" height="25" viewBox="0 0 60 25">
          <ellipse cx="30" cy="14" rx="28" ry="10" fill="white" opacity="0.5" />
          <ellipse cx="18" cy="12" rx="16" ry="8" fill="white" opacity="0.4" />
        </svg>
      </div>

      {/* Scrolling sakura trees - move right to simulate forward motion */}
      <div
        style={{
          position: 'absolute',
          bottom: '170px', /* Shifted up */
          left: 0,
          right: 0,
          height: '60px',
          zIndex: 5,
          overflow: 'hidden',
        }}
      >
        <div style={{ animation: 'treesScroll 4s linear infinite', display: 'flex', position: 'absolute', left: 0, top: 0, height: '100%' }}>
          {/* Two copies for seamless looping */}
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: 'flex', gap: '80px', paddingRight: '80px', alignItems: 'flex-end' }}>
              {/* Tree 1 - tall */}
              <svg width="36" height="55" viewBox="0 0 36 55" style={{ flexShrink: 0 }}>
                <rect x="15" y="28" width="5" height="27" fill="#795548" rx="1" />
                <circle cx="18" cy="20" r="16" fill="#f48fb1" opacity="0.8" />
                <circle cx="10" cy="14" r="9" fill="#f8bbd0" opacity="0.7" />
                <circle cx="26" cy="16" r="10" fill="#f48fb1" opacity="0.6" />
              </svg>
              {/* Tree 2 - small */}
              <svg width="28" height="42" viewBox="0 0 28 42" style={{ flexShrink: 0 }}>
                <rect x="11" y="22" width="4" height="20" fill="#795548" rx="1" />
                <circle cx="14" cy="16" r="12" fill="#f48fb1" opacity="0.7" />
                <circle cx="8" cy="11" r="7" fill="#f8bbd0" opacity="0.6" />
                <circle cx="20" cy="13" r="8" fill="#f48fb1" opacity="0.5" />
              </svg>
              {/* Tree 3 - medium */}
              <svg width="32" height="48" viewBox="0 0 32 48" style={{ flexShrink: 0 }}>
                <rect x="13" y="26" width="5" height="22" fill="#795548" rx="1" />
                <circle cx="16" cy="18" r="14" fill="#f48fb1" opacity="0.75" />
                <circle cx="9" cy="12" r="8" fill="#f8bbd0" opacity="0.65" />
                <circle cx="23" cy="14" r="9" fill="#f48fb1" opacity="0.55" />
              </svg>
              {/* Tree 4 - tall green */}
              <svg width="30" height="50" viewBox="0 0 30 50" style={{ flexShrink: 0 }}>
                <rect x="12" y="28" width="5" height="22" fill="#795548" rx="1" />
                <circle cx="15" cy="20" r="14" fill="#81c784" opacity="0.7" />
                <circle cx="8" cy="14" r="8" fill="#a5d6a7" opacity="0.6" />
                <circle cx="22" cy="16" r="9" fill="#66bb6a" opacity="0.5" />
              </svg>
              {/* Tree 5 - small sakura */}
              <svg width="26" height="40" viewBox="0 0 26 40" style={{ flexShrink: 0 }}>
                <rect x="10" y="20" width="4" height="20" fill="#795548" rx="1" />
                <circle cx="13" cy="14" r="11" fill="#f48fb1" opacity="0.7" />
                <circle cx="7" cy="10" r="6" fill="#f8bbd0" opacity="0.6" />
                <circle cx="19" cy="11" r="7" fill="#f48fb1" opacity="0.5" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Land area (below trees, above track) */}
      <div
        style={{
          position: 'absolute',
          bottom: '124px',
          left: '0',
          right: '0',
          height: '56px',
          zIndex: 4,
          background: 'linear-gradient(180deg, #a1887f 0%, #795548 100%)',
        }}
      />

      {/* Water area (below track) */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '124px',
          zIndex: 4,
          background: 'linear-gradient(180deg, #81d4fa 0%, #29b6f6 40%, #0288d1 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Water ripples */}
        <div style={{ position: 'absolute', top: '15px', left: '10%', width: '80px', height: '2px', background: 'white', opacity: 0.4, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '40px', left: '35%', width: '120px', height: '2px', background: 'white', opacity: 0.3, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '70px', left: '75%', width: '90px', height: '2px', background: 'white', opacity: 0.5, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '100px', left: '55%', width: '100px', height: '2px', background: 'white', opacity: 0.4, borderRadius: '2px' }} />
      </div>

      {/* Simple railway tracks on the ground */}
      <div
        style={{
          position: 'absolute',
          bottom: '124px',
          left: '0',
          right: '0',
          height: '6px',
          zIndex: 6, /* Changed from 5 to 6 to stay above reflection */
        }}
      >
        {/* Track rail */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #9e9e9e, #e0e0e0, #9e9e9e)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
        <div style={{ position: 'absolute', top: '4px', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #9e9e9e, #bdbdbd, #9e9e9e)', boxShadow: '0 1px 1px rgba(0,0,0,0.2)' }} />
      </div>

      {/* ===== SHINKANSEN TRAIN — extended right, sitting on tracks ===== */}
      <div
        style={{
          position: 'absolute',
          bottom: '98px', /* Shifted up */
          left: '50%',
          marginLeft: '-150px', /* Center the train head perfectly */
          zIndex: 10,
          animation: mounted ? 'trainSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
          filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.18))',
        }}
      >
        <svg width="800" height="100" viewBox="0 0 800 100" style={{ overflow: 'visible' }}>
          {/* Train body - main car */}
          <defs>
            <linearGradient id="trainBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="45%" stopColor="#f5f5f5" />
              <stop offset="46%" stopColor="#1565c0" />
              <stop offset="65%" stopColor="#1565c0" />
              <stop offset="66%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#e8e8e8" />
            </linearGradient>
            <linearGradient id="noseGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="100%" stopColor="#f5f5f5" />
            </linearGradient>
            <linearGradient id="windowGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bbdefb" />
              <stop offset="100%" stopColor="#90caf9" />
            </linearGradient>
          </defs>

          {/* Nose section (N700 Duckbill shape) */}
          <path
            d="M70,28 C45,28 25,40 5,55 C0,60 2,65 10,68 C30,72 50,72 70,72 Z"
            fill="url(#noseGrad)"
            stroke="#bdbdbd"
            strokeWidth="0.5"
          />
          {/* Nose stripe matching duckbill curve */}
          <path
            d="M70,45 C40,45 20,52 8,60 L12,63 C25,55 45,55 70,55 Z"
            fill="#1565c0"
          />
          {/* Headlight */}
          <ellipse cx="14" cy="58" rx="4" ry="2.5" fill="#fff9c4" opacity="0.9" transform="rotate(15 14 58)">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="14" cy="58" rx="8" ry="5" fill="#fff9c4" opacity="0.15" transform="rotate(15 14 58)">
            <animate attributeName="rx" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Train Head / Driver's Cockpit (Dark teardrop window) */}
          <path
            d="M60,30 C45,30 35,35 30,42 C38,42 50,38 60,36 Z"
            fill="#212121"
          />

          {/* Main body */}
          <rect x="70" y="28" width="750" height="44" rx="3" fill="url(#trainBody)" />

          {/* Windows */}
          {[88, 110, 132, 154, 176, 198, 220, 242, 264, 286, 308, 330, 352, 374, 396, 418, 440, 462, 484, 506, 528, 550, 572, 594, 616, 638, 660, 682, 704, 726, 748, 770].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="32"
              width="14"
              height="10"
              rx="1.5"
              fill="url(#windowGlow)"
              stroke="#90caf9"
              strokeWidth="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur={`${2 + i * 0.15}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}

          {/* Door lines */}
          {[150, 250, 340, 430, 520, 610, 700].map((x, i) => (
            <line key={i} x1={x} y1="31" x2={x} y2="69" stroke="#bdbdbd" strokeWidth="0.5" />
          ))}

          {/* Blue stripe */}
          <rect x="70" y="45" width="750" height="10" fill="#1565c0" opacity="0.9" />

          {/* Roof detail */}
          <rect x="70" y="26" width="750" height="3" rx="1.5" fill="#e0e0e0" />

          {/* Pantograph 1 */}
          <g transform="translate(160, 16)">
            <line x1="10" y1="10" x2="5" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="15" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="3" y1="0" x2="17" y2="0" stroke="#424242" strokeWidth="2" />
            <rect x="6" y="10" width="8" height="2" fill="#757575" rx="1" />
          </g>

          {/* Pantograph 2 */}
          <g transform="translate(400, 16)">
            <line x1="10" y1="10" x2="5" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="15" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="3" y1="0" x2="17" y2="0" stroke="#424242" strokeWidth="2" />
            <rect x="6" y="10" width="8" height="2" fill="#757575" rx="1" />
          </g>

          {/* Pantograph 3 */}
          <g transform="translate(640, 16)">
            <line x1="10" y1="10" x2="5" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="15" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="3" y1="0" x2="17" y2="0" stroke="#424242" strokeWidth="2" />
            <rect x="6" y="10" width="8" height="2" fill="#757575" rx="1" />
          </g>

          {/* Wheels removed to create a maglev look */}



          {/* JR logo */}
          <text x="200" y="64" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">JR</text>

          {/* Speed lines on the left */}
          <g opacity="0.35">
            <line x1="-10" y1="38" x2="-45" y2="38" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="x1" values="-10;-5;-10" dur="0.3s" repeatCount="indefinite" />
              <animate attributeName="x2" values="-45;-55;-45" dur="0.3s" repeatCount="indefinite" />
            </line>
            <line x1="-5" y1="50" x2="-55" y2="50" stroke="#90caf9" strokeWidth="2.5" strokeLinecap="round">
              <animate attributeName="x1" values="-5;0;-5" dur="0.25s" repeatCount="indefinite" />
              <animate attributeName="x2" values="-55;-65;-55" dur="0.25s" repeatCount="indefinite" />
            </line>
            <line x1="-10" y1="62" x2="-40" y2="62" stroke="#90caf9" strokeWidth="1" strokeLinecap="round">
              <animate attributeName="x1" values="-10;-7;-10" dur="0.35s" repeatCount="indefinite" />
              <animate attributeName="x2" values="-40;-48;-40" dur="0.35s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      </div>

      {/* ===== SHINKANSEN TRAIN REFLECTION ===== */}
      <div
        style={{
          position: 'absolute',
          bottom: '52px',
          left: '50%',
          marginLeft: '-150px',
          zIndex: 5,
          opacity: 0.25,
          /* transform is handled in SVG to avoid overriding animation */
          animation: mounted ? 'trainSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
          filter: 'blur(3px)',
          pointerEvents: 'none',
        }}
      >
        <svg width="800" height="100" viewBox="0 0 800 100" style={{ overflow: 'visible', transform: 'scaleY(-1)' }}>
          {/* Train body - main car */}
          <defs>
            <linearGradient id="trainBodyReflect" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="45%" stopColor="#f5f5f5" />
              <stop offset="46%" stopColor="#1565c0" />
              <stop offset="65%" stopColor="#1565c0" />
              <stop offset="66%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#e8e8e8" />
            </linearGradient>
            <linearGradient id="noseGradReflect" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="100%" stopColor="#f5f5f5" />
            </linearGradient>
            <linearGradient id="windowGlowReflect" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bbdefb" />
              <stop offset="100%" stopColor="#90caf9" />
            </linearGradient>
          </defs>

          {/* Nose section (N700 Duckbill shape) */}
          <path
            d="M70,28 C45,28 25,40 5,55 C0,60 2,65 10,68 C30,72 50,72 70,72 Z"
            fill="url(#noseGradReflect)"
            stroke="#bdbdbd"
            strokeWidth="0.5"
          />
          {/* Nose stripe matching duckbill curve */}
          <path
            d="M70,45 C40,45 20,52 8,60 L12,63 C25,55 45,55 70,55 Z"
            fill="#1565c0"
          />
          {/* Headlight */}
          <ellipse cx="14" cy="58" rx="4" ry="2.5" fill="#fff9c4" opacity="0.9" transform="rotate(15 14 58)" />
          <ellipse cx="14" cy="58" rx="8" ry="5" fill="#fff9c4" opacity="0.15" transform="rotate(15 14 58)" />

          {/* Train Head / Driver's Cockpit */}
          <path
            d="M60,30 C45,30 35,35 30,42 C38,42 50,38 60,36 Z"
            fill="#212121"
          />

          {/* Main body */}
          <rect x="70" y="28" width="750" height="44" rx="3" fill="url(#trainBodyReflect)" />

          {/* Windows */}
          {[88, 110, 132, 154, 176, 198, 220, 242, 264, 286, 308, 330, 352, 374, 396, 418, 440, 462, 484, 506, 528, 550, 572, 594, 616, 638, 660, 682, 704, 726, 748, 770].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="32"
              width="14"
              height="10"
              rx="1.5"
              fill="url(#windowGlowReflect)"
              stroke="#90caf9"
              strokeWidth="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur={`${2 + i * 0.15}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}

          {/* Door lines */}
          {[150, 250, 340, 430, 520, 610, 700].map((x, i) => (
            <line key={i} x1={x} y1="31" x2={x} y2="69" stroke="#bdbdbd" strokeWidth="0.5" />
          ))}

          {/* Blue stripe */}
          <rect x="70" y="45" width="750" height="10" fill="#1565c0" opacity="0.9" />

          {/* Roof detail */}
          <rect x="70" y="26" width="750" height="3" rx="1.5" fill="#e0e0e0" />

          {/* Pantograph 1 */}
          <g transform="translate(160, 16)">
            <line x1="10" y1="10" x2="5" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="15" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="3" y1="0" x2="17" y2="0" stroke="#424242" strokeWidth="2" />
            <rect x="6" y="10" width="8" height="2" fill="#757575" rx="1" />
          </g>

          {/* Pantograph 2 */}
          <g transform="translate(400, 16)">
            <line x1="10" y1="10" x2="5" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="15" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="3" y1="0" x2="17" y2="0" stroke="#424242" strokeWidth="2" />
            <rect x="6" y="10" width="8" height="2" fill="#757575" rx="1" />
          </g>

          {/* Pantograph 3 */}
          <g transform="translate(640, 16)">
            <line x1="10" y1="10" x2="5" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="15" y2="0" stroke="#616161" strokeWidth="1.5" />
            <line x1="3" y1="0" x2="17" y2="0" stroke="#424242" strokeWidth="2" />
            <rect x="6" y="10" width="8" height="2" fill="#757575" rx="1" />
          </g>

          {/* JR logo */}
          <text x="200" y="64" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">JR</text>
        </svg>
      </div>

      {/* Sakura petals floating */}
      {mounted && Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`petal-${i}`}
          style={{
            position: 'absolute',
            top: `${-10 + Math.random() * 20}%`,
            left: `${-20 + Math.random() * 80}%`, /* Start more to the left so they can blow right */
            width: '6px',
            height: '6px',
            borderRadius: '50% 0 50% 0',
            background: `rgba(244, 143, 177, ${0.3 + Math.random() * 0.4})`,
            zIndex: 15,
            animation: `petalFall ${4 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
          }}
        />
      ))}



      {/* Edge blur overlay to blend with background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 50,
          pointerEvents: 'none',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          maskImage: 'radial-gradient(ellipse at center, transparent 50%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 50%, black 100%)',
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(248, 250, 252, 0.8) 100%)', /* Matches bg-slate-50 */
        }}
      />

      {/* Keyframe animations */}
      <style>{`
        @keyframes trainSlideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes cloudDrift {
          0% { transform: translateX(-60px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw)); opacity: 0; }
        }

        @keyframes treesScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @keyframes foregroundScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes petalFall {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% { opacity: 0.8; }
          25% {
            transform: translate(100px, 80px) rotate(90deg) scale(0.9);
          }
          50% {
            transform: translate(220px, 160px) rotate(180deg) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translate(350px, 250px) rotate(270deg) scale(0.7);
          }
          100% {
            transform: translate(500px, 340px) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
