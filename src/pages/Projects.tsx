import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';
import { useParams } from 'react-router-dom';

const projects = {
  'e-commerce': {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1932&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order management and tracking",
      "Admin dashboard for product management"
    ],
    github: "https://github.com",
    live: "https://example.com"
  },
  'chat-app': {
    title: "AI Chat Application",
    description: "Real-time chat application powered by artificial intelligence",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2095&q=80",
    tags: ["TypeScript", "OpenAI", "WebSocket", "Redis"],
    features: [
      "Real-time messaging with WebSocket",
      "AI-powered chat suggestions",
      "Message history and search",
      "User presence indicators",
      "File sharing and media support",
      "Responsive design for mobile devices"
    ],
    github: "https://github.com",
    live: "https://example.com"
  },
  'portfolio': {
    title: "Portfolio Generator",
    description: "Dynamic portfolio generator for developers",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
    tags: ["React", "Tailwind", "Framer Motion"],
    features: [
      "Customizable templates",
      "Project showcase section",
      "Blog integration",
      "Contact form with email notifications",
      "SEO optimization",
      "Analytics dashboard"
    ],
    github: "https://github.com",
    live: "https://example.com"
  }
};

export default function Projects() {
  const { id } = useParams();
  const project = id ? projects[id as keyof typeof projects] : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-4 mb-8">
          <Code2 className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold">{project.title}</h1>
        </div>

        <div className="space-y-8">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          <div className="bg-[#1e1e1e] rounded-lg p-6">
            <p className="text-gray-300 text-lg mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#2d2d2d] rounded-full text-sm text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-2 rounded-lg hover:bg-[#3d3d3d] transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}