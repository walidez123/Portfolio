import { motion } from 'framer-motion';
import { BarChart2, MessageSquare, Settings, Users } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart2 },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'projects', label: 'Projects', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    features: '',
    github: '',
    live: '',
  });

  const stats = [
    { label: 'Total Views', value: '12.5K' },
    { label: 'Messages', value: '48' },
    { label: 'Projects', value: '6' },
    { label: 'Visitors', value: '3.2K' },
  ];

  const messages = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      message: 'Interested in collaboration...',
      date: '2024-03-15',
      status: 'unread',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      message: 'Great portfolio! Would love to...',
      date: '2024-03-14',
      status: 'read',
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddProject = () => {
    const formattedProject = {
      ...newProject,
      tags: newProject.tags.split(',').map((tag) => tag.trim()),
      features: newProject.features.split('\n').map((feature) => feature.trim()),
    };

    console.log('New Project:', formattedProject);

    setNewProject({
      title: '',
      description: '',
      image: '',
      tags: '',
      features: '',
      github: '',
      live: '',
    });

    setShowModal(false);
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => setShowModal(true)}
          >
            New Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1e1e1e] p-6 rounded-lg"
            >
              <h3 className="text-gray-400 mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
          <div className="border-b border-[#2d2d2d]">
            <nav className="flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 transition-colors ${
                      activeTab === tab.id
                        ? 'text-purple-500 border-b-2 border-purple-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'messages' && (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="bg-[#2d2d2d] p-4 rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium">{message.name}</h3>
                      <p className="text-gray-400">{message.email}</p>
                      <p className="text-sm mt-1">{message.message}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{message.date}</p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                          message.status === 'unread'
                            ? 'bg-purple-500/20 text-purple-500'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {message.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-[#1e1e1e] p-6 rounded-lg mb-8"
          >
            <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                placeholder="Project Title"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
              />
              <textarea
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                placeholder="Project Description"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
                rows="3"
              />
              <input
                type="text"
                name="image"
                value={newProject.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
              />
              <input
                type="text"
                name="tags"
                value={newProject.tags}
                onChange={handleInputChange}
                placeholder="Tags (comma-separated)"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
              />
              <textarea
                name="features"
                value={newProject.features}
                onChange={handleInputChange}
                placeholder="Features (one per line)"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
                rows="4"
              />
              <input
                type="text"
                name="github"
                value={newProject.github}
                onChange={handleInputChange}
                placeholder="GitHub Link"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
              />
              <input
                type="text"
                name="live"
                value={newProject.live}
                onChange={handleInputChange}
                placeholder="Live Demo Link"
                className="w-full bg-[#2d2d2d] text-white p-3 rounded-md"
              />
              <button
                type="button"
                onClick={handleAddProject}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Add Project
              </button>
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
