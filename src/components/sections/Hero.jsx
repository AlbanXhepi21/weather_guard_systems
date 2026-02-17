import { useState, useEffect, useCallback } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const HERO_SLIDES = [
  '/images/home-4k.jpg',
  '/images/pergola/pergola1.jpg',
  '/images/storm/storm1.jpg',
  '/images/guillotine/guillotine1.jpg',
  '/images/awm/awm1.jpg',
  '/images/pergola/pergola6.webp',
];

const SLIDE_DURATION_MS = 5000;

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goNext = useCallback(() => {
    setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
  }, []);
  const goPrev = useCallback(() => {
    setSlideIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(goNext, SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, [goNext]);

  const minSwipeDistance = 50;
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    const dist = touchStart - touchEnd;
    if (Math.abs(dist) > minSwipeDistance) {
      if (dist > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <>
      {/* Mobile: swipeable photo carousel as background */}
      <section
        className="relative lg:hidden min-h-[85vh] flex flex-col justify-end overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === slideIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={i !== slideIndex}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-wg-navy/95 via-wg-navy/60 to-wg-navy/20 z-[1]" />
        {/* Tap zones (left/right edges) for slide navigation — stops above the title block */}
        {HERO_SLIDES.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-0 bottom-64 w-16 z-20 bg-transparent"
              aria-label="Previous photo"
            />
            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-0 bottom-64 w-16 z-20 bg-transparent"
              aria-label="Next photo"
            />
          </>
        )}
        {/* Slide indicator: top-right so it doesn't overlap titles */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5" aria-label="Slide indicator">
          {HERO_SLIDES.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-300 ${
                i === slideIndex
                  ? 'w-2.5 h-2.5 bg-white shadow-sm'
                  : 'w-2 h-2 bg-white/50'
              }`}
              aria-hidden
            />
          ))}
        </div>
        <Container className="relative z-10 py-10 pb-14 pt-24">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm mb-4 border border-white/30">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-xs font-medium text-white">
                Professional Installation Services
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Protect Your Space.{' '}
              <span className="text-wg-light">Enhance Your Living.</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 mb-5 max-w-xl leading-snug">
              Storm shutters, pergolas, guillotine windows, and awnings. Installation, service, and maintenance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" className="group">
                Get a Free Quote
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button to="/services" variant="white">
                Explore Services
              </Button>
            </div>
            <div className="flex gap-6 mt-6 pt-5 border-t border-white/30">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-white/80">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/80">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/80">Satisfaction</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Desktop: side-by-side with swipeable image carousel */}
      <section className="relative hidden lg:flex bg-gradient-soft min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-wg-primary blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-wg-light blur-3xl" />
        </div>
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
                <Shield className="w-5 h-5 text-wg-primary" />
                <span className="text-sm font-medium text-wg-navy">
                  Professional Installation Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wg-navy mb-6 leading-tight">
                Protect Your Space.{' '}
                <span className="text-gradient">Enhance Your Living.</span>
              </h1>
              <p className="text-lg md:text-xl text-wg-navy/70 mb-8 max-w-xl leading-snug">
                Professional installation of storm shutters, pergolas, guillotine windows, 
                and awnings. Complete service and maintenance solutions for your property.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" className="group">
                  Get a Free Quote
                  <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button to="/services" variant="secondary">
                  Explore Services
                </Button>
              </div>
              <div className="flex gap-8 mt-12 pt-8 border-t border-wg-border/50">
                <div>
                  <div className="text-3xl font-bold text-wg-dark">500+</div>
                  <div className="text-sm text-wg-navy/60">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wg-dark">10+</div>
                  <div className="text-sm text-wg-navy/60">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wg-dark">100%</div>
                  <div className="text-sm text-wg-navy/60">Satisfaction</div>
                </div>
              </div>
            </div>
            <div
              className="relative animate-slide-up"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                {HERO_SLIDES.map((src, i) => (
                  <div
                    key={src}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                      i === slideIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-wg-navy/30 to-transparent pointer-events-none" />
                {/* Tap zones (left/right edges) for slide navigation */}
                {HERO_SLIDES.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-0 inset-y-0 w-14 z-20 bg-transparent"
                      aria-label="Previous photo"
                    />
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-0 inset-y-0 w-14 z-20 bg-transparent"
                      aria-label="Next photo"
                    />
                  </>
                )}
                {/* Slide indicator: bottom-right of image, clear of titles */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5" aria-label="Slide indicator">
                  {HERO_SLIDES.map((_, i) => (
                    <span
                      key={i}
                      className={`block rounded-full transition-all duration-300 ${
                        i === slideIndex
                          ? 'w-2.5 h-2.5 bg-white shadow-md'
                          : 'w-2 h-2 bg-white/60'
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl max-w-xs z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-wg-bg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-wg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-wg-navy">Certified Protection</div>
                    <div className="text-sm text-wg-navy/60">Hurricane-rated systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
