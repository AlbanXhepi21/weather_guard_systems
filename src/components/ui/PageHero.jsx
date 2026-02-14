import Container from './Container';

const PageHero = ({ 
  title, 
  subtitle, 
  backgroundImage,
  children 
}) => {
  return (
    <section className="relative bg-gradient-soft py-10 sm:py-12 md:py-16 lg:py-24">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-wg-navy mb-3 md:mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-wg-navy/70 animate-slide-up leading-snug">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
