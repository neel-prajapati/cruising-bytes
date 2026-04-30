import { motion } from 'framer-motion';
import { CheckCircle2, Gauge, Shield, Users, Zap, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Gauge,
    title: 'Lightning Fast',
    description: 'Optimized for speed with sub-second load times and smooth interactions.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals with deep expertise across all digital disciplines.',
  },
  {
    icon: Zap,
    title: 'Cutting Edge Tech',
    description: 'We use the latest technologies and best practices for modern solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Data-driven approach with documented success and measurable outcomes.',
  },
  {
    icon: CheckCircle2,
    title: 'Full Support',
    description: '24/7 dedicated support ensuring your digital presence thrives continuously.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-600/12 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium Section header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary-400/30 bg-primary-400/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-semibold text-primary-400">WHY PARTNER WITH US</p>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient">Cruising Bytes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            We're more than just developers and marketers—we're your strategic partners dedicated to your digital success and growth.
          </p>
        </motion.div>

        {/* Premium Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.23, 0.86, 0.39, 0.96] }}
                viewport={{ once: true }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <div className="glass p-8 rounded-2xl h-full flex flex-col border border-white/10 group-hover:border-primary-400/40 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 overflow-hidden">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 flex-1 leading-relaxed font-light text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 mb-8 font-light">
            Ready to revolutionize your digital presence and accelerate growth?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-primary text-white font-semibold shadow-2xl shadow-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(157, 78, 221, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
