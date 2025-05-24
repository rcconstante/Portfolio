import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            The Biblical
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Benouming at
            </span>
            <br />
            Graitts or Chrick
          </h1>
          
          <p className="text-white/70 text-lg max-w-lg leading-relaxed">
            Potent thnyyll use sorcrg and operarc a keirfull two diwaur Careem, 
            arroebuttin saagoreleerd oa fou.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-semibold">
              Lizik Arpurd
            </Button>
            
            <div className="flex items-center space-x-2 text-white/70">
              <MapPin className="w-5 h-5" />
              <span>4</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">S</span>
              </div>
              <span className="text-white/70">Saroyttes</span>
            </div>
            
            <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center">
              <X className="w-6 h-6 text-blue-500" />
            </div>
            
            <span className="text-white/70">Yletne andantnort</span>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;