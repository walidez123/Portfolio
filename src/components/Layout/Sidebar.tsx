import { motion } from 'framer-motion';
import {
  Code2,
  FileText,
  FolderGit2,
  Home,
  Mail,
  Settings,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTabStore } from '../../store/useTabStore';
import { div } from 'framer-motion/client';

const sidebarItems = [
  { id: 'home', title: 'Home.jsx', path: '/', icon: Home },
  { id: 'about', title: 'About.tsx', path: '/about', icon: User },
  {
    id: 'projects',
    title: 'Projects',
    icon: Code2,
    children: [
      { id: 'project1', title: 'E-Commerce.tsx', path: '/projects/e-commerce' },
      { id: 'project2', title: 'ChatApp.tsx', path: '/projects/chat-app' },
      { id: 'project3', title: 'Portfolio.tsx', path: '/projects/portfolio' },
      { id: 'project4', title: 'Tracking.tsx', path: '/projects/tracking' },
    ],
  },
  // { id: 'blog', title: 'Blog.md', path: '/blog', icon: FileText },
  // { id: 'github', title: 'Github.yml', path: '/github', icon: FolderGit2 },
  // { id: 'contact', title: 'Contact.jsx', path: '/contact', icon: Mail },
  // { id: 'dashboard', title: 'Dashboard.tsx', path: '/dashboard', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();
  const addTab = useTabStore((state) => state.addTab);
  const [expandedItems, setExpandedItems] = useState<string[]>(['projects']);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (item: any) => {
    if (item.children) {
      toggleExpand(item.id);
    } else {
      addTab({
        id: item.id,
        title: item.title,
        path: item.path,
      });
    }
  };

  const renderSidebarItem = (item: any, depth = 0) => {
    const isActive = location.pathname === item.path;
    const isExpanded = expandedItems.includes(item.id);
    const Icon = item.icon;

    return (
      <div className='h-full'>
        <div key={item.id}>
        <Link
          to={item.path || '#'}
          onClick={() => handleItemClick(item)}
          className={`relative flex items-center cursor-pointer ${
            depth > 0 ? 'ml-4' : ''
          }`}
        >
          <div
            className={`p-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2 ${
              isActive ? 'text-white' : ''
            }`}
          >
            {Icon && <Icon className="w-5 h-5" />}
            {item.children && (
              <span className="text-xs">{isExpanded ? '▼' : '▶'}</span>
            )}
            <span className="text-sm">{item.title}</span>
          </div>
          {isActive && (
            <motion.div
              layoutId="sidebar-active"
              className="absolute left-0 top-0 w-0.5 h-full bg-white"
            />
          )}
        </Link>
        {item.children && isExpanded && (
          <div className="ml-4">
            {item.children.map((child: any) => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
      </div>
    );
  };

  return (
    <div className="w-64 min-h-screen bg-[#1e1e1e] border-r border-[#2d2d2d] flex flex-col overflow-y-auto">
      {sidebarItems.map((item) => renderSidebarItem(item))}
    </div>
  );
}