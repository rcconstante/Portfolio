
import { Code, Database, Palette, Settings, FileText } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "CONCEPTS",
      description: "Exit Sercyss Engine",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Database,
      title: "DATABASE",
      description: "Data tuuring conception",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Palette,
      title: "ÉTUDE ÉTUDES",
      description: "Moste sam opoticte",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "PRODIGE...",
      description: "Expert visueltment ra",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: FileText,
      title: "RACHIS",
      description: "Your développerte Aligny",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Skills</h2>
          <div className="flex items-center space-x-2 text-white/50">
            <span>05</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{skill.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
