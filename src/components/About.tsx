import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technological trends to deliver future-ready solutions.',
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Our commitment to quality is unwavering in every project we undertake.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We measure success by the real impact we make on your business.',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Cruising Bytes</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded with a mission to transform digital landscapes, we've been crafting
              innovative solutions for over 5 years. Our team of expert developers, designers,
              and marketers work in perfect harmony to bring your vision to life.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe that every business deserves a digital presence that reflects its values
              and resonates with its audience. That's why we don't just build websites—we create
              experiences that inspire, engage, and convert.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <p className="text-3xl font-bold text-gradient">150+</p>
                <p className="text-gray-400 mt-2">Projects Delivered</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <p className="text-3xl font-bold text-gradient">98%</p>
                <p className="text-gray-400 mt-2">Client Satisfaction</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <p className="text-3xl font-bold text-gradient">45+</p>
                <p className="text-gray-400 mt-2">Team Members</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <p className="text-3xl font-bold text-gradient">24/7</p>
                <p className="text-gray-400 mt-2">Support Available</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="glass p-6 rounded-2xl group hover:border-primary-400/50 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses of all sizes with cutting-edge digital solutions that drive growth,
              foster engagement, and create lasting value in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the trusted partner that transforms ambitious ideas into stunning digital realities,
              setting new standards of excellence in web development and digital innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
