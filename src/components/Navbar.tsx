// import { CircuitBoard } from 'lucide-react';
import { Link } from './ui/Link';

import logo from '../images/econyxai.png';
export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md bg-[#0A0A0A] z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24 md:h-28 lg:h-32">
          <div className={`flex items-center py-3`}>
            <img
              src={logo}
              alt="Econyx.AI Logo"
              className="h-[56px] w-auto md:h-[64px] lg:h-[72px] transition-all duration-200"
            />
            <span className="ml-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              ECONYX.AI
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
