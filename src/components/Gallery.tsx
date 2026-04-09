import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Victoria_Memorial_Kolkata_at_night.jpg/960px-Victoria_Memorial_Kolkata_at_night.jpg',
    alt: 'Victoria Memorial Illuminated at Night',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kolkata_Victoria_Memorial_South_side.JPG/960px-Kolkata_Victoria_Memorial_South_side.JPG',
    alt: 'Front View of Victoria Memorial',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Angel_of_Kolkata_Victoria_Memorial.jpg/960px-Angel_of_Kolkata_Victoria_Memorial.jpg',
    alt: 'Angel of Victory Statue',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Victoria_Memorial_Gardens%2C_Calcutta%2C_India.jpg/960px-Victoria_Memorial_Gardens%2C_Calcutta%2C_India.jpg',
    alt: 'Victoria Memorial Gardens',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Victoria_Memorial_Pano_5.jpg/960px-Victoria_Memorial_Pano_5.jpg',
    alt: 'Side View of the Memorial',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lakes_of_victoria.jpg/960px-Lakes_of_victoria.jpg',
    alt: 'Victoria Memorial Reflection at Night',
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-marble-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-gold font-medium tracking-widest uppercase text-sm mb-3">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-royal-green mb-6">Visual Splendor</h3>
          <div className="w-16 h-1 bg-royal-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden cursor-pointer group rounded-sm"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm border border-white px-4 py-2">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
