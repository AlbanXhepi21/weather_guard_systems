import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AboutPreview from '../components/sections/AboutPreview';
import ManufacturerBanner from '../components/sections/ManufacturerBanner';
import CTABanner from '../components/sections/CTABanner';

const Home = () => {
  return (
    <>
      <Hero />
      <ManufacturerBanner />
      <ServicesGrid background="white" />
      <WhyChooseUs background="soft" />
      <AboutPreview />
      <CTABanner />
    </>
  );
};

export default Home;
