import { CheckCircle, Award, Users, Clock, Target, Eye } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTABanner from '../components/sections/CTABanner';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Team Members' },
  { number: '100%', label: 'Client Satisfaction' },
];

const values = [
  'Commitment to excellence in every installation',
  'Transparent communication throughout the project',
  'Use of premium, certified materials',
  'Skilled and trained professional technicians',
  'Comprehensive warranty on all work',
  'Ongoing support and maintenance services',
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Weather Guard Systems"
        subtitle="Your trusted partner for storm protection and outdoor living solutions since 2014."
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-wg-navy mb-6">Our Story</h2>
              <p className="text-wg-navy/70 mb-4 leading-relaxed">
                Weather Guard Systems was founded with a simple mission: to provide homeowners 
                and businesses with the highest quality storm protection and outdoor living 
                solutions. What started as a small team of dedicated professionals has grown 
                into a leading company in the industry.
              </p>
              <p className="text-wg-navy/70 mb-4 leading-relaxed">
                Over the years, we have completed hundreds of projects, ranging from residential 
                storm shutter installations to commercial pergola systems. Our commitment to 
                quality, safety, and customer satisfaction has earned us a reputation as a 
                trusted partner for property protection.
              </p>
              <p className="text-wg-navy/70 leading-relaxed">
                Today, we continue to innovate and expand our services, always staying ahead 
                of industry trends to offer our clients the best solutions available in the market.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                  alt="Weather Guard Systems team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-wg-bg">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-wg-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-wg-navy/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-wg-bg rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-wg-primary flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-wg-navy mb-4">Our Mission</h3>
              <p className="text-wg-navy/70 leading-relaxed">
                To provide exceptional storm protection and outdoor living solutions that 
                safeguard properties and enhance quality of life. We are committed to 
                delivering superior craftsmanship, using premium materials, and ensuring 
                complete customer satisfaction on every project we undertake.
              </p>
            </div>

            <div className="bg-wg-bg rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-wg-primary flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-wg-navy mb-4">Our Vision</h3>
              <p className="text-wg-navy/70 leading-relaxed">
                To be the leading provider of storm protection and outdoor living systems, 
                recognized for our innovation, reliability, and unwavering commitment to 
                excellence. We envision a future where every property owner has access to 
                world-class protection and outdoor enhancement solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-wg-bg">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-wg-primary flex-shrink-0 mt-0.5" />
                  <span className="text-wg-navy">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs background="white" />

      <CTABanner 
        title="Ready to work with us?"
        subtitle="Contact our team today for a free consultation."
      />
    </>
  );
};

export default About;
