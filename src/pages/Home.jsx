import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
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
      <section className="bg-white">
        <Container className="pt-8 md:pt-12">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive solutions for storm protection and outdoor living enhancement"
          />
        </Container>
        <ServicesGrid background="white" useImageCards />
      </section>
      <WhyChooseUs background="soft" />
      <AboutPreview />
      <CTABanner />
    </>
  );
};

export default Home;
