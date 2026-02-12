import { useState } from 'react';
import { X } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../data/services';

const projects = [
  // Storm Shutters (6)
  { id: 1, category: 'storm-shutters', title: 'Beachfront Home Protection', image: '/images/storm/stormwgs1.png' },
  { id: 2, category: 'storm-shutters', title: 'Residential Storm Shutters', image: '/images/storm/storm1.jpg' },
  { id: 3, category: 'storm-shutters', title: 'Hurricane Shutter Installation', image: '/images/storm/storm2.jpg' },
  { id: 4, category: 'storm-shutters', title: 'Roll-Down Shutter Project', image: '/images/storm/storm3.jpg' },
  { id: 5, category: 'storm-shutters', title: 'Storm Protection System', image: '/images/storm/storm4.jpg' },
  { id: 6, category: 'storm-shutters', title: 'Commercial Shutter Installation', image: '/images/storm/storm5.webp' },
  // Outdoor Pergola (6)
  { id: 7, category: 'pergolas', title: 'Modern Patio Pergola', image: '/images/pergola/pergola1.jpg' },
  { id: 8, category: 'pergolas', title: 'Bioclimatic Pergola', image: '/images/pergola/pergola2.jpg' },
  { id: 9, category: 'pergolas', title: 'Backyard Oasis Pergola', image: '/images/pergola/pergola3.jpg' },
  { id: 10, category: 'pergolas', title: 'Louvered Pergola Installation', image: '/images/pergola/pergola4.jpg' },
  { id: 11, category: 'pergolas', title: 'Outdoor Living Pergola', image: '/images/pergola/pergola5.png' },
  { id: 12, category: 'pergolas', title: 'Residential Pergola System', image: '/images/pergola/pergola6.webp' },
  // Guillotine Windows (6)
  { id: 13, category: 'guillotine-windows', title: 'Restaurant Glass Enclosure', image: '/images/guillotine/guillotine1.jpg' },
  { id: 14, category: 'guillotine-windows', title: 'Vertical Sliding Glass System', image: '/images/guillotine/guillotine2.webp' },
  { id: 15, category: 'guillotine-windows', title: 'Olympos Glass Installation', image: '/images/guillotine/guillotine3.jpg' },
  { id: 16, category: 'guillotine-windows', title: 'Poolside Glass Enclosure', image: '/images/guillotine/guillotine4.jpg' },
  { id: 17, category: 'guillotine-windows', title: 'Commercial Glass Opening', image: '/images/guillotine/guillotine5.webp' },
  { id: 18, category: 'guillotine-windows', title: 'Balcony Glass System', image: '/images/guillotine/guillotine6.jpg' },
  // Awnings (6)
  { id: 19, category: 'awnings', title: 'Commercial Storefront Awning', image: '/images/awm/awm1.jpg' },
  { id: 20, category: 'awnings', title: 'Retractable Patio Awning', image: '/images/awm/awm2.jpg' },
  { id: 21, category: 'awnings', title: 'Residential Retractable Awning', image: '/images/awm/awm3.jpg' },
  { id: 22, category: 'awnings', title: 'Motorized Awning Installation', image: '/images/awm/awm4.jpg' },
  { id: 23, category: 'awnings', title: 'Fixed Awning Project', image: '/images/awm/awm5.jpg' },
  { id: 24, category: 'awnings', title: 'Deck & Patio Awning', image: '/images/awm/awm6.jpg' },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  ...services.slice(0, 4).map(s => ({ id: s.id, name: s.name.replace(' Installation', '') })),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Browse through our completed projects and see the quality of our work."
      />

      <section className="section-padding bg-white">
        <Container>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                          ${activeCategory === category.id
                            ? 'bg-wg-dark text-white'
                            : 'bg-wg-bg text-wg-navy hover:bg-wg-soft'
                          }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-lg 
                          transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 
                              group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wg-navy/80 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full 
                                group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold">{project.title}</h3>
                    <p className="text-white/70 text-sm">
                      {categories.find(c => c.id === project.category)?.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-wg-light transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedProject.title}</h3>
              <p className="text-white/70">
                {categories.find(c => c.id === selectedProject.category)?.name}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTABanner
        title="Want your project featured here?"
        subtitle="Contact us to discuss your storm protection or outdoor living project."
      />
    </>
  );
};

export default Portfolio;
