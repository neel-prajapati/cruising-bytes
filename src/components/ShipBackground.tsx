import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ShipBackground() {
  // Generate random sparkles
  const sparkles = useMemo<Sparkle[]>(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 40 + Math.random() * 40,
      size: 1 + Math.random() * 3,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  // Wave animation
  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Ocean gradient background */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(30, 41, 82, 0.4)" />
            <stop offset="30%" stopColor="rgba(15, 76, 129, 0.3)" />
            <stop offset="100%" stopColor="rgba(10, 51, 89, 0.5)" />
          </linearGradient>

          <radialGradient id="waterShimmer" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgba(100, 200, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(10, 51, 89, 0)" />
          </radialGradient>

          <filter id="waterGlow">
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="saturate"
              values="1.2"
            />
          </filter>
        </defs>

        {/* Ocean base */}
        <rect width="1200" height="600" fill="url(#oceanGradient)" />
        <rect width="1200" height="600" fill="url(#waterShimmer)" opacity="0.5" />

        {/* Animated wave patterns */}
        <motion.g
          variants={waveVariants}
          animate="animate"
          initial={{ y: 0 }}
        >
          {/* Wave 1 */}
          <path
            d="M 0 300 Q 150 250, 300 300 T 600 300 T 900 300 T 1200 300 L 1200 600 L 0 600 Z"
            fill="rgba(15, 115, 160, 0.2)"
            opacity="0.4"
          />
          {/* Wave 2 */}
          <path
            d="M 0 320 Q 200 280, 400 320 T 800 320 T 1200 320 L 1200 600 L 0 600 Z"
            fill="rgba(20, 140, 200, 0.15)"
            opacity="0.3"
          />
          {/* Wave 3 */}
          <path
            d="M 0 340 Q 100 310, 200 340 T 400 340 T 600 340 T 800 340 T 1000 340 T 1200 340 L 1200 600 L 0 600 Z"
            fill="rgba(30, 160, 220, 0.1)"
            opacity="0.2"
          />
        </motion.g>

        {/* Animated ship */}
        <motion.g
          animate={{
            x: [-200, 1200],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Ship shadow for depth */}
          <ellipse
            cx="400"
            cy="350"
            rx="80"
            ry="15"
            fill="rgba(0, 0, 0, 0.2)"
            filter="url(#waterGlow)"
          />

          {/* Ship hull */}
          <path
            d="M 350 320 L 450 320 L 470 350 L 330 350 Z"
            fill="url(#shipHull)"
            strokeWidth="2"
            stroke="rgba(139, 90, 43, 0.6)"
          />

          {/* Ship deck */}
          <rect
            x="340"
            y="308"
            width="120"
            height="12"
            fill="rgba(160, 82, 45, 0.9)"
            rx="2"
          />

          {/* Main mast */}
          <line
            x1="400"
            y1="308"
            x2="400"
            y2="180"
            stroke="rgba(150, 100, 50, 0.8)"
            strokeWidth="3"
          />

          {/* Mast top */}
          <circle cx="400" cy="175" r="3" fill="rgba(200, 150, 75, 0.9)" />

          {/* Main sail */}
          <motion.path
            d="M 400 190 Q 450 200, 460 290 L 400 280 Z"
            fill="rgba(240, 248, 255, 0.8)"
            stroke="rgba(70, 130, 180, 0.4)"
            strokeWidth="1"
            animate={{
              d: [
                'M 400 190 Q 450 200, 460 290 L 400 280 Z',
                'M 400 190 Q 465 205, 475 290 L 400 280 Z',
                'M 400 190 Q 450 200, 460 290 L 400 280 Z',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Back sail */}
          <motion.path
            d="M 400 210 Q 350 220, 330 300 L 400 295 Z"
            fill="rgba(200, 220, 255, 0.6)"
            stroke="rgba(70, 130, 180, 0.3)"
            strokeWidth="1"
            animate={{
              d: [
                'M 400 210 Q 350 220, 330 300 L 400 295 Z',
                'M 400 210 Q 335 225, 315 300 L 400 295 Z',
                'M 400 210 Q 350 220, 330 300 L 400 295 Z',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Flag */}
          <motion.path
            d="M 400 180 L 430 175 L 435 190 Z"
            fill="rgba(255, 215, 0, 0.8)"
            animate={{
              d: [
                'M 400 180 L 430 175 L 435 190 Z',
                'M 400 180 L 440 170 L 445 190 Z',
                'M 400 180 L 430 175 L 435 190 Z',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Ship cabin */}
          <rect
            x="385"
            y="320"
            width="30"
            height="20"
            fill="rgba(180, 100, 50, 0.8)"
            rx="2"
          />

          {/* Windows */}
          <circle cx="393" cy="328" r="2" fill="rgba(255, 200, 100, 0.7)" />
          <circle cx="405" cy="328" r="2" fill="rgba(255, 200, 100, 0.7)" />
        </motion.g>
      </svg>

      {/* Sparkling water particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
            }}
            animate={{
              opacity: [0, 0.8, 0.6, 0],
              y: [0, -40, -80],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Add gradient definitions for ship */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="shipHull" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 69, 19, 0.9)" />
            <stop offset="100%" stopColor="rgba(101, 50, 15, 0.9)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
