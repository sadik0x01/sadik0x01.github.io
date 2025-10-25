# 🔐 Cybersecurity Portfolio Website

A modern, responsive portfolio website showcasing cybersecurity tools, resources, and methodologies.

## 🌟 Features

- **Google Dorks** - Comprehensive collection of Google search operators for security research
- **GitHub Dorks** - GitHub-specific search queries for finding sensitive data
- **Shodan Dorks** - Shodan search queries for discovering exposed devices
- **Bug Bounty Resources** - Curated dorks and techniques for bug bounty hunting
- **Recon Methodology** - Step-by-step reconnaissance methodologies
- **Dark/Light Mode** - Toggle between themes for comfortable viewing
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Live Demo

Visit the live site: [Your Site URL]

## 💻 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Express.js (minimal, for development)

## 🛠️ Local Development

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (full-stack)
- `npm run build:static` - Build static site for GitHub Pages
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## 📦 Building for Production

### Static Site (GitHub Pages)

```bash
npm run build:static
```

Output will be in `dist-static/` directory.

### Full-Stack Build

```bash
npm run build
```

Output will be in `dist/` directory.

## 🌐 Deployment

This project is configured for easy deployment to GitHub Pages with automated GitHub Actions.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utility functions
│   │   └── hooks/       # Custom React hooks
│   └── index.html
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── vite.ts          # Vite integration
├── shared/              # Shared types and schemas
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── attached_assets/     # Static assets and resources
```

## 🎨 Customization

### Adding New Pages

1. Create a new page component in `client/src/pages/`
2. Add the route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Header.tsx`

### Styling

The project uses Tailwind CSS. Customize colors and themes in:
- `tailwind.config.ts` - Tailwind configuration
- `client/src/index.css` - Global styles and CSS variables

### Dark Mode

Theme switching is handled by `next-themes`. The theme provider is in `client/src/lib/theme-context.tsx`.

## 🔒 Security Features

This portfolio showcases various cybersecurity tools and methodologies:

- **OSINT Tools** - Open-source intelligence gathering techniques
- **Dorks Collections** - Search operators for security research
- **Recon Frameworks** - Structured approaches to reconnaissance
- **Best Practices** - Security research methodologies

> ⚠️ **Disclaimer**: The tools and techniques shown are for educational and ethical security research only. Always obtain proper authorization before testing on any system.

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- Website: [Your Site URL]

---

Made with ❤️ and ☕

