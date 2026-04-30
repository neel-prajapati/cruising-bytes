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
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence and achieve your business goals.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative glass h-full p-8 rounded-2xl hover:border-primary-400/50 transition-colors duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 font-semibold"
                    >
                      Learn more →
                    </a>
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
