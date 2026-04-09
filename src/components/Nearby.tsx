import { motion } from 'motion/react';

const attractions = [
  {
    name: 'Maidan',
    distance: 'Adjacent',
    description: 'The largest urban park in Kolkata, often referred to as the "lungs of Kolkata". Perfect for a morning walk or evening stroll.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kolkata_Maidan.jpg/960px-Kolkata_Maidan.jpg'
  },
  {
    name: 'St. Paul\'s Cathedral',
    distance: '500m away',
    description: 'A magnificent Anglican cathedral noted for its Gothic architecture and beautiful stained glass windows.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/St._Paul%27s_Cathedral_in_Kolkata.jpg/960px-St._Paul%27s_Cathedral_in_Kolkata.jpg'
  },
  {
    name: 'Birla Planetarium',
    distance: '800m away',
    description: 'The oldest and largest planetarium in Asia, offering fascinating shows about astronomy and the night sky.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Birla_Planetarium%2C_Kolkata.jpg/960px-Birla_Planetarium%2C_Kolkata.jpg'
  }
];

export default function Nearby() {
  return (
    <section className="py-24 bg-marble-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">Explore More</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-royal-green mb-6">Nearby Attractions</h3>
          <div className="w-16 h-1 bg-royal-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-serif text-royal-green">{place.name}</h4>
                  <span className="text-xs font-medium bg-marble-grey text-text-muted px-2 py-1 rounded-sm">{place.distance}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {place.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
