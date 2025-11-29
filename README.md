# Dubai Hostels - Premium Booking Platform

A modern, glassmorphism-designed hostel booking website for Dubai with dual-language support (English/Persian).

## Features

- 🎨 **Glassmorphism Design**: Stunning frosted glass effects throughout the UI
- 🌐 **Dual Language**: Full RTL support for Persian and LTR for English
- ⚡ **Next.js 14**: Built with the latest App Router for optimal performance
- 🎭 **Smooth Animations**: Complex animations using Framer Motion
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 💬 **WhatsApp Integration**: Direct booking through WhatsApp Business
- 🏨 **Dynamic Hostel Data**: Real-time hostel information and availability
- 💬 **Interactive Comments**: Social media style comments section
- 🔍 **SEO Optimized**: Built-in internationalization and meta optimization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Typography**: Inter (English) + Vazir (Persian)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   └── globals.css        # Global styles with glassmorphism
├── components/            # React components
│   ├── Navigation.tsx     # Animated navigation bar
│   ├── Hero.tsx          # Hero section with floating elements
│   ├── HostelCard.tsx    # Glassmorphism hostel cards
│   ├── CommentsSection.tsx # Interactive comments
│   └── Footer.tsx        # Footer with social links
├── data/                 # Data layer
│   └── hostels.ts        # Hostel data and utilities
├── i18n.ts              # Internationalization config
└── middleware.ts        # Next.js middleware for routing
\`\`\`

## Glassmorphism Design System

The website uses a comprehensive glassmorphism design system with these CSS classes:

- `.glass` - Basic glass effect
- `.glass-dark` - Dark variant for contrast
- `.glass-card` - Enhanced glass for cards with hover effects
- `.glass-nav` - Specialized glass for navigation

## Language Support

- **English** (\`/en\`): Left-to-right layout with Inter font
- **Persian** (\`/fa\`): Right-to-left layout with Vazir font

## WhatsApp Integration

Direct booking through WhatsApp without displaying phone numbers:
- Localized booking messages
- Business WhatsApp integration
- Privacy-focused communication

## Deployment

Build the project for production:

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization

### Adding New Hostels

Edit \`src/data/hostels.ts\` to add new hostel data with both English and Persian translations.

### Modifying Glassmorphism

Customize the glass effects in \`src/app/globals.css\` and \`tailwind.config.js\`.

### Animation Tweaks

Modify animations in individual components or add new ones using Framer Motion variants.

## Performance Optimizations

- Lazy loading for images and animations
- Intersection Observer for scroll-triggered animations
- Optimized font loading with next/font
- Efficient bundle splitting with Next.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details.