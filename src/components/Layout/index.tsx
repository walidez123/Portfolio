import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import StatusBar from './StatusBar';
import TabBar from './TabBar';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white">
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TabBar />
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}