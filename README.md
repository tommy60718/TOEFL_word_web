# TOEFL Root/Prefix/Suffix Flashcard App

⭐ **If you find this tool useful, please star this repo! It helps us grow!** ⭐

A modern, interactive web application for mastering TOEFL vocabulary through roots, prefixes, and suffixes. Built with React, Vite, Tailwind CSS, and Firebase.

## Features

- **285 Vocabulary Items**: 64 prefixes, 159 roots, 62 suffixes
- **Interactive Flashcards**: Smooth flip animations with 3D transforms
- **Spaced Repetition**: Automatically resurface words you don't know
- **Progress Tracking**: Real-time progress bars across three learning states
- **Cloud Progress Sync**: Firebase Firestore keeps progress synced across devices
- **Social OAuth**: Sign in with Google or GitHub
- **Modern UI Design**: Beautiful teal-blue gradient with Inter typography
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Production Ready**: Optimized build with fast load times

## Recent Updates (v2.0)

### UI Design Overhaul
- Complete design system refresh with green/blue color palette
- Modern gradient backgrounds (#5cc9a4 → #4a8bcf)
- Inter font throughout for professional appearance
- Enhanced card components with soft shadows and hover effects
- Improved visual hierarchy and typography

### Authentication & Cloud Features
- Firebase Authentication with Google OAuth
- Firebase Authentication with GitHub OAuth
- Firestore cloud database for progress storage
- User profile page with account information
- Automatic progress sync across all devices

### Performance & UX
- Eliminated localStorage flickering issues
- Optimized component rendering with useCallback
- Better contrast for text readability
- Sticky header with glassmorphism effect
- Smooth micro-interactions and animations

## Quick Start

```bash
cd toefl-flashcard

# Install dependencies
npm install

# Set up environment variables (.env file)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Start development server
npm run dev

# Open http://localhost:5173
```

## Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Copy the credentials to `.env` file
3. Enable Google OAuth in Firebase console
4. Add `localhost:5173` as an authorized domain

## Deployment

**Push to GitHub first**, then:

1. Sign in to [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add `.env` variables in project settings
4. Click Deploy

Your app goes live automatically!

## Documentation

- **[Contributing](./CONTRIBUTING.md)** - How to contribute
- **[Changelog](./CHANGELOG.md)** - Version history

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| React Router 6 | Client-side routing |
| Tailwind CSS 3 | Utility-first styling |
| Firebase Auth | Social OAuth authentication |
| Firestore | Cloud NoSQL database |
| Inter Font | Modern typography |
| Vercel | Deployment & hosting |

## Stats

- **285 Vocabulary Items** organized by type
- **3 Decks** (Prefixes, Roots, Suffixes)
- **Build Time**: ~3 seconds
- **Bundle Size**: ~670 KB (176 KB gzipped)
- **Initial Load**: Fast with code splitting

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Quick Fixes

| Issue | Fix |
|-------|-----|
| Port 5173 in use | `npm run dev -- --port 3000` |
| Firebase auth fails | Check `.env` file has all keys |
| Build fails | Run `npm install` again |

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Last Updated**: November 2024 | **Version**: 2.0.0 | **Status**: Production Ready ✨

---

## Support This Project

Don't hesitate to give this repo a ⭐ star if you find this repo useful! Your support helps us continue improving the app for TOEFL learners everywhere.

If you found this helpful, please consider:
- Starring the repository
- Sharing with fellow TOEFL learners
- Contributing improvements
- Reporting issues and suggesting features
