import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-soft">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          {/* 404 Graphic */}
          <div className="relative mb-8">
            <div className="text-[150px] md:text-[200px] font-bold text-wg-border/30 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-wg-bg flex items-center justify-center">
                <Search className="w-12 h-12 text-wg-primary" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-wg-navy mb-4">
            Page Not Found
          </h1>
          
          <p className="text-wg-navy/70 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/" variant="primary" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
            <Button 
              onClick={() => window.history.back()} 
              variant="secondary" 
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-wg-border/50">
            <p className="text-sm text-wg-navy/50 mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="text-wg-primary hover:text-wg-dark transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-wg-primary hover:text-wg-dark transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="text-wg-primary hover:text-wg-dark transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-wg-primary hover:text-wg-dark transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
