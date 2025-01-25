import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import StatusBar from './StatusBar';
import TabBar from './TabBar';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e1e] text-white">
      {/* Main content area */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar toggle button for small screens */}
        <button
          className="fixed top-10 left-2 z-50 p-2 bg-[#333] rounded-md md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Sidebar - hidden on small screens by default, visible when toggled or on medium and larger screens */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#2d2d2d] transform transition-transform duration-200 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:relative md:w-auto`}
        >
          <Sidebar />
        </div>

        {/* Overlay for small screens when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main content and tabs */}
        <div className="flex-1 flex flex-col">
          <TabBar />
          <main className="flex-1 overflow-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />
    </div>
  );
}