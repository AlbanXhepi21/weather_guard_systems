export const services = [
  {
    id: 'storm-shutters',
    name: 'Storm Shutters Installation',
    shortDescription: 'Hurricane and storm protection for your windows and doors.',
    icon: 'Shield',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    hasCatalog: false,
    description: `Protect your home or business with our professional storm shutter installation services. 
Weather Guard Systems offers a complete range of hurricane-rated shutters designed to withstand 
severe weather conditions while enhancing your property's security and energy efficiency.

Our expert team will assess your property and recommend the perfect shutter solution, whether you 
prefer roll-down, accordion, Bahama, or colonial styles. Each installation is customized to fit 
your specific openings and architectural style.`,
    features: [
      { icon: 'ShieldCheck', title: 'Hurricane Rated', description: 'Tested and certified for severe weather protection' },
      { icon: 'Palette', title: 'Multiple Styles', description: 'Roll-down, accordion, Bahama, and colonial options' },
      { icon: 'Ruler', title: 'Custom Fit', description: 'Precisely measured for your windows and doors' },
      { icon: 'Zap', title: 'Motorized Options', description: 'Convenient remote-controlled operation' },
      { icon: 'Thermometer', title: 'Energy Efficient', description: 'Improved insulation reduces energy costs' },
      { icon: 'VolumeX', title: 'Noise Reduction', description: 'Added sound insulation for peace and quiet' }
    ],
    process: [
      { step: 1, title: 'Free Consultation', description: 'We visit your property to assess your needs and discuss options.' },
      { step: 2, title: 'Custom Design', description: 'Our team designs a tailored solution that fits your property perfectly.' },
      { step: 3, title: 'Professional Installation', description: 'Certified technicians install your shutters with precision and care.' },
      { step: 4, title: 'Final Walkthrough', description: 'We demonstrate operation and ensure your complete satisfaction.' }
    ]
  },
  {
    id: 'pergolas',
    name: 'Outdoor Pergola Installation',
    shortDescription: 'Bioclimatic pergola systems with motorized louvers for perfect climate control.',
    icon: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    hasCatalog: true,
    catalogUrl: '/catalogs/bioclimatic-system-kenan-metal.pdf',
    catalogName: 'Bioclimatic Systems Catalog',
    manufacturer: 'Kenan Metal / Artminyum',
    description: `Transform your outdoor space with our premium bioclimatic pergola installations featuring 
motorized louvers from Kenan Metal's Artminyum line. Control sunlight, ventilation, and weather protection 
with the touch of a button.

Bioclimatic systems feature motorized louvers designed to open and close. These louvers can be adjusted 
to control sunlight and ventilation while providing protection against rain, wind, and other external 
factors. They can be controlled remotely, allowing users to respond instantly to weather conditions.`,
    technicalHighlights: [
      'Materials: 6063 T5 Aluminum, Stainless Steel, Derlin',
      'All RAL colors available',
      'Integrated LED and RGB lighting options',
      'Built-in rainwater drainage system',
      'Somfy motor compatible',
      'Remote control operation',
      'Louver angle: 0° to 90°'
    ],
    systemVariants: [
      { name: 'Castor Gold', type: 'Scissors System', description: 'Motorized scissors mechanism with LED integration and RGB lighting options' },
      { name: 'Vega Silver', type: 'Tilt System', description: 'Elegant tilt drive mechanism with Universal or Somfy compatible controls' },
      { name: 'Capella', type: 'Transmission System', description: 'Gearbox-driven mechanism with retractable roof panels and movable gutter' },
      { name: 'Diamond', type: 'C-Channel System', description: 'Piston motor option with C-channel rail and steel rope mechanism' }
    ],
    specifications: [
      { label: 'Materials', value: '6063 T5 Aluminum, Stainless Steel, Derlin' },
      { label: 'Louver Angle Range', value: '0° - 90°' },
      { label: 'Motor Compatibility', value: 'Somfy, Universal' },
      { label: 'Colors Available', value: 'All RAL Colors' },
      { label: 'Lighting Options', value: 'LED, RGB' },
      { label: 'Drainage', value: 'Integrated rainwater system' }
    ],
    features: [
      { icon: 'Sun', title: 'Climate Control', description: 'Adjustable louvers from 0° to 90° for perfect comfort' },
      { icon: 'CloudRain', title: 'Weather Protection', description: 'Complete protection when closed (0°), ventilation at 5°' },
      { icon: 'Smartphone', title: 'Smart Control', description: 'Remote control and home automation compatible' },
      { icon: 'Lightbulb', title: 'Integrated Lighting', description: 'Built-in LED and RGB lighting options' },
      { icon: 'Droplets', title: 'Rain Drainage', description: 'Intelligent water collection and drainage system' },
      { icon: 'Award', title: 'Premium Quality', description: 'ISO, CE, Qualicoat, and TSE certified materials' }
    ],
    process: [
      { step: 1, title: 'Design Consultation', description: 'Discuss your vision, choose your system variant and features.' },
      { step: 2, title: 'Site Survey', description: 'Precise measurements and structural assessment of your space.' },
      { step: 3, title: 'Custom Fabrication', description: 'Your pergola is built to exact specifications with premium materials.' },
      { step: 4, title: 'Expert Installation', description: 'Professional assembly with full system calibration and training.' }
    ],
    certifications: ['ISO', 'CE', 'Qualicoat', 'Qualanod', 'TSE']
  },
  {
    id: 'guillotine-windows',
    name: 'Guillotine Windows Installation',
    shortDescription: 'Olympos vertical sliding glass systems for seamless indoor-outdoor transitions.',
    icon: 'Maximize2',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    hasCatalog: true,
    catalogUrl: '/catalogs/olympos-guillotine-glass-systems.pdf',
    catalogName: 'Olympos Guillotine Glass Systems Catalog',
    manufacturer: 'Kenan Metal / Artminyum',
    description: `Experience the elegance of the Olympos Guillotine Glass System from Kenan Metal. 
These sophisticated vertical sliding glass panels allow large glass surfaces to function as operable 
windows, creating seamless transitions between indoor and outdoor spaces.

The Olympos system is a preferred glass opening mechanism, especially in commercial buildings, hotels, 
or large structures. It is ideal for natural ventilation and serving as access openings in large glass 
surfaces, facilitating transition between indoor and outdoor environments in good weather conditions.`,
    technicalHighlights: [
      'Maximum dimensions: 3500mm (W) × 3000mm (H)',
      'Materials: 6063 T5 Aluminum, Stainless Steel, Derlin',
      'All RAL colors available',
      'Chain or belt drive options',
      'Motorized operation',
      'Weather sealed system',
      'Glass options: 8mm or 24mm'
    ],
    specifications: [
      { label: 'Maximum Width', value: '3500mm' },
      { label: 'Maximum Height', value: '3000mm' },
      { label: 'Materials', value: '6063 T5 Aluminum, Stainless Steel, Derlin' },
      { label: 'Glass Options', value: '8mm, 24mm' },
      { label: 'Drive Types', value: 'Chain Set (GYT-01), Strapped Set (GYT-02)' },
      { label: 'Motor Compatibility', value: 'Somfy, Becker, Universal' },
      { label: 'Colors Available', value: 'All RAL Colors' }
    ],
    features: [
      { icon: 'Square', title: 'Large Glass Panels', description: 'Up to 3.5m wide × 3m tall glass surfaces' },
      { icon: 'ArrowUpDown', title: 'Vertical Sliding', description: 'Smooth motorized vertical operation' },
      { icon: 'Droplets', title: 'Weather Sealed', description: 'Extremely resistant to rain and wind' },
      { icon: 'Shield', title: 'Safety Glass', description: 'Tempered safety glass options available' },
      { icon: 'Smartphone', title: 'Remote Control', description: 'Motorized operation with remote control' },
      { icon: 'Palette', title: 'Custom Colors', description: 'Any RAL color to match your design' }
    ],
    process: [
      { step: 1, title: 'Site Assessment', description: 'Evaluate your opening and structural requirements.' },
      { step: 2, title: 'System Engineering', description: 'Design custom system within max dimensions (3.5m × 3m).' },
      { step: 3, title: 'Precision Manufacturing', description: 'Glass cutting and aluminum profile fabrication.' },
      { step: 4, title: 'Expert Installation', description: 'Careful fitting, calibration, and system testing.' }
    ],
    certifications: ['ISO', 'CE', 'Qualicoat', 'Qualanod', 'TSE']
  },
  {
    id: 'awnings',
    name: 'Awning Installation',
    shortDescription: 'Retractable and fixed awnings for shade and style.',
    icon: 'Umbrella',
    heroImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
    hasCatalog: false,
    description: `Add comfort, style, and energy efficiency to your outdoor spaces with Weather Guard 
Systems' premium awning installations. Our awnings provide perfect shade while protecting your 
furniture and reducing indoor cooling costs.

Choose from retractable, fixed, or motorized options in a wide variety of fabrics, colors, and 
styles. Whether for your home patio, storefront, or commercial space, we have the perfect 
awning solution.`,
    features: [
      { icon: 'RefreshCw', title: 'Retractable Options', description: 'Extend or retract as needed' },
      { icon: 'Zap', title: 'Motorized Controls', description: 'Effortless remote operation' },
      { icon: 'Sun', title: 'UV Protection', description: 'Block harmful rays while staying cool' },
      { icon: 'CloudRain', title: 'Weather Resistant', description: 'Durable fabrics that withstand elements' },
      { icon: 'Maximize', title: 'Custom Sizes', description: 'Made to fit your exact space' },
      { icon: 'Palette', title: 'Color Options', description: 'Wide selection of fabrics and colors' }
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your shading needs and preferences.' },
      { step: 2, title: 'Product Selection', description: 'Choose your style, fabric, and features.' },
      { step: 3, title: 'Precise Measurement', description: 'Ensure perfect fit for your space.' },
      { step: 4, title: 'Professional Installation', description: 'Secure mounting and system setup.' }
    ]
  },
  {
    id: 'repairs',
    name: 'Service & Repair',
    shortDescription: 'Expert repair and service for all our products.',
    icon: 'Wrench',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
    hasCatalog: false,
    description: `Keep your Weather Guard Systems products in perfect working condition with our 
professional service and repair solutions. Our certified technicians are trained on all Kenan Metal 
systems and use genuine parts for all repairs.

Whether you need a quick fix, parts replacement, or comprehensive repair, our team responds 
quickly and works efficiently to minimize downtime. We stand behind our work and use only 
genuine parts for all repairs.`,
    features: [
      { icon: 'Package', title: 'All Products', description: 'Service for shutters, pergolas, windows, awnings' },
      { icon: 'CheckCircle', title: 'Genuine Parts', description: 'Original Kenan Metal replacement components' },
      { icon: 'UserCheck', title: 'Certified Technicians', description: 'Factory-trained service professionals' },
      { icon: 'Clock', title: 'Quick Response', description: 'Fast scheduling and service times' },
      { icon: 'FileCheck', title: 'Warranty Repairs', description: 'Hassle-free warranty service' },
      { icon: 'AlertTriangle', title: 'Emergency Service', description: 'Available for urgent repairs' }
    ],
    process: [
      { step: 1, title: 'Report Issue', description: 'Contact us with details about your concern.' },
      { step: 2, title: 'Diagnosis', description: 'Technician inspects and identifies the problem.' },
      { step: 3, title: 'Quote', description: 'Transparent pricing before any work begins.' },
      { step: 4, title: 'Expert Repair', description: 'Professional fix with quality guarantee.' }
    ]
  },
  {
    id: 'maintenance',
    name: 'Annual Maintenance',
    shortDescription: 'Yearly cleaning and maintenance packages.',
    icon: 'Calendar',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
    hasCatalog: false,
    description: `Protect your investment with Weather Guard Systems' comprehensive annual maintenance 
packages. Regular professional servicing ensures optimal performance, extends product lifespan, 
and maintains your warranty coverage on all Kenan Metal systems.

Our maintenance programs include thorough inspection, professional cleaning, lubrication of 
moving parts, and minor adjustments. We'll identify potential issues before they become 
costly repairs and keep your systems running smoothly year after year.`,
    features: [
      { icon: 'Search', title: 'Full Inspection', description: 'Comprehensive system evaluation' },
      { icon: 'Sparkles', title: 'Professional Cleaning', description: 'Thorough cleaning of all components' },
      { icon: 'Droplet', title: 'Lubrication Service', description: 'Keep mechanisms running smoothly' },
      { icon: 'SlidersHorizontal', title: 'Adjustments', description: 'Fine-tuning for optimal performance' },
      { icon: 'ClipboardCheck', title: 'Performance Testing', description: 'Verify proper operation' },
      { icon: 'Star', title: 'Priority Scheduling', description: 'Maintenance members get priority service' }
    ],
    process: [
      { step: 1, title: 'Schedule Service', description: 'Book your convenient maintenance appointment.' },
      { step: 2, title: 'Thorough Inspection', description: 'Complete system check by certified tech.' },
      { step: 3, title: 'Service & Clean', description: 'Professional maintenance and cleaning.' },
      { step: 4, title: 'Detailed Report', description: 'Receive condition report and recommendations.' }
    ]
  }
];

