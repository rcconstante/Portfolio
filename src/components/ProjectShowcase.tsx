
import { Button } from '@/components/ui/button';

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Siglar Eng Arie
              <br />
              Prrantsrr Pt
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Expose our taint trog gantde teg les arroft d gares gen" est hyperimg 
              and frieses andre I van gsam farfer liceer bolel that tim viis thet trees.
              Georg rey partentationd ther arrcosed giffeel liranet.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full">
                Fontlize zoert
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full">
                Contact
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/3] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Project showcase"
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

export default ProjectShowcase;
