import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'color',
  showText = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 'w-9 h-9', text: 'text-lg', subText: 'text-[9px]' },
    md: { icon: 'w-12 h-12', text: 'text-2xl', subText: 'text-[11px]' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl', subText: 'text-xs' },
    xl: { icon: 'w-24 h-24', text: 'text-4xl', subText: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon recreating the business card emblem */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>
            <linearGradient id="globeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B194C" />
            </linearGradient>
            <linearGradient id="waveBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Outer Gold Ring */}
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="url(#goldGradient)"
            strokeWidth="8"
            className="opacity-95"
          />

          {/* Globe Background */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="url(#globeBlue)"
          />

          {/* Globe Latitude & Longitude Grid Lines */}
          <ellipse
            cx="100"
            cy="100"
            rx="56"
            ry="78"
            stroke="#93C5FD"
            strokeWidth="3.5"
            strokeOpacity="0.4"
            fill="none"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="26"
            ry="78"
            stroke="#93C5FD"
            strokeWidth="3.5"
            strokeOpacity="0.4"
            fill="none"
          />
          <line
            x1="22"
            y1="100"
            x2="178"
            y2="100"
            stroke="#93C5FD"
            strokeWidth="3.5"
            strokeOpacity="0.4"
          />
          <ellipse
            cx="100"
            cy="65"
            rx="70"
            ry="24"
            stroke="#93C5FD"
            strokeWidth="3"
            strokeOpacity="0.35"
            fill="none"
          />
          <ellipse
            cx="100"
            cy="135"
            rx="70"
            ry="24"
            stroke="#93C5FD"
            strokeWidth="3"
            strokeOpacity="0.35"
            fill="none"
          />

          {/* Golden Sailing Ship (Galleon with billowing sails) */}
          <g transform="translate(15, 20) scale(0.85)">
            {/* Ship Hull */}
            <path
              d="M35 125 C 65 145, 120 148, 160 120 C 130 135, 70 135, 45 122 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M42 120 C 60 128, 115 130, 150 115 C 135 124, 75 126, 50 118 Z"
              fill="#FDF0CD"
              opacity="0.8"
            />
            {/* Ship Keel / Stem */}
            <path
              d="M32 118 L 48 132 L 40 136 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M152 116 L 168 108 L 158 124 Z"
              fill="url(#goldGradient)"
            />

            {/* Main Mast & Sails */}
            {/* Center Main Sail */}
            <path
              d="M96 55 C 80 75, 80 95, 96 112 C 108 92, 108 72, 96 55 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M96 35 C 84 48, 84 60, 96 70 C 104 58, 104 46, 96 35 Z"
              fill="url(#goldGradient)"
            />

            {/* Fore Sail (Left) */}
            <path
              d="M68 65 C 56 80, 56 95, 68 108 C 77 94, 77 78, 68 65 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M70 48 C 60 58, 60 68, 70 76 C 76 67, 76 56, 70 48 Z"
              fill="url(#goldGradient)"
            />

            {/* Aft / Jib Sail (Right Triangle Sail) */}
            <path
              d="M104 42 L 138 98 C 122 92, 112 85, 104 76 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M102 78 L 148 114 C 130 110, 118 104, 102 96 Z"
              fill="url(#goldGradient)"
            />

            {/* Mast Lines */}
            <line x1="96" y1="28" x2="96" y2="120" stroke="#AA7C11" strokeWidth="2.5" />
            <line x1="68" y1="42" x2="68" y2="114" stroke="#AA7C11" strokeWidth="2" />
            <line x1="102" y1="36" x2="140" y2="116" stroke="#AA7C11" strokeWidth="1.5" />
          </g>

          {/* Ocean Waves Cutting Across Base */}
          <path
            d="M20 148 C 60 135, 90 158, 140 142 C 165 135, 185 140, 192 145 C 180 165, 145 180, 100 180 C 58 180, 28 160, 20 148 Z"
            fill="url(#waveBlue)"
          />
          <path
            d="M25 152 C 60 140, 95 156, 138 144 C 160 138, 180 143, 186 148 C 172 165, 138 178, 100 178 C 64 178, 38 162, 25 152 Z"
            fill="#38BDF8"
            opacity="0.3"
          />

          {/* Golden Airplane (Circling globe top right) */}
          <g transform="translate(142, 24) rotate(42) scale(0.65)">
            {/* Plane Body */}
            <path
              d="M30 5 C 28 0, 24 0, 22 5 L 20 28 L 2 38 L 4 44 L 20 40 L 21 54 L 14 60 L 14 64 L 26 62 L 38 64 L 38 60 L 31 54 L 32 40 L 48 44 L 50 38 L 32 28 Z"
              fill="url(#goldGradient)"
              stroke="#AA7C11"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-brand font-bold tracking-wider uppercase transition-colors ${currentSize.text} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
            style={{ letterSpacing: '0.12em' }}
          >
            HARMAIN
          </span>
          <span
            className={`font-heading uppercase tracking-[0.28em] font-semibold text-amber-500 ${currentSize.subText}`}
          >
            IMPORT & EXPORT
          </span>
        </div>
      )}
    </div>
  );
};
