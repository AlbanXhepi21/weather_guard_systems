import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Shield, Home, Maximize2, Umbrella, Wrench, Calendar } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import CatalogDownload from '../components/ui/CatalogDownload';
import TechnicalSpecs from '../components/ui/TechnicalSpecs';
import SystemVariants from '../components/ui/SystemVariants';
import Certifications from '../components/ui/Certifications';
import TechnicalHighlights from '../components/ui/TechnicalHighlights';
import ServiceProcess from '../components/sections/ServiceProcess';
import CTABanner from '../components/sections/CTABanner';
import { getServiceById, getRelatedServices } from '../data/services';

const serviceIconMap = {
  Shield,
  Home,
  Maximize2,
  Umbrella,
  Wrench,
  Calendar
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = getServiceById(serviceId);
  const relatedServices = getRelatedServices(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = serviceIconMap[service.icon];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-soft py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                {ServiceIcon && <ServiceIcon className="w-5 h-5 text-wg-primary" />}
                <span className="text-sm font-medium text-wg-navy">Service</span>
              </div>
              {service.manufacturer && (
                <div className="inline-flex items-center gap-2 bg-wg-primary/10 rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-wg-dark">By {service.manufacturer}</span>
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-wg-navy mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-wg-navy/70">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Service Description */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-wg-navy mb-6">Overview</h2>
              {service.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-wg-navy/70 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 mt-4"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={serviceId === 'pergolas' ? '/images/pergola/pergola6.webp' : serviceId === 'guillotine-windows' ? '/images/guillotine/guillotine6.jpg' : serviceId === 'awnings' ? '/images/awm/awm6.jpg' : serviceId === 'repairs' ? '/images/repair/repare3.webp' : serviceId === 'maintenance' ? '/images/aws-m.jpg' : service.heroImage}
                  alt={service.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              
              {/* Technical Highlights */}
              {service.technicalHighlights && (
                <TechnicalHighlights highlights={service.technicalHighlights} />
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* System Variants (for Bioclimatic Pergolas) */}
      {service.systemVariants && (
        <section className="section-padding bg-wg-bg">
          <Container>
            <SectionHeading
              title="Choose Your System"
              subtitle="Four premium system variants to match your needs"
            />
            <SystemVariants variants={service.systemVariants} title="" />
          </Container>
        </section>
      )}

      {/* Technical Specifications */}
      {service.specifications && (
        <section className={`section-padding ${service.systemVariants ? 'bg-white' : 'bg-wg-bg'}`}>
          <Container>
            <div className="grid lg:grid-cols-2 gap-8">
              <TechnicalSpecs specs={service.specifications} />
              
              {/* Catalog Download */}
              {service.hasCatalog && (
                <div className="flex flex-col justify-center">
                  <SectionHeading
                    title="Product Catalog"
                    subtitle="Download complete technical documentation"
                    centered={false}
                    className="mb-6"
                  />
                  <CatalogDownload 
                    catalogUrl={service.catalogUrl}
                    catalogName={service.catalogName}
                    manufacturer={service.manufacturer}
                  />
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Catalog Download (standalone if no specs) */}
      {service.hasCatalog && !service.specifications && (
        <section className="section-padding bg-wg-bg">
          <Container>
            <SectionHeading
              title="Product Catalog"
              subtitle="Download complete technical specifications"
            />
            <div className="max-w-2xl mx-auto">
              <CatalogDownload 
                catalogUrl={service.catalogUrl}
                catalogName={service.catalogName}
                manufacturer={service.manufacturer}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Features */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Key Features & Benefits"
            subtitle="Why choose our services"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-wg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="w-7 h-7 text-wg-primary" />
                </div>
                <h3 className="text-lg font-semibold text-wg-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-wg-navy/70 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      {service.certifications && (
        <section className="py-12 bg-wg-bg">
          <Container>
            <Certifications certifications={service.certifications} />
          </Container>
        </section>
      )}

      {/* Process */}
      <ServiceProcess process={service.process} />

      {/* Gallery */}
      <section className="section-padding bg-wg-bg">
        <Container>
          <SectionHeading
            title="Project Gallery"
            subtitle="See our work in action"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceId === 'storm-shutters' ? (
              [
                { src: '/images/storm/stormwgs1.png', title: 'Storm Shutters Installation project 1' },
                { src: '/images/storm/storm1.jpg', title: 'Storm Shutters Installation project 2' },
                { src: '/images/storm/storm2.jpg', title: 'Storm Shutters Installation project 3' },
                { src: '/images/storm/storm3.jpg', title: 'Storm Shutters Installation project 4' },
                { src: '/images/storm/storm4.jpg', title: 'Storm Shutters Installation project 5' },
                { src: '/images/storm/storm5.webp', title: 'Storm Shutters Installation project 6' },
              ].map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : serviceId === 'pergolas' ? (
              [
                '/images/pergola/pergola1.jpg',
                '/images/pergola/pergola2.jpg',
                '/images/pergola/pergola3.jpg',
                '/images/pergola/pergola4.jpg',
                '/images/pergola/pergola5.webp',
                '/images/pergola/pergola6.webp',
              ].map((src, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`${service.name} project ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : serviceId === 'guillotine-windows' ? (
              [
                '/images/guillotine/guillotine1.jpg',
                '/images/guillotine/guillotine2.webp',
                '/images/guillotine/guillotine3.jpg',
                '/images/guillotine/guillotine4.jpg',
                '/images/guillotine/guillotine5.webp',
                '/images/guillotine/guillotine6.jpg',
              ].map((src, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`${service.name} project ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : serviceId === 'awnings' ? (
              [
                '/images/awm/awm1.jpg',
                '/images/awm/awm2.jpg',
                '/images/awm/awm3.jpg',
                '/images/awm/awm4.jpg',
                '/images/awm/awm5.jpg',
                '/images/awm/awm6.jpg',
              ].map((src, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`${service.name} project ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : (serviceId === 'repairs' || serviceId === 'maintenance') ? (
              [
                '/images/repair/repare1.webp',
                '/images/repair/repare2.jpg',
                '/images/repair/repare3.webp',
                '/images/repair/repare4.webp',
                '/images/repair/repare5.jpg',
                '/images/repair/repare6.webp',
              ].map((src, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`${service.name} project ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : (
              [1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={`https://picsum.photos/600/400?random=${serviceId}${num}`}
                    alt={`${service.name} project ${num}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            )}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Related Services"
            subtitle="Explore more of what we offer"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => {
              const RelatedIcon = serviceIconMap[relatedService.icon];
              return (
                <Card key={relatedService.id} className="group">
                  <div className="w-12 h-12 rounded-xl bg-wg-bg flex items-center justify-center mb-4 
                                group-hover:bg-wg-primary transition-colors duration-300">
                    {RelatedIcon && (
                      <RelatedIcon className="w-6 h-6 text-wg-primary group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-wg-navy mb-2">
                    {relatedService.name}
                  </h3>
                  <p className="text-wg-navy/70 text-sm mb-4">
                    {relatedService.shortDescription}
                  </p>
                  <Link
                    to={`/services/${relatedService.id}`}
                    className="inline-flex items-center gap-2 text-wg-primary font-medium text-sm
                             hover:text-wg-dark transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner
        title={`Ready to get started with ${service.name}?`}
        subtitle="Contact us today for a free consultation and quote."
      />
    </>
  );
};

export default ServiceDetail;
