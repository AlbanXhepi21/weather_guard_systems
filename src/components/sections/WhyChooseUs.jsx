import { Award, Shield, Wrench, HeartHandshake } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    icon: Award,
    title: 'Expert Installation',
    description: 'Certified professionals with years of experience delivering precision installations.',
  },
  {
    icon: Shield,
    title: 'Quality Products',
    description: 'Premium materials and systems built to last and withstand the elements.',
  },
  {
    icon: Wrench,
    title: 'Full Service',
    description: 'From installation to ongoing maintenance, we handle everything for you.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description: 'Dedicated support and a satisfaction guarantee on every project.',
  },
];

const WhyChooseUs = ({ background = 'soft' }) => {
  return (
    <section className={`section-padding ${background === 'soft' ? 'bg-wg-bg' : 'bg-white'}`}>
      <Container>
        <SectionHeading
          title="Why Choose Us"
          subtitle="Trust Weather Guard Systems for all your protection and outdoor living needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm mx-auto mb-4 
                              flex items-center justify-center group-hover:shadow-md 
                              transition-shadow duration-300">
                  <IconComponent className="w-8 h-8 text-wg-primary" />
                </div>
                <h3 className="text-lg font-semibold text-wg-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-wg-navy/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
