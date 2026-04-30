import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce platform with real-time inventory and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Full Stack',
    description: 'Comprehensive analytics dashboard with real-time data visualization.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
  {
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Integrated marketing campaign that achieved 300% ROI increase.',
    tags: ['SEO', 'SEM', 'Social Media', 'Analytics'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
  },
  {
    title: 'Brand Redesign',
    category: 'UI/UX Design',
    description: 'Complete brand identity redesign with modern visual language.',
    tags: ['Branding', 'Design System', 'Figma', 'Prototyping'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    link: '#',
  },
  {
    title: 'Mobile App',
    category: 'Development',
    description: 'Cross-platform mobile application with 50k+ active users.',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    link: '#',
  },
  {
    title: 'Content Strategy',
    category: 'Digital Marketing',
    description: 'Strategic content planning that boosted engagement by 250%.',
    tags: ['Content Marketing', 'SEO Writing', 'Analytics', 'Copywriting'],
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    link: '#',
  },
];

export default function Portfolio() {
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
    <section id="portfolio" className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-purple/12 rounded-full blur-3xl"
        animate={{ y: [0, 70, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary-600/08 rounded-full blur-3xl"
        animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
            <p className="text-sm font-semibold text-primary-400">OUR LATEST WORK</p>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Showcase of our most impactful work across web development, design, and digital marketing excellence.
          </p>
        </motion.div>

        {/* Premium Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -20, transition: { duration: 0.3 } }}
              className="group cursor-pointer h-full"
            >
              <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 group-hover:border-primary-400/40 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300">
                {/* Image area - Enhanced */}
                <div
                  className="w-full h-56 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 group-hover:from-black/30 group-hover:via-black/20 group-hover:to-black/50 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-lg flex items-center justify-center border-2 border-white/40 group-hover:bg-white/25 group-hover:border-white/60 transition-all duration-300 shadow-xl"
                    >
                      <ExternalLink className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content area - Enhanced spacing */}
                <div className="flex-1 p-8 flex flex-col">
                  <div className="mb-6">
                    <motion.p
                      className="text-xs text-primary-400 font-bold uppercase tracking-widest mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      {project.category}
                    </motion.p>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Premium Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs bg-white/5 text-gray-300 border border-white/15 group-hover:border-primary-400/40 transition-all duration-300 font-medium"
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
