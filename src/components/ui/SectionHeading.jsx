const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-wg-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-wg-navy/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
