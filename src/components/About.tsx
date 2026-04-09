import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-marble-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">About The Monument</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-royal-green mb-6 leading-tight">
              A Tribute to an Empress
            </h3>
            <div className="w-16 h-1 bg-royal-gold mb-8"></div>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              The Victoria Memorial is a large marble building in Kolkata, West Bengal, India, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria, then Empress of India, and is now a museum under the auspices of the Ministry of Culture.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Lying on the Maidan (grounds) by the bank of the Hooghly River, near Jawaharlal Nehru Road, it is one of the most famous monuments in Kolkata and a symbol of its rich colonial heritage.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Victoria_Memorial_Hall%2C_Kolkata.jpg/960px-Victoria_Memorial_Hall%2C_Kolkata.jpg" 
                alt="Victoria Memorial Close Up" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-royal-gold/30 -z-10 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
