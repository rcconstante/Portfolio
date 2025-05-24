
import { Star, Eye, Heart } from 'lucide-react';

const FeaturedWork = () => {
  const projects = [
    {
      title: "Snud Remcte Press",
      image: "photo-1486312338219-ce68d2c6f44d",
      stats: { stars: 8, views: 2, likes: 5 }
    },
    {
      title: "Fret and Chewtdge",
      image: "photo-1531297484001-80022131f5a1",
      stats: { stars: 8, views: 1, likes: 4 }
    },
    {
      title: "Deastbet and Press",
      image: "photo-1487058792275-0ad4aaf24ca7",
      stats: { stars: 8, views: 9, likes: 6 }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Featured Work</h2>
          <div className="flex items-center space-x-2 text-white/50">
            <span>03</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gray-700 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={`https://images.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-white font-semibold text-lg mb-3">{project.title}</h3>
                
                <div className="flex items-center justify-between text-white/60">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{project.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{project.stats.likes}</span>
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
