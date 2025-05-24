
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactMe = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Contact Me</h2>
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
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Let's Work
              <br />
              Together
            </h3>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Ready to bring your ideas to life? I'm available for freelance projects, 
              collaborations, and full-time opportunities. Let's discuss how we can 
              create something amazing together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>Available Worldwide</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full">
                Get In Touch
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
