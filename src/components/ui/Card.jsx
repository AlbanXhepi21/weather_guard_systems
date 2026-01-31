const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div 
      className={`card p-6 ${hover ? 'hover:-translate-y-1' : ''} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
