import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { services } from '../../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-wg-light" />
              </div>
              <div>
                <span className="text-lg font-semibold tracking-wide">Weather Guard</span>
                <span className="block text-xs text-wg-light tracking-wider uppercase">Systems</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional installation of storm shutters, pergolas, guillotine windows, and awnings. 
              Complete service and maintenance solutions for your property.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-wg-primary transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-wg-primary transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-wg-primary transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-wg-primary transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-wg-light flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  123 Protection Drive<br />
                  Miami, FL 33101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-wg-light flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-wg-light flex-shrink-0" />
                <a href="mailto:info@weatherguardsystems.com" className="text-white/70 hover:text-wg-light transition-colors duration-200 text-sm">
                  info@weatherguardsystems.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-wg-light flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Weather Guard Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-wg-light transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-wg-light transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
