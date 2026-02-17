import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Shield, Home, Maximize2, Umbrella, Wrench, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
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

function getGalleryImages(serviceId) {
  if (serviceId === 'storm-shutters') {
    return [
      '/images/storm/stormwgs1.png',
      '/images/storm/storm1.jpg',
      '/images/storm/storm2.jpg',
      '/images/storm/storm3.jpg',
      '/images/storm/storm4.jpg',
      '/images/storm/storm5.webp',
    ];
  }
  if (serviceId === 'pergolas') {
    return ['/images/pergola/pergola1.jpg', '/images/pergola/pergola2.jpg', '/images/pergola/pergola3.jpg', '/images/pergola/pergola4.jpg', '/images/pergola/pergola5.webp', '/images/pergola/pergola6.webp'];
  }
  if (serviceId === 'guillotine-windows') {
    return ['/images/guillotine/guillotine1.jpg', '/images/guillotine/guillotine2.webp', '/images/guillotine/guillotine3.jpg', '/images/guillotine/guillotine4.jpg', '/images/guillotine/guillotine5.webp', '/images/guillotine/guillotine6.jpg'];
  }
  if (serviceId === 'awnings') {
    return ['/images/awm/awm1.jpg', '/images/awm/awm2.jpg', '/images/awm/awm3.jpg', '/images/awm/awm4.jpg', '/images/awm/awm5.jpg', '/images/awm/awm6.jpg'];
  }
  if (serviceId === 'repairs' || serviceId === 'maintenance') {
    return ['/images/repair/repare1.webp', '/images/repair/repare2.jpg', '/images/repair/repare3.webp', '/images/repair/repare4.webp', '/images/repair/repare5.jpg', '/images/repair/repare6.webp'];
  }
  return [1, 2, 3, 4, 5, 6].map((num) => `https://picsum.photos/600/400?random=${serviceId}${num}`);
}

const HERO_SLIDE_DURATION_MS = 5000;

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = getServiceById(serviceId);
  const relatedServices = getRelatedServices(serviceId);
  const galleryImages = service ? getGalleryImages(serviceId) : [];
  const heroSlides = galleryImages.slice(0, 4).filter((src) => typeof src === 'string');
  const [heroIndex, setHeroIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [galleryLightboxIndex, setGalleryLightboxIndex] = useState(null);

  const heroNext = useCallback(() => {
    setHeroIndex((i) => (i + 1) % Math.max(1, heroSlides.length));
  }, [heroSlides.length]);
  const heroPrev = useCallback(() => {
    setHeroIndex((i) => (i - 1 + heroSlides.length) % Math.max(1, heroSlides.length));
  }, [heroSlides.length]);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const t = setInterval(heroNext, HERO_SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, [heroSlides.length, heroNext]);

  useEffect(() => {
    if (galleryLightboxIndex == null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft' && galleryLightboxIndex > 0) setGalleryLightboxIndex((i) => i - 1);
      if (e.key === 'ArrowRight' && galleryLightboxIndex < galleryImages.length - 1) setGalleryLightboxIndex((i) => i + 1);
      if (e.key === 'Escape') setGalleryLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [galleryLightboxIndex, galleryImages.length]);

  const onHeroTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onHeroTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onHeroTouchEnd = () => {
    if (touchStart == null || touchEnd == null || heroSlides.length < 2) return;
    const d = touchStart - touchEnd;
    if (Math.abs(d) > 50) d > 0 ? heroNext() : heroPrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = serviceIconMap[service.icon];

  return (
    <>
      {/* Hero: sliding photo background + compact text strip (readable on mobile & desktop) */}
      <section
        className="relative min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] flex flex-col justify-end overflow-hidden"
        onTouchStart={onHeroTouchStart}
        onTouchMove={onHeroTouchMove}
        onTouchEnd={onHeroTouchEnd}
      >
        {heroSlides.length > 0 ? (
          heroSlides.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                i === heroIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
              style={{ backgroundImage: `url(${src})` }}
              aria-hidden={i !== heroIndex}
            />
          ))
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-wg-navy/95 via-wg-navy/50 to-wg-navy/30 z-[1]" />
        {/* Tap zones (left/right edges) for slide navigation — stops above the title strip */}
        {heroSlides.length > 1 && (
          <>
            <button
              type="button"
              onClick={heroPrev}
              className="absolute left-0 top-0 bottom-44 sm:bottom-48 md:bottom-52 w-16 z-20 bg-transparent"
              aria-label="Previous photo"
            />
            <button
              type="button"
              onClick={heroNext}
              className="absolute right-0 top-0 bottom-44 sm:bottom-48 md:bottom-52 w-16 z-20 bg-transparent"
              aria-label="Next photo"
            />
          </>
        )}
        {/* Slide indicator: top-right so it doesn't overlap title strip */}
        {heroSlides.length > 1 && (
          <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 flex items-center gap-1.5" aria-label="Slide indicator">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setHeroIndex(i)}
                className={`block rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-wg-navy/30 ${
                  i === heroIndex
                    ? 'w-2.5 h-2.5 bg-white shadow-sm'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === heroIndex ? 'true' : undefined}
              />
            ))}
          </div>
        )}
        <div className="relative z-10 w-full py-8 sm:py-10 md:py-12">
          <Container>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-medium">
                  {ServiceIcon && <ServiceIcon className="w-3.5 h-3.5" />}
                  Product
                </span>
                {service.manufacturer && (
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 text-white/90 text-xs font-medium">
                    By {service.manufacturer}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-sm">
                {service.name}
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-xl leading-snug drop-shadow-sm">
                {service.shortDescription}
              </p>
            </div>
          </Container>
        </div>
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
            {galleryImages.map((src, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setGalleryLightboxIndex(index)}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-left focus:outline-none focus:ring-2 focus:ring-wg-primary focus:ring-offset-2"
              >
                <img
                  src={typeof src === 'string' ? src : `https://picsum.photos/600/400?random=${serviceId}${src}`}
                  alt={`${service.name} project ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Lightbox – prev/next like Portfolio */}
      {galleryLightboxIndex != null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setGalleryLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 text-white hover:text-wg-light transition-colors p-1"
            onClick={() => setGalleryLightboxIndex(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          {galleryLightboxIndex > 0 && (
            <button
              type="button"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setGalleryLightboxIndex((i) => i - 1); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          {galleryLightboxIndex < galleryImages.length - 1 && (
            <button
              type="button"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setGalleryLightboxIndex((i) => i + 1); }}
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={typeof galleryImages[galleryLightboxIndex] === 'string'
                ? galleryImages[galleryLightboxIndex]
                : `https://picsum.photos/600/400?random=${serviceId}${galleryImages[galleryLightboxIndex]}`}
              alt={`${service.name} project ${galleryLightboxIndex + 1}`}
              className="w-full rounded-lg"
            />
            <p className="text-white/50 text-sm mt-2 text-center">
              {galleryLightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}

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
                    to={`/products/${relatedService.id}`}
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
