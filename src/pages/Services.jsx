import PageHero from '../components/ui/PageHero';
import ServicesGrid from '../components/sections/ServicesGrid';
import CTABanner from '../components/sections/CTABanner';

const Services = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive storm protection and outdoor living solutions tailored to your needs."
      />
      
      <ServicesGrid showAll background="white" />
      
      <CTABanner
        title="Need help choosing the right service?"
        subtitle="Our experts are here to guide you through the options and find the perfect solution."
        buttonText="Get Expert Advice"
      />
    </>
  );
};

export default Services;
