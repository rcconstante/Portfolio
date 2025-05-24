
import { MapPin, X, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/WxYhIytZcUFVj6Qi/scene.splinecode"
          className="w-full h-full"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-left">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Creative
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-glow">
              Developer
            </span>
            <br />
            Portfolio
          </h1>
          
          <p className="text-white/80 text-lg max-w-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Building innovative digital experiences with cutting-edge technology, 
            creative design, and seamless user interactions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View My Work
            </Button>
            
            <div className="flex items-center space-x-2 text-white/70">
              <MapPin className="w-5 h-5" />
              <span>Available Worldwide</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 pt-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-xs">3+</span>
              </div>
              <span className="text-white/70">Years Experience</span>
            </div>
            
            <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center animate-float">
              <X className="w-6 h-6 text-blue-500" />
            </div>
            
            <span className="text-white/70">Full-Stack Developer</span>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/10 animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
