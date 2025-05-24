
import { Search, Github, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Cufcery</h3>
            <p className="text-white/60">
              Oean etla susist ult,
              <br />
              sed quer ureap.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input 
                placeholder="Search..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pl-10 rounded-full"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Github className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-center">
            © 2024 ORAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