// Product specifications for technical pages
export const productSpecs = {
  guillotine: {
    name: 'Olympos Guillotine Glass System',
    manufacturer: 'Kenan Metal',
    brand: 'Artminyum',
    maxDimensions: { width: 3500, height: 3000, unit: 'mm' },
    materials: ['6063 T5 Aluminum', 'Stainless Steel', 'Derlin'],
    driveOptions: ['Chain Set (GYT-01)', 'Belt/Strap Set (GYT-02)'],
    motorOptions: ['Somfy', 'Becker', 'Universal'],
    glassThickness: ['8mm', '24mm'],
    colors: 'All RAL colors available',
    certifications: ['ISO', 'CE', 'Qualicoat', 'Qualanod', 'TSE'],
    profiles: [
      { name: 'Motor Box Profile', code: '37272', weight: '2.699 kg/m' },
      { name: 'Motor Box Cover Profile', code: '37271', weight: '0.847 kg/m' },
      { name: 'Motor Tube Profile', code: '37115', weight: '0.992 kg/m' },
      { name: 'Side Rail Profile', code: '37267', weight: '1.624 kg/m' },
      { name: 'Rail Middle Profile', code: '37268', weight: '0.466 kg/m' },
      { name: 'Side Rail Cover Profile', code: '37269', weight: '0.477 kg/m' },
      { name: 'Sill Profile', code: '37266', weight: '1.485 kg/m' },
      { name: '24mm Glass Handrail Profile', code: '37265', weight: '1.285 kg/m' },
      { name: '24mm Glass Puller Profile', code: '37264', weight: '0.818 kg/m' },
      { name: '24mm Glass Frame Profile', code: '37263', weight: '0.545 kg/m' }
    ]
  },
  bioclimatic: {
    name: 'Bioclimatic Pergola Systems',
    manufacturer: 'Kenan Metal',
    brand: 'Artminyum',
    materials: ['6063 T5 Aluminum', 'Stainless Steel', 'Derlin'],
    louverAngle: { min: 0, max: 90, unit: 'degrees' },
    colors: 'All RAL colors available',
    certifications: ['ISO', 'CE', 'Qualicoat', 'Qualanod', 'TSE'],
    variants: [
      { 
        name: 'Castor Gold', 
        type: 'Scissors System',
        features: ['Scissors mechanism', 'LED integration', 'RGB options', 'Somfy compatible']
      },
      { 
        name: 'Vega Silver', 
        type: 'Tilt System',
        features: ['Tilt drive mechanism', 'Universal or Somfy controls', 'Panel drive set']
      },
      { 
        name: 'Capella', 
        type: 'Transmission System',
        features: ['Gearbox-driven', 'Retractable roof panels', 'Movable gutter system']
      },
      { 
        name: 'Diamond', 
        type: 'C-Channel System',
        features: ['Piston motor option', 'C-channel rail', 'Steel rope mechanism']
      }
    ],
    commonProfiles: [
      { name: 'Gutter Beam Profile', code: '4111', weight: '5.721 kg/m' },
      { name: 'Middle Gutter Beam Profile', code: '4120', weight: '7.366 kg/m' },
      { name: 'Gutter Profile', code: '4218', weight: '3.940 kg/m' },
      { name: 'Panel Profile', code: '4109', weight: '3.553 kg/m' },
      { name: 'Pillar Profile', code: '4108', weight: '5.368 kg/m' },
      { name: 'Pillar Cover Profile', code: '4122', weight: '1.309 kg/m' },
      { name: 'LED Profile', code: '2953', weight: '0.445 kg/m' }
    ],
    features: [
      'Motorized louvers (0°-90°)',
      'Remote control operation',
      'Integrated rainwater drainage',
      'LED and RGB lighting options',
      'Weather protection at 0°',
      'Ventilation at 5°'
    ]
  }
};

export const getServiceById = (id) => services.find(service => service.id === id);

export const getRelatedServices = (currentId, count = 3) => {
  return services.filter(service => service.id !== currentId).slice(0, count);
};
