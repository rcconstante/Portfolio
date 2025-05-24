
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

const ContactMe = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16 animate-fade-in-up">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2 text-white/50">
            <span>06</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <div className="relative group">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Contact"
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating contact info */}
              <div className="absolute -bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-sm">Available for opportunities</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2 animate-fade-in-right">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to build
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  something amazing?
                </span>
              </h3>
              
              <p className="text-white/70 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with 
                talented individuals. Whether it's a startup idea, enterprise solution, 
                or open-source contribution, let's create something extraordinary together.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@yourportfolio.dev", href: "mailto:hello@yourportfolio.dev" },
                { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: MapPin, text: "Available Worldwide", href: "#" }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 text-white/70 hover:text-white transition-all duration-300 group p-3 rounded-lg hover:bg-white/5"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{contact.text}</span>
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Send className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="pt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <p className="text-white/60 text-sm mb-4">Trusted by startups and enterprises</p>
              <div className="flex space-x-6 opacity-60">
                {['Microsoft', 'Google', 'Apple', 'Meta'].map((company, index) => (
                  <span key={index} className="text-white/40 text-sm font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
