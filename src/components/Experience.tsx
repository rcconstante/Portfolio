
import { Button } from '@/components/ui/button';

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Experience</h2>
          <div className="flex items-center space-x-2 text-white/50">
            <span>01</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md">
              <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Experience project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Reoble and
              <br />
              Cheeks
            </h3>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Anultinn Forme Guislamcoyinkter Hennds hp heck etim Torsent 
              auovatotinti a carles and an gftweglansthe ganilsp gendeclnnat 
              evazany trsde bir sodinove.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full">
                Contact
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full">
                Galle Otrd
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
