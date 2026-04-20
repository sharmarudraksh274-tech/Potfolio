import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsMarquee from "./components/SkillsMarquee";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsMarquee />
      <WhyMe />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
