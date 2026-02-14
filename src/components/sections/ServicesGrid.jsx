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

const ServicesGrid = ({ showAll = false, background = 'white', useImageCards = false }) => {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className={`${useImageCards ? 'py-8 md:py-12' : 'section-padding'} ${background === 'soft' ? 'bg-wg-bg' : 'bg-white'}`}>
      <Container>
        {!useImageCards && (
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive solutions for storm protection and outdoor living enhancement"
          />
        )}

        <div className={`grid gap-4 sm:gap-5 md:gap-6 ${useImageCards ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayServices.map((service, index) => {
            if (useImageCards && service.heroImage) {
              return (
                <Link
                  key={service.id}
                  to={`/products/${service.id}`}
                  className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wg-primary focus:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] min-h-[220px] sm:min-h-[260px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wg-navy/90 via-wg-navy/40 to-transparent transition-opacity duration-300 group-hover:from-wg-navy/95" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 line-clamp-2 drop-shadow-sm">
                        {service.name}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-snug line-clamp-2 mb-3">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        Learn more
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }

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
                  to={`/products/${service.id}`}
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
