import { motion } from 'motion/react';

const timelineEvents = [
  {
    year: '1901',
    title: 'Conception',
    description: 'Following the death of Queen Victoria in January 1901, Lord Curzon, the Viceroy of India, suggested the creation of a fitting memorial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Statue_of_Lord_Curzon_at_Victoria_Memorial%2C_Kolkata.jpg/960px-Statue_of_Lord_Curzon_at_Victoria_Memorial%2C_Kolkata.jpg'
  },
  {
    year: '1906',
    title: 'Foundation Stone',
    description: 'The foundation stone was laid by the Prince of Wales (later King George V) on 4 January 1906.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Foundation_Stone_-_Victoria_Memorial_Hall_-_Kolkata_2023-05-26_7350.jpg/960px-Foundation_Stone_-_Victoria_Memorial_Hall_-_Kolkata_2023-05-26_7350.jpg'
  },
  {
    year: '1921',
    title: 'Opening to Public',
    description: 'The memorial was formally opened to the public in 1921. It was designed by Sir William Emerson, President of the Royal Institute of British Architects.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Victoria_Memorial_Kolkata.jpg/960px-Victoria_Memorial_Kolkata.jpg'
  },
  {
    year: 'Present',
    title: 'Cultural Hub',
    description: 'Today, it serves as a premier museum and a major tourist attraction, housing a vast collection of paintings, sculptures, and historical artifacts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Victoria_Memorial_Illuminated_at_Night.jpg/960px-Victoria_Memorial_Illuminated_at_Night.jpg'
  }
];

export default function History() {
  return (
    <section id="history" className="py-24 bg-marble-grey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">Legacy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-royal-green mb-6">A Journey Through Time</h3>
          <div className="w-16 h-1 bg-royal-gold mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-royal-gold/30 hidden md:block"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 px-4 md:px-8 py-4 w-full">
                  <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-500 group overflow-hidden border-t-4 border-royal-gold relative">
                    
                    {/* Year Badge */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} bg-royal-gold text-white px-4 py-1 font-serif font-bold rounded-sm shadow-md z-10`}>
                      {event.year}
                    </div>

                    {/* Image */}
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-royal-green/20 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-8 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                      <h4 className="text-2xl font-serif text-royal-green mb-3">{event.title}</h4>
                      <p className="text-text-muted leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-royal-gold rounded-full shadow-[0_0_0_6px_rgba(245,245,245,1)] z-10 transition-transform duration-300 hover:scale-125"></div>
                
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
