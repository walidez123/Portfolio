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
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-4 mb-8">
          <Terminal className="w-8 h-8 text-green-500" />
          <h1 className="text-3xl font-bold">Welcome to My Terminal</h1>
        </div>

        <div className="bg-[#282c34] rounded-lg overflow-hidden">
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#21252b]">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: '1.5rem',
              margin: 0,
              background: 'transparent',
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className="mt-8 space-y-6 text-gray-300">
          <p className="text-lg">
            Hi, I'm a full-stack developer passionate about creating modern web
            applications. This portfolio is designed to mimic VS Code, showcasing
            my projects and skills in a familiar environment for developers.
          </p>
          <p className="text-lg">
            Navigate through the sidebar to explore different sections, just like
            you would in VS Code. Each section is represented as a file with its
            appropriate extension.
          </p>
        </div>
      </motion.div>
    </div>
  );
}