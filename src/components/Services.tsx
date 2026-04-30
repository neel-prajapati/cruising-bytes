import { motion } from 'framer-motion';
import { Code2, Megaphone, Search, Palette, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React/Next.js', 'Full Stack', 'SEO Optimized'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic campaigns designed to reach your target audience and drive meaningful engagement and conversions.',
    features: ['Social Media', 'Content Marketing', 'Email Campaigns'],
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with comprehensive SEO strategies that deliver measurable results.',
    features: ['Keyword Research', 'On-page SEO', 'Link Building'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and reflect your brand identity perfectly.',
    features: ['Wireframing', 'Prototyping', 'User Testing'],
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions that keep your users engaged and satisfied.',
    features: ['Page Speed', 'Code Optimization', 'CDN Setup'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to measure success and continuously improve your digital strategy.',
    features: ['Detailed Reports', 'KPI Tracking', 'Custom Dashboards'],
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Premium background elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-3xl"
        animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header - Enhanced */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full border border-primary-400/30 bg-primary-400/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-semibold text-primary-400">PREMIUM SOLUTIONS</p>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive, cutting-edge solutions meticulously crafted to elevate your digital presence and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services grid - Premium spacing */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <div className="relative glass h-full p-8 rounded-2xl border border-white/10 group-hover:border-primary-400/40 overflow-hidden transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-full blur-3xl`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.15, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Top divider accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon - Enhanced */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title and description */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow font-light text-base">
                      {service.description}
                    </p>

                    {/* Features - Enhanced */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-accent-cyan"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-sm text-gray-300 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn more link - Premium */}
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider group/link"
                      whileHover={{ x: 4 }}
                    >
                      Explore More
                      <motion.span
                        className="ml-2 text-lg"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
