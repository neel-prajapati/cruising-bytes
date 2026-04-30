import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedGradient from './AnimatedGradient';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden flex items-center">
      {/* Animated background */}
      <AnimatedGradient />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-cyan" />
              <span className="text-accent-cyan font-semibold">Welcome to the Future</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block">Elevate Your</span>
              <span className="text-gradient block">Digital Presence</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Transform your vision into reality with cutting-edge website development and
              strategic digital marketing solutions. We craft experiences that captivate,
              engage, and convert.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-purple-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#services"
                className="px-8 py-4 rounded-lg glass hover:bg-white/20 text-white font-semibold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-2xl font-bold text-gradient">150+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient">98%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient">5+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Floating card */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-[500px]"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl glass p-8 flex flex-col justify-center overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-20" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary" />
                  <div>
                    <p className="font-semibold">Web Development</p>
                    <p className="text-sm text-gray-400">Modern & Fast</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary" />
                  <div>
                    <p className="font-semibold">Digital Marketing</p>
                    <p className="text-sm text-gray-400">Results Driven</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary" />
                  <div>
                    <p className="font-semibold">24/7 Support</p>
                    <p className="text-sm text-gray-400">Always There</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary" />
                  <div>
                    <p className="font-semibold">Scalable Solutions</p>
                    <p className="text-sm text-gray-400">Future Proof</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
