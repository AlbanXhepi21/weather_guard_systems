import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { services } from '../data/services';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrors({ submit: 'Form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to .env (get a free key at web3forms.com).' });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New contact form – Weather Guard Systems',
          from_name: formData.name,
          email: formData.email,
          message: [
            formData.message,
            formData.phone && `Phone: ${formData.phone}`,
            formData.service && `Service interest: ${formData.service}`,
          ].filter(Boolean).join('\n\n'),
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send');
      }
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setErrors({ submit: err.message || 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (error) =>
    `w-full px-4 py-3 rounded-lg border transition-colors duration-200 outline-none
    ${error 
      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
      : 'border-wg-border focus:border-wg-primary focus:ring-2 focus:ring-wg-primary/20'
    }`;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for a free consultation and quote."
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-wg-navy mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <Card hover={false} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-wg-navy mb-2">
                    Thank You!
                  </h3>
                  <p className="text-wg-navy/70 mb-4">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-wg-primary font-medium hover:text-wg-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wg-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses(errors.name)}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wg-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses(errors.email)}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-wg-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses(false)}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-wg-navy mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClasses(false)}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wg-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={inputClasses(errors.message)}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-wg-navy mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wg-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-wg-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wg-navy mb-1">Address</h3>
                    <p className="text-wg-navy/70">
                      123 Protection Drive<br />
                      Miami, FL 33101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wg-bg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-wg-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wg-navy mb-1">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-wg-navy/70 hover:text-wg-primary transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wg-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-wg-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wg-navy mb-1">Email</h3>
                    <a 
                      href="mailto:info@weatherguardsystems.com" 
                      className="text-wg-navy/70 hover:text-wg-primary transition-colors"
                    >
                      info@weatherguardsystems.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wg-bg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-wg-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wg-navy mb-1">Business Hours</h3>
                    <p className="text-wg-navy/70">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-wg-border/50 max-w-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.9054636456416!2d-80.18971173044407!3d25.816046605840945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b1f63f8b2d87%3A0xd43ea8310308316f!2s123-Sys%20Networking!5e0!3m2!1sen!2s!4v1770465039999!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Weather Guard Systems location"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
