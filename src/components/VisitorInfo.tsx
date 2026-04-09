import { motion } from 'motion/react';
import { Clock, Ticket, AlertCircle, Calendar } from 'lucide-react';

export default function VisitorInfo() {
  return (
    <section id="visit" className="py-24 bg-marble-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">Plan Your Visit</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-royal-green mb-6">Visitor Information</h3>
          <div className="w-16 h-1 bg-royal-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Timings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Clock className="text-royal-gold mr-4" size={28} />
              <h4 className="text-2xl font-serif text-royal-green">Opening Hours</h4>
            </div>
            <div className="space-y-4 text-text-muted">
              <div>
                <strong className="block text-text-dark">Museum Gallery:</strong>
                <p>10:00 AM – 6:00 PM</p>
                <p className="text-sm italic">(Closed on Mondays and National Holidays)</p>
              </div>
              <div>
                <strong className="block text-text-dark">Gardens:</strong>
                <p>5:30 AM – 6:00 PM</p>
                <p className="text-sm italic">(Open all days)</p>
              </div>
            </div>
          </motion.div>

          {/* Tickets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Ticket className="text-royal-gold mr-4" size={28} />
              <h4 className="text-2xl font-serif text-royal-green">Ticket Prices</h4>
            </div>
            <div className="space-y-4 text-text-muted">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Indian Nationals</span>
                <strong className="text-text-dark">₹30</strong>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Foreign Nationals</span>
                <strong className="text-text-dark">₹500</strong>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>SAARC Nationals</span>
                <strong className="text-text-dark">₹100</strong>
              </div>
              <div className="flex justify-between pb-2">
                <span>School Children (in uniform)</span>
                <strong className="text-text-dark">Free</strong>
              </div>
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 lg:col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-6">
              <AlertCircle className="text-royal-gold mr-4" size={28} />
              <h4 className="text-2xl font-serif text-royal-green">Entry Rules</h4>
            </div>
            <ul className="space-y-3 text-text-muted list-disc list-inside">
              <li>Photography is strictly prohibited inside the museum galleries.</li>
              <li>Food and beverages are not allowed inside the building.</li>
              <li>Please maintain silence and decorum.</li>
              <li>Do not touch the artifacts or paintings.</li>
              <li>Large bags and luggage must be deposited at the cloakroom.</li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-start">
              <Calendar className="text-royal-gold mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-sm text-text-muted">
                <strong className="text-text-dark">Best Time to Visit:</strong> October to March, when the weather in Kolkata is pleasant and cool.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
