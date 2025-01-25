import { Circle, GitBranch, Wifi } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-2 text-sm">
      {/* Left section - Branch information */}
      <div className="flex items-center space-x-2">
        <GitBranch className="w-4 h-4" />
        <span className="hidden sm:inline">main</span> {/* Hide text on small screens */}
      </div>

      {/* Right section - Status indicators */}
      <div className="flex items-center space-x-4">
        {/* TypeScript indicator */}
        <div className="flex items-center space-x-1">
          <Circle className="w-3 h-3 fill-current" />
          <span className="hidden sm:inline">TypeScript</span> {/* Hide text on small screens */}
        </div>

        {/* Online status */}
        <div className="flex items-center space-x-1">
          <Wifi className="w-4 h-4" />
          <span className="hidden sm:inline">Online</span> {/* Hide text on small screens */}
        </div>
      </div>
    </div>
  );
}