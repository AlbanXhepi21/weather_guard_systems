const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false,
  className = '' 
}) => {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${light ? 'text-white' : 'text-wg-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl leading-snug ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-wg-navy/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
