import { FileDown, ExternalLink } from 'lucide-react';

const CatalogDownload = ({ catalogUrl, catalogName, manufacturer }) => {
  return (
    <div className="bg-wg-soft rounded-xl p-6 border border-wg-border">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="p-3 bg-wg-primary/10 rounded-lg">
          <FileDown className="w-8 h-8 text-wg-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-wg-navy text-lg">{catalogName}</h3>
          {manufacturer && (
            <p className="text-sm text-wg-navy/60 mt-1">By {manufacturer}</p>
          )}
          <p className="text-sm text-wg-navy/70 mt-2">
            Download the complete technical catalog with specifications, profiles, and accessories.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-wg-primary text-white rounded-lg 
                       hover:bg-wg-dark transition-colors duration-200"
            >
              <FileDown className="w-4 h-4" />
              Download PDF Catalog
            </a>
            <a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-wg-border text-wg-navy 
                       rounded-lg hover:bg-wg-bg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              View Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDownload;
