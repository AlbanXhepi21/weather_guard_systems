import { useState } from 'react';
import { X } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../data/services';

const projects = [
  { id: 1, category: 'storm-shutters', title: 'Beachfront Home Protection', image: 'https://picsum.photos/600/400?random=1' },
  { id: 2, category: 'pergolas', title: 'Modern Patio Pergola', image: 'https://picsum.photos/600/400?random=2' },
  { id: 3, category: 'guillotine-windows', title: 'Restaurant Glass Enclosure', image: 'https://picsum.photos/600/400?random=3' },
  { id: 4, category: 'awnings', title: 'Commercial Storefront Awning', image: 'https://picsum.photos/600/400?random=4' },
  { id: 5, category: 'storm-shutters', title: 'Hurricane Shutter Installation', image: 'https://picsum.photos/600/400?random=5' },
  { id: 6, category: 'pergolas', title: 'Backyard Oasis Pergola', image: 'https://picsum.photos/600/400?random=6' },
  { id: 7, category: 'guillotine-windows', title: 'Poolside Glass System', image: 'https://picsum.photos/600/400?random=7' },
  { id: 8, category: 'awnings', title: 'Residential Retractable Awning', image: 'https://picsum.photos/600/400?random=8' },
  { id: 9, category: 'storm-shutters', title: 'Colonial Style Shutters', image: 'https://picsum.photos/600/400?random=9' },
  { id: 10, category: 'pergolas', title: 'Bioclimatic Pergola', image: 'https://picsum.photos/600/400?random=10' },
  { id: 11, category: 'guillotine-windows', title: 'Balcony Glass Enclosure', image: 'https://picsum.photos/600/400?random=11' },
  { id: 12, category: 'awnings', title: 'Motorized Patio Awning', image: 'https://picsum.photos/600/400?random=12' },
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
