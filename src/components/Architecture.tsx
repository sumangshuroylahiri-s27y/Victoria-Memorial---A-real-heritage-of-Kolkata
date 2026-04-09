import { motion } from 'motion/react';
import { Building2, Trees, Crown, Palette } from 'lucide-react';

const features = [
  {
    icon: <Building2 size={32} />,
    title: 'Indo-Saracenic Revival',
    description: 'The design is in the Indo-Saracenic revivalist style which uses a mixture of British and Mughal elements with Venetian, Egyptian, Deccani and Islamic architectural influences.'
  },
  {
    icon: <Palette size={32} />,
    title: 'Makrana Marble',
    description: 'Like the Taj Mahal, the Victoria Memorial is built of white Makrana marble, giving it a luminous, ethereal quality that changes color with the light of day.'
  },
  {
    icon: <Crown size={32} />,
    title: 'Angel of Victory',
    description: 'Atop the central dome stands the 16 ft (4.9 m) figure of the Angel of Victory. Mounted on large ball bearings, the figure rotates with the wind.'
  },
  {
    icon: <Trees size={32} />,
    title: 'Lush Gardens',
    description: 'The gardens at the Victoria Memorial cover 64 acres (260,000 m2) and are maintained by a team of 21 gardeners. They were designed by Redesdale and David Prain.'
  }
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-royal-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">Design</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Architectural Grandeur</h3>
          <div className="w-16 h-1 bg-royal-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-royal-green-dark p-8 rounded-sm border border-white/10 hover:border-royal-gold/50 transition-colors duration-300"
            >
              <div className="text-royal-gold mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif mb-4">{feature.title}</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
