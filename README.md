# Spin & Spur Co. Website

This is a professional website for Spin & Spur Co., featuring an animated intro splash screen and a modern home page. The original design is available at https://www.figma.com/design/CBLS01H1I32T1LnT9qD2ae/Spin-Spur-Co.

## Features

- 🎨 Animated intro/splash screen with logo animation
- 🏠 Professional home page with responsive design
- ⚡ High-performance, optimized for Vercel deployment
- 📱 Fully responsive and mobile-friendly
- ♿ Accessibility-focused with WCAG compliance
- 🎭 Smooth animations with hardware acceleration
- 🔒 Security headers configured for production

## Running the code

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000/`

### Production Build

Build for production:
```bash
npm run build
```

The output will be in the `build/` directory.

## Deploying to Vercel

This project is optimized for Vercel deployment:

1. **Connect your repository** to Vercel
2. Vercel will automatically detect it's a Vite project
3. The build command is already configured: `npm run build`
4. The output directory is: `build`

### Custom Domain Setup

To connect to `www.spinandspurco.com.au`:

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain: `www.spinandspurco.com.au`
4. Follow Vercel's instructions to update your DNS records
5. Vercel will automatically provision SSL certificates

## Project Structure

```
src/
├── components/
│   ├── Logo.tsx           # Reusable animated logo component
│   ├── IntroScreen.tsx    # Splash screen with intro animation
│   ├── IntroScreen.css    # Intro screen styles
│   ├── HomePage.tsx       # Main home page content
│   └── HomePage.css       # Home page styles
├── styles/
│   └── global.css        # Global styles and CSS variables
├── App.tsx               # Main app component with routing logic
└── main.tsx             # Application entry point
```

## Performance Optimizations

- Hardware-accelerated animations using `transform: translateZ(0)`
- CSS animations with `will-change` for smooth transitions
- Optimized bundle size with code splitting
- Responsive images and modern CSS
- Session storage to prevent repeated intro animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

Copyright © 2025 Spin & Spur Co. All rights reserved.
