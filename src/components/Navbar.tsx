// import { CircuitBoard } from 'lucide-react';
import { Link } from './ui/Link';

import logo from '../images/econyxai.png';
export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md bg-[#0A0A0A] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* <CircuitBoard className="w-8 h-8 text-[#00F0FF]" /> */}
            <img src={logo} alt="ECONYX.AI" className="w-24 h-24" />
            <span className="text-white text-xl font-bold">ECONYX.AI</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#features">Features</Link>
            <button className="bg-[#6E00FF] hover:bg-[#5500cc] text-white px-4 py-2 rounded-md transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
