import { Award, ShieldCheck, BadgeCheck } from 'lucide-react';

const certificationDetails = {
  ISO: { name: 'ISO 9001', description: 'Quality Management', icon: ShieldCheck },
  CE: { name: 'CE Marking', description: 'European Conformity', icon: BadgeCheck },
  Qualicoat: { name: 'Qualicoat', description: 'Coating Quality', icon: Award },
  Qualanod: { name: 'Qualanod', description: 'Anodizing Quality', icon: Award },
  TSE: { name: 'TSE', description: 'Turkish Standards', icon: ShieldCheck },
};

const Certifications = ({ certifications, title = "Certifications & Standards" }) => {
  return (
    <div className="bg-wg-bg rounded-xl p-6">
      <h3 className="text-lg font-semibold text-wg-navy mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {certifications.map((cert, index) => {
          const details = certificationDetails[cert] || { 
            name: cert, 
            description: '', 
            icon: Award 
          };
          const IconComponent = details.icon;
          
          return (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-wg-border
                       hover:border-wg-primary/30 transition-colors duration-200"
            >
              <IconComponent className="w-5 h-5 text-wg-primary" />
              <div>
                <span className="font-medium text-wg-navy text-sm">{details.name}</span>
                {details.description && (
                  <span className="text-xs text-wg-navy/60 block">{details.description}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
