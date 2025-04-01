import NavBar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <AboutSection></AboutSection>
        <ServiceSection />
        <PricingSection />
        <ContactSection />
      </div>

      <FooterSection></FooterSection>
          
    </>
  );
}

export default App;
