import { motion } from 'framer-motion';

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5a189a" />
            <stop offset="50%" stopColor="#7b2cbf" />
            <stop offset="100%" stopColor="#0a0e27" />
          </linearGradient>
          <radialGradient id="grad2" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#c77dff" />
            <stop offset="100%" stopColor="#0a0e27" />
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>

        {/* Background rectangles with animation */}
        <rect width="1200" height="800" fill="#0a0e27" />

        <motion.circle
          cx="600"
          cy="400"
          r="400"
          fill="url(#grad1)"
          opacity="0.3"
          filter="url(#blur)"
          animate={{
            r: [400, 420, 400],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.circle
          cx="200"
          cy="200"
          r="300"
          fill="url(#grad2)"
          opacity="0.2"
          filter="url(#blur)"
          animate={{
            cx: [200, 250, 200],
            cy: [200, 150, 200],
            r: [300, 320, 300],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.circle
          cx="1000"
          cy="600"
          r="350"
          fill="url(#grad1)"
          opacity="0.15"
          filter="url(#blur)"
          animate={{
            cx: [1000, 950, 1000],
            cy: [600, 650, 600],
            r: [350, 370, 350],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </svg>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>
    </div>
  );
}
