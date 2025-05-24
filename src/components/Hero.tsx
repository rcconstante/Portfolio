
import { MapPin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/WxYhIytZcUFVj6Qi/scene.splinecode" 
          className="w-full h-full"
          style={{ filter: 'none' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-left">
          {/* Name and Title */}
          <div className="space-y-2">
            <h2 className="text-xl font-light text-white/80 tracking-wide">Rich</h2>
            <p className="text-sm text-white/60 font-light tracking-wider">Product & Visual Designer</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
            I am a{' '}
            <span className="font-medium italic">Developer</span>{' '}
            specialising<br />
            in crafting digital<br />
            <span className="font-medium italic">experiences</span>.
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 pt-8 animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-none font-light tracking-wide transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            
            <div className="flex items-center space-x-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-light tracking-wide">Available Worldwide</span>
            </div>
          </div>
        </div>
        
        {/* Right side - 3D Element placeholder */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            {/* This space is for the 3D spline element that's in the background */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
};

export default Hero;
