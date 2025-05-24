
import { Facebook, MessageSquare, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">O</span>
          </div>
          <span className="text-white font-bold text-xl">ORAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Bunx</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Sraece</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Cenftuthans</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Facebook className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
          <MessageSquare className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-white/70" />
            <span className="text-white/70 text-sm">19/20</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
