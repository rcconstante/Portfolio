
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'fade-in 2s ease-out'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed">
              Passionate about creating digital experiences that matter. 
              I blend technical expertise with creative vision to build 
              solutions that not only work flawlessly but also inspire and delight users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
