
const Vision = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-5xl text-center space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                I pair strong{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  visual design
                </span>{' '}
                skills with a focus on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                  user-centered design
                </span>
                .
              </h2>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-scale-in" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
