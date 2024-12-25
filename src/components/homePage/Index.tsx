import ClientReview from './ClientReview';
import ContactUs from './ContactUs';
import Faqs from './Faqs';
import HeroSection from './HeroSection';
import HowWeWork from './HowWeWork';
import Industries from './Industries';
import OurExpertise from './OurExpertise';
import Project from './Project';
import Resources from './Resources';
import TechnologyWeWork from './TechnologyWeWork';
import WhyOptimityLogics from './WhyOptimityLogics';

const Index = () => {
  return (
    <>
      <HeroSection />
      <WhyOptimityLogics />
      <Project />
      <OurExpertise />
      <TechnologyWeWork />
      <Industries />
      <HowWeWork />
      <Resources />
      <ClientReview />
      <ContactUs />
      <Faqs />
    </>
  );
};

export default Index;
