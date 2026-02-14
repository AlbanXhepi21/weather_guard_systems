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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
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
    setIsProductsOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-wg-primary' : 'text-wg-navy hover:text-wg-primary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      } ${isMenuOpen ? 'lg:bg-white/95' : ''}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo – always show with text (mobile + desktop) */}
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src="/images/wgs.png" alt="Weather Guard Systems" className="h-9 w-auto sm:h-10 md:h-12 object-contain shrink-0" />
            <div className="min-w-0">
              <span className="block text-sm sm:text-lg md:text-xl font-semibold text-wg-navy tracking-wide truncate">
                Weather Guard
              </span>
              <span className="block text-[10px] sm:text-xs text-wg-primary tracking-wider uppercase">
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

            {/* Products Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-wg-navy hover:text-wg-primary transition-colors duration-200"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-wg-border/50 transition-all duration-200 ${
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="p-2">
                  {services.map((service) => {
                    const IconComponent = iconMap[service.icon];
                    return (
                      <Link
                        key={service.id}
                        to={`/products/${service.id}`}
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
                      View All Products →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
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

      {/* Mobile Menu – solid white, no transparency */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 bg-white transition-all duration-300 overflow-y-auto ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="container-custom py-5 flex flex-col gap-1">
          <NavLink to="/" className={({ isActive }) => `text-base font-medium py-2.5 ${isActive ? 'text-wg-primary' : 'text-wg-navy'}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-base font-medium py-2.5 ${isActive ? 'text-wg-primary' : 'text-wg-navy'}`}>
            About
          </NavLink>

          {/* Mobile Products Accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full text-base font-medium text-wg-navy py-2.5"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isProductsOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pl-4 py-2 flex flex-col gap-2">
                {services.map((service) => {
                  const IconComponent = iconMap[service.icon];
                  return (
                    <Link
                      key={service.id}
                      to={`/products/${service.id}`}
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

          <NavLink to="/services" className={({ isActive }) => `text-base font-medium py-2.5 ${isActive ? 'text-wg-primary' : 'text-wg-navy'}`}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `text-base font-medium py-2.5 ${isActive ? 'text-wg-primary' : 'text-wg-navy'}`}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-base font-medium py-2.5 ${isActive ? 'text-wg-primary' : 'text-wg-navy'}`}>
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
