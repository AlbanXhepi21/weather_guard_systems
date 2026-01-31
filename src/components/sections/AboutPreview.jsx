import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const features = [
  'Over 10 years of industry experience',
  'Certified and insured professionals',
  'Premium quality materials and systems',
  'Comprehensive warranty coverage',
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Professional installation team"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-wg-primary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-wg-navy mb-4">
              About Weather Guard Systems
            </h2>

            <p className="text-wg-navy/70 mb-6 leading-relaxed">
              Weather Guard Systems is your trusted partner for storm protection and outdoor 
              living solutions. We combine expert craftsmanship with premium materials to 
              deliver installations that protect your property and enhance your lifestyle.
            </p>

            <p className="text-wg-navy/70 mb-6 leading-relaxed">
              Our commitment to quality and customer satisfaction has made us a leader in 
              the industry, serving residential and commercial clients with the same 
              dedication to excellence.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-wg-primary flex-shrink-0" />
                  <span className="text-wg-navy">{feature}</span>
                </li>
              ))}
            </ul>

            <Button to="/about" variant="secondary" className="group">
              Learn More About Us
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
