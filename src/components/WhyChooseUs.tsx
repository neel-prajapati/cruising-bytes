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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Cruising Bytes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're not just developers and marketers—we're your partners in digital success.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl h-full flex flex-col hover:border-primary-400/50 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 flex-1">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to transform your digital presence?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
