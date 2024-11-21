import { motion } from 'framer-motion';
import { Calendar, FileText, User } from 'lucide-react';

const posts = [
  {
    title: 'Building a Modern Web Application with React and Node.js',
    date: '2024-03-15',
    author: 'John Doe',
    excerpt: 'Learn how to create a full-stack application using React, Node.js, and MongoDB...',
    readTime: '5 min read',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'The Power of TypeScript in Large Scale Applications',
    date: '2024-03-10',
    author: 'John Doe',
    excerpt: 'Discover how TypeScript can improve your development workflow and reduce bugs...',
    readTime: '4 min read',
    tags: ['TypeScript', 'JavaScript'],
  },
  {
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    date: '2024-03-05',
    author: 'John Doe',
    excerpt: 'Learn advanced techniques and best practices for using Tailwind CSS...',
    readTime: '3 min read',
    tags: ['CSS', 'Tailwind'],
  },
];

export default function Blog() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-4 mb-8">
          <FileText className="w-8 h-8 text-purple-500" />
          <h1 className="text-3xl font-bold">Blog.md</h1>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1e1e1e] rounded-lg p-6 hover:bg-[#2d2d2d] transition-colors"
            >
              <h2 className="text-xl font-bold mb-2 hover:text-purple-400 cursor-pointer">
                {post.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#2d2d2d] rounded-full text-sm text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}