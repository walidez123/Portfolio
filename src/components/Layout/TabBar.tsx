import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTabStore } from '../../store/useTabStore';

export default function TabBar() {
  const { tabs, activeTab, removeTab, setActiveTab } = useTabStore();
  const navigate = useNavigate();

  const handleTabClick = (id: string, path: string) => {
    setActiveTab(id);
    navigate(path);
  };

  const handleTabClose = (
    e: React.MouseEvent,
    id: string
  ) => {
    e.stopPropagation();
    removeTab(id);
  };

  return (
    <div className="h-9 bg-[#252526] flex items-center overflow-x-auto">
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          layout
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className={`h-full flex items-center px-4 border-r border-[#2d2d2d] cursor-pointer group ${
            activeTab === tab.id ? 'bg-[#1e1e1e]' : 'bg-[#2d2d2d]'
          }`}
          onClick={() => handleTabClick(tab.id, tab.path)}
        >
          <span className="text-gray-400">{tab.title}</span>
          <button
            className="ml-2 p-1 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-[#3d3d3d]"
            onClick={(e) => handleTabClose(e, tab.id)}
          >
            <X className="w-3 h-3 text-gray-400" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}