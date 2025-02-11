import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Experiences with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Passion
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Full-stack developer specializing in building exceptional digital experiences.
              Let's turn your ideas into reality.
            </p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#projects"
                className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80"
            alt="Developer workspace"
            className="mt-12 sm:mt-16 rounded-xl shadow-2xl w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}