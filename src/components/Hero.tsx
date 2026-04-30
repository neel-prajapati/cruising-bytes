import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import ShipBackground from './ShipBackground';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] },
    },
  };


  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-slate-950">
      {/* Ship and sparkling water background */}
      <ShipBackground />

      {/* Premium floating elements */}
      <motion.div
        className="absolute top-32 left-5 w-96 h-96 bg-primary-600/25 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-accent-purple/15 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content - Enhanced spacing */}
          <div className="space-y-8">
            {/* Badge with better styling */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-accent-cyan" />
              </motion.div>
              <span className="text-sm font-semibold text-accent-cyan">Welcome to the Future</span>
            </motion.div>

            {/* Enhanced headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white">Elevate Your</span>
                <motion.span
                  className="text-gradient block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Digital Presence
                </motion.span>
              </h1>
            </motion.div>

            {/* Improved description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              Transform your vision into stunning digital reality with cutting-edge technology and
              strategic innovation. We create experiences that captivate, inspire, and drive measurable results.
            </motion.p>

            {/* Premium CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 rounded-xl bg-gradient-primary text-white font-semibold flex items-center justify-center gap-2 overflow-hidden shadow-2xl shadow-purple-500/30"
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(157, 78, 221, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.a>

              <motion.a
                href="#services"
                className="px-8 py-4 rounded-xl glass border border-white/30 hover:border-primary-400/50 text-white font-semibold flex items-center justify-center transition-all duration-300 group"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Enhanced stats section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10"
            >
              <motion.div whileHover={{ y: -4 }} className="group">
                <motion.p className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:text-gradient transition-all">
                  150+
                </motion.p>
                <p className="text-sm text-gray-400 font-medium">Projects Delivered</p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="group">
                <motion.p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  98%
                </motion.p>
                <p className="text-sm text-gray-400 font-medium">Client Satisfaction</p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="group">
                <motion.p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  5+
                </motion.p>
                <p className="text-sm text-gray-400 font-medium">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Premium floating card with enhanced visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-[550px]"
          >
            {/* Animated glow background */}
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 blur-2xl"
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Main card */}
            <motion.div
              className="absolute inset-0 rounded-3xl glass border border-white/20 p-8 lg:p-10 flex flex-col justify-center overflow-hidden shadow-2xl shadow-purple-500/10"
              whileHover={{ y: -15, boxShadow: '0 25px 50px -12px rgba(157, 78, 221, 0.3)' }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-primary-600 to-accent-purple rounded-full blur-3xl opacity-15"
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Content - Premium features list */}
              <div className="relative z-10 space-y-8">
                {/* Feature 1 */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-lg text-white">Web Development</p>
                    <p className="text-sm text-gray-400 mt-1">Lightning-fast, modern builds</p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan to-primary-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-lg text-white">Digital Marketing</p>
                    <p className="text-sm text-gray-400 mt-1">Data-driven strategy</p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple to-primary-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-lg text-white">24/7 Support</p>
                    <p className="text-sm text-gray-400 mt-1">Always here for you</p>
                  </div>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-400/30 group-hover:shadow-pink-400/50"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-lg text-white">Scalable Solutions</p>
                    <p className="text-sm text-gray-400 mt-1">Built for the future</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Scroll to Discover</p>
          <motion.div
            className="w-7 h-12 border-2 border-gradient-primary rounded-full flex items-start justify-center p-3 relative"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(157, 78, 221, 0.1) 0%, transparent 100%)',
            }}
          >
            <motion.div
              className="w-1 h-2 bg-gradient-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
