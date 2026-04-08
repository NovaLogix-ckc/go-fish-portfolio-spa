import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import WhyNow from './components/WhyNow';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Platform from './components/Platform';
import CtaBanner from './components/CtaBanner';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <WhyNow />
        <WhyUs />
        <HowItWorks />
        <Platform />
        <CtaBanner />
        <Benefits />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
