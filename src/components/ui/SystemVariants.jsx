import { Settings } from 'lucide-react';

const SystemVariants = ({ variants, title = "System Variants" }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-wg-navy mb-6 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {variants.map((variant, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-sm border border-wg-border 
                     hover:shadow-md hover:border-wg-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-wg-primary/10 flex items-center justify-center">
                <Settings className="w-5 h-5 text-wg-primary" />
              </div>
              <span className="px-3 py-1 bg-wg-bg text-wg-dark text-sm font-medium rounded-full">
                {variant.type}
              </span>
            </div>
            <h4 className="text-xl font-semibold text-wg-navy">{variant.name}</h4>
            <p className="text-wg-navy/70 mt-2 text-sm leading-relaxed">{variant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemVariants;
