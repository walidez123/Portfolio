import { Circle, GitBranch, Wifi } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-2 text-sm">
      <div className="flex items-center space-x-2">
        <GitBranch className="w-4 h-4" />
        <span>main</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Circle className="w-3 h-3 fill-current" />
          <span>TypeScript</span>
        </div>
        <div className="flex items-center space-x-1">
          <Wifi className="w-4 h-4" />
          <span>Online</span>
        </div>
      </div>
    </div>
  );
}