import { motion } from 'motion/react';
import { MapPin, Train, Bus, Plane } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-marble-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full rounded-sm overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.638303977344!2d88.34036911535313!3d22.54480818519694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce3976226!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Victoria Memorial Location"
            ></iframe>
          </motion.div>

          {/* Transport Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">Getting There</h2>
            <h3 className="text-4xl font-serif text-royal-green mb-8">Location & Transport</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-marble-grey p-3 rounded-full mr-4 text-royal-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark mb-1">Address</h4>
                  <p className="text-text-muted">Victoria Memorial Hall, 1, Queen's Way, Maidan, Kolkata, West Bengal 700071, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-marble-grey p-3 rounded-full mr-4 text-royal-green">
                  <Train size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark mb-1">By Metro / Train</h4>
                  <p className="text-text-muted">Nearest Metro: <strong className="text-text-dark">Maidan Metro Station</strong> (10 mins walk)</p>
                  <p className="text-text-muted">Nearest Railway: <strong className="text-text-dark">Howrah / Sealdah Station</strong></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-marble-grey p-3 rounded-full mr-4 text-royal-green">
                  <Bus size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark mb-1">By Road</h4>
                  <p className="text-text-muted">Easily accessible by local buses, yellow taxis, and ride-sharing apps (Uber, Ola) from anywhere in Kolkata.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-marble-grey p-3 rounded-full mr-4 text-royal-green">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-dark mb-1">By Air</h4>
                  <p className="text-text-muted">Netaji Subhas Chandra Bose International Airport (approx. 20 km away).</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
