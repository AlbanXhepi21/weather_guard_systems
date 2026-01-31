# Weather Guard Systems

A modern, minimal, and fast React website for Weather Guard Systems - a company providing storm protection and outdoor living installation services.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Features

- Modern, responsive design
- Mobile-first approach
- Smooth animations and transitions
- SEO-friendly structure
- Fast loading with optimized assets
- Accessible components
- Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
weather-guard-systems/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Icon.jsx
│   │   │   ├── PageHero.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── BackToTop.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── ServicesGrid.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── CTABanner.jsx
│   │       ├── ServiceProcess.jsx
│   │       └── AboutPreview.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── services.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Pages

- **Home** - Hero, services overview, why choose us, about preview, CTA
- **About** - Company story, mission/vision, values, team info
- **Services** - All services grid with filtering
- **Service Detail** - Individual service page with features, process, gallery
- **Portfolio** - Project gallery with category filtering and lightbox
- **Contact** - Contact form and company information
- **404** - Custom not found page

## Brand Colors

```css
--color-primary-dark: #1a6b7c;    /* Dark teal */
--color-primary: #3d9dad;          /* Main teal */
--color-primary-light: #7ec8d4;    /* Light teal */
--color-accent-navy: #0d3d47;      /* Navy */
--color-bg-primary: #ffffff;       /* White */
--color-bg-secondary: #f0f7f8;     /* Light teal bg */
--color-bg-soft: #d4e8eb;          /* Soft teal */
```

## Services

1. Storm Shutters Installation
2. Outdoor Pergola Installation
3. Guillotine Windows Installation
4. Awning Installation
5. Service & Repair
6. Annual Maintenance

## Customization

### Adding New Services

Edit `src/data/services.js` to add new services. Each service requires:
- `id` - URL-friendly identifier
- `name` - Display name
- `shortDescription` - Brief description
- `icon` - Lucide icon name
- `heroImage` - Hero background image URL
- `description` - Full description
- `features` - Array of features with icon, title, description
- `process` - Array of steps with step number, title, description

### Updating Contact Information

Update contact details in:
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

### Changing Colors

Modify the color palette in `tailwind.config.js` under `theme.extend.colors.wg`.

## License

MIT License - feel free to use this template for your projects.
