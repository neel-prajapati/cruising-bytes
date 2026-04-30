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
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of our latest and greatest work across web development, design, and digital marketing.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image area */}
                <div
                  className="w-full h-48 relative overflow-hidden group-hover:scale-110 transition-transform duration-500"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm text-primary-400 font-semibold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 border border-white/20 group-hover:border-primary-400/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
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
