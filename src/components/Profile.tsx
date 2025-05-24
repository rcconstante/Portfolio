
const Profile = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium">
              With 3 years of coding experience and currently a 3rd-year student, I specialize in full-stack development, machine learning, and database management.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
