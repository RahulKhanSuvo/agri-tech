import HeroBanner from "./hero-section/HeroBanner";
import ServicesOverview from "./services-section/ServicesOverview";
import StatsOverview from "./stats-section/StatsOverview";
import FAQSection from "./FAQ-section/FAQSection";
import AboutUs from "./about-us-section/AboutUs";

import PatnerSection from "./patner-section/partner-section";
import Process from "../Process/Process";

const HomePage = () => {
  return (
    <section className="relative ">
      <HeroBanner />
      <Process />
      <ServicesOverview />
      <AboutUs />
      <StatsOverview />
      <FAQSection />
      {/* <BrowseCategories />
      <BlogSection /> */}
      <PatnerSection />
    </section>
  );
};

export default HomePage;
