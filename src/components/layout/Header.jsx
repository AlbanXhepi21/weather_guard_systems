import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Home, Maximize2, Umbrella, Wrench, Calendar } from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
  Shield,
  Home,
  Maximize2,
  Umbrella,
  Wrench,
  Calendar
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-wg-primary' : 'text-wg-navy hover:text-wg-primary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-wg-soft flex items-center justify-center">
              <Shield className="w-6 h-6 md:w-7 md:h-7 text-wg-dark" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-semibold text-wg-navy tracking-wide">
                Weather Guard
              </span>
              <span className="block text-xs text-wg-primary tracking-wider uppercase">
                Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-wg-navy hover:text-wg-primary transition-colors duration-200"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-wg-border/50 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-2">
                  {services.map((service) => {
                    const IconComponent = iconMap[service.icon];
                    return (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-wg-bg transition-colors duration-200"
                      >
                        {IconComponent && <IconComponent className="w-5 h-5 text-wg-primary" />}
                        <span className="text-sm text-wg-navy">{service.name}</span>
                      </Link>
                    );
                  })}
                  <div className="border-t border-wg-border/50 mt-2 pt-2">
                    <Link
                      to="/services"
                      className="block p-3 text-sm font-medium text-wg-primary hover:bg-wg-bg rounded-lg transition-colors duration-200"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-wg-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          <NavLink to="/" className="text-lg font-medium text-wg-navy py-2">
            Home
          </NavLink>
          <NavLink to="/about" className="text-lg font-medium text-wg-navy py-2">
            About
          </NavLink>

          {/* Mobile Services Accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-wg-navy py-2"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pl-4 py-2 flex flex-col gap-2">
                {services.map((service) => {
                  const IconComponent = iconMap[service.icon];
                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="flex items-center gap-3 py-2 text-wg-navy/80"
                    >
                      {IconComponent && <IconComponent className="w-4 h-4 text-wg-primary" />}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <NavLink to="/portfolio" className="text-lg font-medium text-wg-navy py-2">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="text-lg font-medium text-wg-navy py-2">
            Contact
          </NavLink>

          <Link to="/contact" className="btn-primary text-center mt-4">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
