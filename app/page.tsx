import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Academy from '../components/Academy';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Academy />
      <Gallery />
      <Features />
      <Booking />
      <Footer />
    </main>
  );
}
