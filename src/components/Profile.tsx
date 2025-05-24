
const Profile = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                My Journey
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed">
              With 3 years of coding experience and currently a incoming 4th-year student, 
              I specialize in full-stack development, machine learning, and database management.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-white/70 text-sm">Years Coding</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-purple-400 mb-2">14+</div>
                <div className="text-white/70 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-white/70 text-sm">Dedication</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1 animate-glow">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                  <img 
                    src="/images/Rich.png"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-float">
                <span className="text-white text-sm font-bold">ML</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <span className="text-white text-sm font-bold">FS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
