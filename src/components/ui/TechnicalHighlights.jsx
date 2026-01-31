import { CheckCircle } from 'lucide-react';

const TechnicalHighlights = ({ highlights, title = "Technical Highlights" }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-wg-border">
      <h3 className="text-lg font-semibold text-wg-navy mb-4">{title}</h3>
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-wg-primary flex-shrink-0 mt-0.5" />
            <span className="text-wg-navy/80">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalHighlights;
