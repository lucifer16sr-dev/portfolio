# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 🌓 Dark mode support
- 📱 Fully responsive
- ⚡ Fast and optimized with Vite
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🎭 Beautiful animations and transitions

## Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal information and key strengths
- **Skills**: Technical skills with progress bars
- **Projects**: Showcase of portfolio projects
- **Contact**: Contact form and information
- **Footer**: Links and social media

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Home Section** (`src/components/Home.tsx`):
   - Update name, title, and description
   - Add your social media links

2. **About Section** (`src/components/About.tsx`):
   - Update your bio and key points

3. **Skills Section** (`src/components/Skills.tsx`):
   - Modify skill categories and proficiency levels
   - Add or remove technologies

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update project descriptions, technologies, and links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Connect the form to your backend/email service

6. **Footer** (`src/components/Footer.tsx`):
   - Update social media links
   - Modify contact information

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Hooks** - State management

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── styles/      # Global styles
│   ├── App.tsx      # Main app component
│   └── main.tsx     # Entry point
├── index.html       # HTML template
└── package.json     # Dependencies
```

## License

MIT License - feel free to use this portfolio template for your own projects!

