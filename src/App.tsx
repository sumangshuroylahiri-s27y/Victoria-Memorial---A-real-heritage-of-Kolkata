import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Architecture from './components/Architecture';
import Gallery from './components/Gallery';
import VisitorInfo from './components/VisitorInfo';
import Location from './components/Location';
import Nearby from './components/Nearby';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Architecture />
        <Gallery />
        <VisitorInfo />
        <Location />
        <Nearby />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
