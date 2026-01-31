import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Home, Maximize2, Umbrella, Wrench, Calendar } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { services } from '../../data/services';

const iconMap = {
  Shield,
  Home,
  Maximize2,
  Umbrella,
  Wrench,
  Calendar
};

const ServicesGrid = ({ showAll = false, background = 'white' }) => {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className={`section-padding ${background === 'soft' ? 'bg-wg-bg' : 'bg-white'}`}>
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions for storm protection and outdoor living enhancement"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-wg-bg flex items-center justify-center mb-4 
                              group-hover:bg-wg-primary transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-wg-primary group-hover:text-white transition-colors duration-300" />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-wg-navy mb-2">
                  {service.name}
                </h3>

                <p className="text-wg-navy/70 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-wg-primary font-medium 
                           hover:text-wg-dark transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </Card>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ServicesGrid;
