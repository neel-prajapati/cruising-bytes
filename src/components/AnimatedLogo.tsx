import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  // Container animation
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  };

  // Logo ship animation
  const shipVariants = {
    animate: {
      y: [0, -2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Wave animation
  const waveVariants = {
    animate: {
      d: [
        'M 0 20 Q 5 18, 10 20 T 20 20',
        'M 0 20 Q 5 22, 10 20 T 20 20',
        'M 0 20 Q 5 18, 10 20 T 20 20',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Text letter animation
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  };

  // Glow animation
  const glowVariants = {
    animate: {
      opacity: [0.4, 0.8, 0.4],
      filter: [
        'drop-shadow(0 0 2px rgba(157, 78, 221, 0.3))',
        'drop-shadow(0 0 8px rgba(157, 78, 221, 0.6))',
        'drop-shadow(0 0 2px rgba(157, 78, 221, 0.3))',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      className="flex items-center gap-3 flex-shrink-0 group cursor-pointer pointer-events-none"
    >
      {/* Animated Logo */}
      <motion.div
        className="relative w-10 h-10"
        variants={shipVariants}
        animate="animate"
      >
        {/* Logo background glow */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 blur-lg"
          variants={glowVariants}
          animate="animate"
        />

        {/* Logo SVG */}
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(157, 78, 221, 1)" />
              <stop offset="100%" stopColor="rgba(167, 139, 250, 1)" />
            </linearGradient>
            <filter id="logoShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Circle background */}
          <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.15" />
          <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" />

          {/* Ship hull */}
          <path
            d="M 12 22 L 28 22 L 30 26 L 10 26 Z"
            fill="url(#logoGradient)"
            filter="url(#logoShadow)"
          />

          {/* Ship deck */}
          <rect x="12" y="18" width="16" height="4" fill="url(#logoGradient)" opacity="0.8" />

          {/* Mast */}
          <line
            x1="20"
            y1="18"
            x2="20"
            y2="8"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Main sail */}
          <path
            d="M 20 10 L 26 18 L 20 17 Z"
            fill="url(#logoGradient)"
            opacity="0.9"
          />

          {/* Secondary sail */}
          <path
            d="M 20 12 L 15 18 L 20 16 Z"
            fill="url(#logoGradient)"
            opacity="0.6"
          />

          {/* Flag */}
          <motion.circle
            cx="26"
            cy="7"
            r="1.5"
            fill="rgba(255, 215, 0, 0.9)"
            animate={{
              cx: [26, 28, 26],
              cy: [7, 6, 7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Water waves */}
          <motion.path
            d="M 10 28 Q 12 26, 14 28 T 18 28 T 22 28 T 26 28 T 30 28"
            stroke="url(#logoGradient)"
            strokeWidth="1"
            opacity="0.6"
            variants={waveVariants}
            animate="animate"
          />

          {/* Sparkle dots */}
          <motion.circle
            cx="8"
            cy="24"
            r="0.8"
            fill="rgba(157, 78, 221, 0.6)"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.circle
            cx="32"
            cy="25"
            r="0.8"
            fill="rgba(157, 78, 221, 0.6)"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </svg>
      </motion.div>

      {/* Text */}
      <div className="flex flex-col">
        <motion.div
          className="flex gap-0.5 overflow-hidden"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* "Cruising Bytes" text with letter-by-letter animation */}
          {'Cruising Bytes'.split('').map((char, idx) => (
            <motion.span
              key={idx}
              className="font-bold text-lg bg-gradient-to-r from-primary-500 via-accent-purple to-primary-400 bg-clip-text text-transparent whitespace-pre"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: idx * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle with underline animation */}
        <motion.div
          className="relative h-1 mt-1 overflow-hidden rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-purple to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>

      {/* Hover effect - rotating glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-primary blur-xl transition-opacity duration-300 pointer-events-none"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
