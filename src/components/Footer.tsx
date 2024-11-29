import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Econyx-ai" 
            className="text-gray-400 hover:text-[#00F0FF] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com/EconyxAI" 
            className="text-gray-400 hover:text-[#00F0FF] transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
