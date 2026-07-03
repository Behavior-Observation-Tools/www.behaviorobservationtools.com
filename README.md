# Behavior Observation: BOSS Website

A modern, responsive website for the Behavior Observation: BOSS mobile application, built with Bun and deployed to GitHub Pages.

## 🚀 Features

- **Modern Static Site**: Built with Bun's native HTML bundler
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Interactive Elements**: Custom TypeScript modules for animations and interactions
- **Screenshot Gallery**: Showcases the latest v3.0.0 app interface
- **Dark Mode**: Automatic dark/light theme switching
- **Performance Optimized**: Fast loading with lazy loading and optimized assets

## 🛠️ Development

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Node.js (for some development tools)

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd www.behaviorobservationtools.com
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or
   bun ./src/index.html
   ```

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run build:quick` - Quick build (index page only)
- `bun run preview` - Preview built site
- `bun run clean` - Clean build directory

## 📁 Project Structure

```
src/
├── index.html              # Main landing page
├── styles/
│   └── main.css            # Global styles with TailwindCSS
├── scripts/
│   ├── app.ts              # Main application logic
│   ├── animations.ts       # Animation utilities
│   ├── carousel.ts         # Screenshot carousel
│   ├── theme.ts            # Dark/light theme management
│   └── interactions.ts     # Interactive elements
├── pages/
│   ├── privacy.html        # Privacy policy
│   ├── terms.html          # Terms of service
│   └── contact.html        # Contact page
└── assets/
    └── img/                # Images and screenshots

dist/                       # Build output (generated)
.github/workflows/          # GitHub Actions
```

## 🎨 Design Features

### Modern UI/UX

- Gradient backgrounds with animated mesh patterns
- Glassmorphism effects and backdrop blur
- Smooth scroll animations and parallax effects
- Micro-interactions on hover and focus states

### Screenshot Showcase

- Interactive carousel with all v3.0.0 app screenshots
- Touch/swipe support for mobile devices
- Auto-play with pause on hover
- Keyboard navigation support

### Accessibility

- ARIA labels and proper semantic HTML
- Keyboard navigation support
- Screen reader announcements
- Focus management and indicators

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push

2. **Custom Domain (Optional)**
   - Uncomment the CNAME creation in `build.sh`
   - Update with your domain name
   - Configure DNS settings

### Manual Deployment

```bash
# Build the site
bun run build

# The built files will be in the dist/ directory
# Upload the contents of dist/ to your web server
```

## 🔧 Configuration

### TailwindCSS

Configuration is in `tailwind.config.js` with custom colors, animations, and utilities.

### Bun Configuration

Settings in `bunfig.toml` enable TailwindCSS plugin and configure the development server.

### Theme System

The theme system supports:

- Light/dark mode toggle
- System preference detection
- Smooth transitions between themes
- Persistent theme selection

## 📱 App Integration

The website showcases the Behavior Observation: BOSS mobile app:

- **Download Links**: Direct links to App Store and Google Play
- **Screenshots**: All v3.0.0 interface screenshots with descriptions
- **Feature Explanations**: Detailed feature descriptions for professionals
- **Professional Focus**: Content tailored for educators and behavior analysts

## 🔒 Privacy & Security

- **Student Data Protection**: Clear privacy policy explaining data handling
- **FERPA Compliance**: Information about educational data protection
- **Professional Use**: Terms focused on qualified professional use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Allen Eubank Technology.

## 📞 Support

For questions or support:

- Email: behaviorobservationtools@gmail.com
- Create an issue in this repository

## 🏗️ Built With

- [Bun](https://bun.sh/) - JavaScript runtime and bundler
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [GitHub Pages](https://pages.github.com/) - Static site hosting

---

**Behavior Observation: BOSS** - Professional behavior observation for educational settings.
