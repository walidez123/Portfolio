import { motion } from 'framer-motion';
import { Code2, Coffee, Globe, Laptop } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { name: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
    { name: 'Other', items: ['AWS', 'CI/CD', 'Testing', 'Agile'] },
  ];

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="flex items-center space-x-4">
          <Code2 className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold">About.tsx</h1>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&h=200"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with 5 years of experience in building
            modern web applications. I specialize in React, Node.js, and cloud technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>Based in San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Laptop className="w-5 h-5 text-green-500" />
              <span>Available for remote work</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Coffee className="w-5 h-5 text-yellow-500" />
              <span>Coffee enthusiast</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1e1e1e] rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#2d2d2d] rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}