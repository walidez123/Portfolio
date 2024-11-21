import { motion } from 'framer-motion';
import { FolderGit2, GitBranch, GitCommit, GitPullRequest, Star } from 'lucide-react';

const repositories = [
  {
    name: 'awesome-project',
    description: 'A full-stack web application built with React and Node.js',
    language: 'TypeScript',
    stars: 128,
    forks: 45,
    lastUpdated: '2 days ago',
  },
  {
    name: 'react-components',
    description: 'A collection of reusable React components',
    language: 'JavaScript',
    stars: 89,
    forks: 23,
    lastUpdated: '1 week ago',
  },
  {
    name: 'portfolio-template',
    description: 'A modern portfolio template for developers',
    language: 'TypeScript',
    stars: 67,
    forks: 12,
    lastUpdated: '3 days ago',
  },
];

export default function Github() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-4 mb-8">
          <FolderGit2 className="w-8 h-8 text-orange-500" />
          <h1 className="text-3xl font-bold">Github.yml</h1>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=50&h=50"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-gray-400">github.com/johndoe</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <GitPullRequest className="w-5 h-5" />
                <span>24 PRs</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitCommit className="w-5 h-5" />
                <span>342 commits</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="w-5 h-5" />
                <span>15 repos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {repositories.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1e1e1e] rounded-lg p-6 hover:bg-[#2d2d2d] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-400 hover:underline cursor-pointer">
                  {repo.name}
                </h3>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitBranch className="w-4 h-4" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{repo.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span>{repo.language}</span>
                </div>
                <span>Updated {repo.lastUpdated}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}