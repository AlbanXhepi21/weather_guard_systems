import Container from '../components/ui/Container';
import ServicesGrid from '../components/sections/ServicesGrid';
import CTABanner from '../components/sections/CTABanner';

const Services = () => {
  return (
    <>
      {/* Compact Services intro – less whitespace, clear structure */}
      <section className="bg-white border-b border-wg-border/40">
        <Container className="py-6 sm:py-8 md:py-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wg-navy mb-2 md:mb-4">
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-wg-navy/80 leading-snug">
              Professional installation, repair, and maintenance for storm protection and outdoor living. 
              We deliver tailored solutions so your property stays protected and your spaces work year‑round.
            </p>
          </div>
        </Container>
      </section>

      <ServicesGrid showAll background="white" useImageCards />
      
      <CTABanner
        title="Need help choosing the right service?"
        subtitle="Our experts are here to guide you through the options and find the perfect solution."
        buttonText="Get Expert Advice"
      />
    </>
  );
};

export default Services;
