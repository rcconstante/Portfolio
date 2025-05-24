
import { Star, Eye, Heart, ExternalLink } from 'lucide-react';

const FeaturedWork = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with advanced features",
      image: "photo-1486312338219-ce68d2c6f44d",
      stats: { stars: 8, views: 2, likes: 5 },
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Dashboard",
      description: "Machine learning analytics platform",
      image: "photo-1531297484001-80022131f5a1",
      stats: { stars: 8, views: 1, likes: 4 },
      tech: ["Python", "TensorFlow", "React"]
    },
    {
      title: "Mobile App",
      description: "Cross-platform social media application",
      image: "photo-1487058792275-0ad4aaf24ca7",
      stats: { stars: 8, views: 9, likes: 6 },
      tech: ["React Native", "Firebase", "Redux"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16 animate-fade-in-up">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Work</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2 text-white/50">
            <span>03</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in-up" 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="aspect-video bg-gray-700 rounded-xl overflow-hidden mb-6 relative">
                  <img 
                    src={`https://images.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 rounded-md text-white/70 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-white/60 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 hover:text-yellow-400 transition-colors duration-300">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors duration-300">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{project.stats.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-red-400 transition-colors duration-300">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{project.stats.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
