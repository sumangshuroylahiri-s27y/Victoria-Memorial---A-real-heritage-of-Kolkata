import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-royal-green-dark text-white pt-16 pb-8 border-t-4 border-royal-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About */}
          <div>
            <h4 className="font-serif text-2xl font-bold tracking-wider text-royal-gold mb-6">VICTORIA MEMORIAL</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A majestic symbol of Kolkata's rich colonial heritage, standing as a testament to architectural brilliance and historical legacy. Dedicated to preserving the art and history of India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#about" className="hover:text-royal-gold transition-colors">About the Monument</a></li>
              <li><a href="#history" className="hover:text-royal-gold transition-colors">Historical Timeline</a></li>
              <li><a href="#architecture" className="hover:text-royal-gold transition-colors">Architecture & Design</a></li>
              <li><a href="#gallery" className="hover:text-royal-gold transition-colors">Image Gallery</a></li>
              <li><a href="#visit" className="hover:text-royal-gold transition-colors">Visitor Information</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Victoria Memorial Hall</li>
              <li>1, Queen's Way, Maidan</li>
              <li>Kolkata, West Bengal 700071</li>
              <li className="pt-2">Phone: +91 33 2223 1890</li>
              <li>Email: victormemorial@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Victoria Memorial Hall. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Heritage & Tourism</p>
        </div>
      </div>
    </footer>
  );
}
