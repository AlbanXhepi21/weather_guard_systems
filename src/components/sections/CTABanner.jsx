import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTABanner = ({ 
  title = "Ready to protect and enhance your property?",
  subtitle = "Get in touch with our team for a free consultation and quote.",
  buttonText = "Contact Us Today",
  buttonLink = "/contact"
}) => {
  return (
    <section className="bg-gradient-teal py-10 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-snug">
              {subtitle}
            </p>
          )}
          <Button to={buttonLink} variant="white" className="group">
            {buttonText}
            <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;
