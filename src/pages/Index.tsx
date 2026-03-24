import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ParticleGrid from "@/components/portfolio/ParticleGrid";

const Index = () => {
  return (
    <div className="min-h-screen relative grid-bg scanline">
      <ParticleGrid />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
