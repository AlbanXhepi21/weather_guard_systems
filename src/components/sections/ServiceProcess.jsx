import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const ServiceProcess = ({ process, title = "Our Process", subtitle }) => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title={title}
          subtitle={subtitle || "A seamless experience from start to finish"}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-wg-border/50" />
              )}

              <div className="relative bg-white">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-wg-primary text-white text-2xl font-bold 
                              flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.step}
                </div>

                <h3 className="text-lg font-semibold text-wg-navy mb-2 text-center">
                  {step.title}
                </h3>

                <p className="text-wg-navy/70 text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceProcess;
