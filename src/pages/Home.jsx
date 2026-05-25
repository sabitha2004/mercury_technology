import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HomeSection";
import ServiceSection from "../components/ServiceSection";
import SolutionsSection from "../components/SolutionSection";

function Home() {
  return (
    <>
      <CustomNavbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />

    </>
  );
}

export default Home;