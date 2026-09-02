# Emmanuel Gospel Ministries Website - Setup & Deployment Guide

## Project Overview
A professional, responsive website for Emmanuel Gospel Ministries built with React, TypeScript, Tailwind CSS, and Vite.

## Features Implemented
✅ Responsive design (mobile-first)
✅ Smooth scroll navigation
✅ Hero section with animations
✅ About/Welcome section
✅ 9 Ministry areas showcase
✅ Vision statement with 5 pillars
✅ Mission statement (6 components)
✅ Upcoming meetings/events listing
✅ Prayer request form
✅ Testimonies section
✅ Media gallery with categories
✅ Missions/Outreach initiatives
✅ Partnership opportunities
✅ Giving/Donation options
✅ Contact form
✅ Professional footer with quick links
✅ Mobile navigation menu
✅ SEO optimized
✅ Performance optimized

## Prerequisites
- Node.js 16+ and npm
- Git

## Local Development Setup

### 1. Clone and Install
```bash
cd church-main
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or next available port)

### 3. Build for Production
```bash
npm run build
npm run preview  # Preview production build locally
```

## Project Structure
```
src/
├── components/         # React components for each page section
│   ├── Navbar.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── Welcome.tsx    # About section
│   ├── Ministries.tsx # Ministry areas
│   ├── Vision.tsx     # Vision section
│   ├── Mission.tsx    # Mission statement
│   ├── Meetings.tsx   # Events listing
│   ├── PrayerRequest.tsx # Prayer form
│   ├── Contact.tsx    # Contact form
│   ├── Testimonies.tsx
│   ├── Media.tsx
│   ├── Missions.tsx
│   ├── Partnership.tsx
│   ├── Give.tsx
│   └── Footer.tsx
├── hooks/             # Custom React hooks
│   ├── useScroll.ts
│   └── useScrollReveal.ts
├── lib/
│   └── constants.ts   # Constants (ministry info, nav links, etc)
├── App.tsx            # Main app component
├── index.css          # Global styles and animations
└── main.tsx           # Entry point
```

## Key Configuration Files
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## Customization Guide

### Update Ministry Information
Edit `src/lib/constants.ts`:
```typescript
export const MINISTRY = {
  name: 'Emmanuel Gospel Ministries',
  leader: 'Evangelist Emmanuel Abraham',
  location: 'Hyderabad, Telangana, India',
  phone: '+91-XXXXXXXXXX',
  whatsapp: '+91-XXXXXXXXXX',
  email: 'info@emmanuelgospelministries.org',
}
```

### Update Social Media Links
Edit `src/lib/constants.ts`:
```typescript
export const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://youtube.com/@yourhandle', icon: 'youtube' },
  { label: 'Facebook', href: 'https://facebook.com/yourpage', icon: 'facebook' },
  // ... etc
]
```

### Add/Update Events
Edit `src/components/Meetings.tsx` and update the `EVENTS` array with upcoming meetings.

### Update Testimonies
Edit `src/components/Testimonies.tsx` and update the `TESTIMONIES` array with verified testimonies.

### Customize Colors
Edit `tailwind.config.js` to change the color scheme (burgundy, gold, ivory, charcoal, etc.)

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import the repository
4. Deploy
5. Deploy

### Option 2: Netlify
1. Push code to GitHub
2. Go to https://app.netlify.com/
3. New site from Git
4. Select repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy

### Option 3: Self-hosted
1. Build: `npm run build`
2. The `dist` folder contains static files ready for deployment
3. Deploy to any static hosting (Apache, Nginx, etc.)

## Form Submissions

### Prayer Requests
- Submitted via `/src/components/PrayerRequest.tsx`
- Includes categories: Salvation, Family, Healing, Guidance, Provision, Deliverance, Ministry, Other

### Contact Messages
- Submitted via `/src/components/Contact.tsx`
- Includes name, email, phone, country, and message

## Important Notes

### Security
- Never commit `.env` file to version control

### Contact Information Placeholders
The following need to be updated with real information:
- Phone number in Contact section
- WhatsApp number in Contact section
- Email address in Contact section
- Social media URLs
- Bank transfer details in Give section
- UPI ID in Give section
- International giving information

## Troubleshooting

### Forms Not Submitting
1. Check browser console for error messages
2. Clear browser cache and retry

### Styles Not Loading
1. Delete `node_modules` and `.next` folder
2. Run `npm install` again
3. Restart dev server

### Build Errors
1. Run `npm run typecheck` to check TypeScript errors
2. Run `npm run lint` to check ESLint errors
3. Make sure all required environment variables are set

## Performance Optimization
- Images optimized with responsive sizes
- Lazy loading for images
- Smooth scroll animations
- CSS animations use GPU acceleration
- Code splitting with React.lazy (if needed)
- Minified production build

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Mobile-friendly responsive design

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari 12+
- Chrome Android (latest)

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run typecheck # Check TypeScript types
```

## Support & Maintenance

### Regular Tasks
- Monitor form submissions
- Update event listings regularly
- Keep testimonies current
- Update social media links
- Check for security updates in dependencies

### Updates
```bash
npm update       # Update dependencies
npm audit fix    # Fix security vulnerabilities
```

## License
All rights reserved © 2026 Emmanuel Gospel Ministries

## Contact for Support
For technical support or customization needs, contact the development team.

---

**Website URL**: Will be provided after deployment
**Last Updated**: September 1, 2026
