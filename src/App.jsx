import { useState, useEffect } from "react";
import { COLORS } from "./constants";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: COLORS.charcoal, color: COLORS.ivory, overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

      <Nav scrolled={scrolled} />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Gallery />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
