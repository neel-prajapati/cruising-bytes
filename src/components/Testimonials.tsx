import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, TechVenture',
    image: '👩‍💼',
    content:
      'Working with Cruising Bytes transformed our online presence completely. Their attention to detail and understanding of our vision was exceptional.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    title: 'Marketing Director, GrowthCo',
    image: '👨‍💼',
    content:
      'The digital marketing campaign they executed exceeded all our expectations. We saw a 300% increase in conversions within 3 months.',
    rating: 5,
  },
  {
    name: 'Emma Johnson',
    title: 'Founder, StyleHub',
    image: '👩‍🔬',
    content:
      'The website they built is not just beautiful—it\'s incredibly fast and user-friendly. Our bounce rate dropped by 45%.',
    rating: 5,
  },
  {
    name: 'David Kim',
    title: 'Product Manager, InnovateTech',
    image: '👨‍🔧',
    content:
      'Outstanding support and delivery. They treated our project like their own. Highly recommend for any web development needs.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    title: 'Owner, LocalBiz',
    image: '👩‍🎓',
    content:
      'From concept to launch, the entire process was smooth and professional. They delivered exactly what we envisioned.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    title: 'Director, Creative Agency',
    image: '👨‍🎨',
    content:
      'Their creative approach and technical expertise made them the perfect partner for our complex digital transformation project.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
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
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their digital presence with us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="glass p-6 rounded-2xl h-full flex flex-col hover:border-primary-400/50 transition-colors duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-2xl text-center">
            <p className="text-3xl font-bold text-gradient">150+</p>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>
          <div className="glass p-8 rounded-2xl text-center">
            <p className="text-3xl font-bold text-gradient">98%</p>
            <p className="text-gray-400 mt-2">Satisfaction Rate</p>
          </div>
          <div className="glass p-8 rounded-2xl text-center">
            <p className="text-3xl font-bold text-gradient">4.9★</p>
            <p className="text-gray-400 mt-2">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
