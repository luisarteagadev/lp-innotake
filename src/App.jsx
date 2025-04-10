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
      <section className="parallaxBanner">
        <div className="max-w-7xl mx-auto px-6 content">
          <HeroSection />
        </div>
      </section>
      <section>
      <div className="max-w-7xl mx-auto px-6">
        <AboutSection></AboutSection>
        </div>
      </section>
      <section className="parallaxServices">
        <div className="max-w-7xl mx-auto px-6 content">
          <ServiceSection />
        </div>
      </section>
      <section>
      <div className="max-w-7xl mx-auto px-6">
        <PricingSection />
        </div>
      </section>
      <section className="parallaxContact">
        <div className="max-w-7xl mx-auto px-6 content">
        <ContactSection />
        </div>
      </section>
      {/*</div>*/}

      <FooterSection></FooterSection>
          
    </>
  );
}

export default App;
