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
    <section id="about" className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/12 rounded-full blur-3xl"
        animate={{ y: [0, -60, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-purple/08 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Content - Premium spacing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <p className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">WHO WE ARE</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-gradient">Cruising Bytes</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Founded with a mission to revolutionize digital landscapes, we've been crafting
              innovative, award-winning solutions for over 5 years. Our elite team of developers, designers,
              and strategists collaborate seamlessly to bring your boldest visions to life.
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We believe that every business deserves a digital presence that authentically reflects its values
              and deeply resonates with its audience. That's why we don't just build websites—we craft
              transformative experiences that inspire, engage, and drive real, measurable growth.
            </motion.p>

            {/* Premium Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 py-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="glass p-8 rounded-2xl text-center border border-white/10 group hover:border-primary-400/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
              >
                <motion.p
                  className="text-4xl font-bold text-gradient mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  150+
                </motion.p>
                <p className="text-gray-400 text-sm font-medium">Projects Delivered</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="glass p-8 rounded-2xl text-center border border-white/10 group hover:border-primary-400/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
              >
                <motion.p
                  className="text-4xl font-bold text-gradient mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  98%
                </motion.p>
                <p className="text-gray-400 text-sm font-medium">Client Satisfaction</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="glass p-8 rounded-2xl text-center border border-white/10 group hover:border-primary-400/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
              >
                <motion.p
                  className="text-4xl font-bold text-gradient mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  45+
                </motion.p>
                <p className="text-gray-400 text-sm font-medium">Expert Team Members</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="glass p-8 rounded-2xl text-center border border-white/10 group hover:border-primary-400/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
              >
                <motion.p
                  className="text-4xl font-bold text-gradient mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  24/7
                </motion.p>
                <p className="text-gray-400 text-sm font-medium">Premium Support</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Premium Values */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
            viewport={{ once: true }}
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="glass p-8 rounded-2xl border border-white/10 group hover:border-primary-400/40 transition-all duration-300 overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
                  whileHover={{ x: 12, y: -4 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-5">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-primary flex-shrink-0 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Premium Mission and Vision */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass p-10 rounded-2xl border border-white/10 group hover:border-primary-400/40 transition-all duration-300 overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed font-light text-base">
              To empower businesses of all sizes with cutting-edge digital solutions that drive exponential growth,
              foster deep engagement, and create lasting value in an ever-evolving digital landscape.
            </p>
          </motion.div>

          <motion.div
            className="glass p-10 rounded-2xl border border-white/10 group hover:border-accent-purple/40 transition-all duration-300 overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20"
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed font-light text-base">
              To be the industry-leading partner that transforms ambitious ideas into extraordinary digital experiences,
              consistently setting new standards of excellence and innovation in digital transformation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
