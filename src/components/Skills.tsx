
import { Code, Database, Palette, Settings, FileText, Brain } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "FRONTEND",
      description: "React, TypeScript, Tailwind",
      color: "from-green-500 to-emerald-600",
      level: 90
    },
    {
      icon: Database,
      title: "BACKEND",
      description: "Node.js, Python, PostgreSQL",
      color: "from-blue-500 to-cyan-600",
      level: 85
    },
    {
      icon: Brain,
      title: "MACHINE LEARNING",
      description: "TensorFlow, PyTorch, AI",
      color: "from-purple-500 to-indigo-600",
      level: 80
    },
    {
      icon: Settings,
      title: "DEVOPS",
      description: "Docker, AWS, CI/CD",
      color: "from-yellow-500 to-orange-600",
      level: 75
    },
    {
      icon: Palette,
      title: "DESIGN",
      description: "UI/UX, Figma, Creative",
      color: "from-pink-500 to-rose-600",
      level: 85
    },
    {
      icon: FileText,
      title: "DOCUMENTATION",
      description: "Technical Writing, APIs",
      color: "from-indigo-500 to-purple-600",
      level: 90
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16 animate-fade-in-up">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2 text-white/50">
            <span>05</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="space-y-4">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg animate-glow`}>
                    <skill.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>
                  
                  {/* Skill level bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${0.5 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
