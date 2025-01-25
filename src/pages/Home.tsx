import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `const developer = {
  name: 'Waleed Shabaan',
  title: 'Full Stack Developer',
  skills: ['React', 'Node.js', 'TypeScript', 'MongoDB',
           'PHP', 'Laravel' , 'MySQL' , 'HTML', 'CSS'],
  passion: 'Building beautiful web applications',
};

console.log('Welcome to my portfolio!');`;

export default function Home() {
  return (
    <div className="p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 sm:mb-8">
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome to My Terminal</h1>
        </div>

        {/* Code Block */}
        <div className="bg-[#282c34] rounded-lg overflow-hidden">
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#21252b]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: '1rem',
              margin: 0,
              background: 'transparent',
              fontSize: '0.875rem', // Smaller font size for small screens
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        {/* Description */}
        <div className="mt-6 sm:mt-8 space-y-4 text-gray-300">
          <p className="text-base sm:text-lg">
            Hi, I'm a full-stack developer passionate about creating modern web
            applications. This portfolio is designed to mimic VS Code, showcasing
            my projects and skills in a familiar environment for developers.
          </p>
          <p className="text-base sm:text-lg">
            Navigate through the sidebar to explore different sections, just like
            you would in VS Code. Each section is represented as a file with its
            appropriate extension.
          </p>
        </div>
      </motion.div>
    </div>
  );
}