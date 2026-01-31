import { Award, Building2 } from 'lucide-react';
import Container from '../ui/Container';

const ManufacturerBanner = () => {
  return (
    <section className="py-8 bg-wg-navy/5 border-y border-wg-border/50">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-wg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-wg-primary" />
            </div>
            <div>
              <p className="text-sm text-wg-navy/60">Official Partner of</p>
              <p className="font-semibold text-wg-navy">Kenan Metal / Artminyum</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-wg-border" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {['ISO', 'CE', 'Qualicoat', 'Qualanod', 'TSE'].map((cert) => (
              <span 
                key={cert}
                className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full 
                         text-xs font-medium text-wg-navy border border-wg-border"
              >
                <Award className="w-3 h-3 text-wg-primary" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManufacturerBanner;
