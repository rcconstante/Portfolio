
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <div className="flex items-center space-x-2 text-blue-400 text-sm font-semibold mb-4 animate-fade-in-up">
                <div className="w-8 h-0.5 bg-blue-400"></div>
                <span>FEATURED PROJECT</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Advanced Web
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Application
                </span>
              </h2>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A cutting-edge full-stack application built with modern technologies. 
              Features real-time data processing, machine learning integration, 
              and an intuitive user interface designed for optimal user experience.
            </p>
            
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python'].map((tech, index) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm hover:bg-white/20 transition-all duration-300"
                  style={{animationDelay: `${0.4 + index * 0.1}s`}}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="w-full max-w-md aspect-[4/3] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1 animate-glow">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Project showcase"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center animate-float shadow-lg">
                <span className="text-white text-xs font-bold">JS</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-float shadow-lg" style={{animationDelay: '1s'}}>
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
