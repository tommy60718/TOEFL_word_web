# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-11-05

### Added
- Firebase Authentication with Google OAuth
- Firebase Authentication with GitHub OAuth
- Firestore cloud database for progress storage
- Complete UI design overhaul with modern aesthetics
- User profile page with account information
- Login page with social authentication
- Protected routes requiring authentication
- Inter font typography system
- Real-time progress sync across devices
- Glassmorphism header with backdrop blur
- Enhanced card components with soft shadows
- Gradient buttons with lift animations
- 8px thin progress bars with gradients

### Changed
- Replaced purple gradient with teal-blue gradient (#5cc9a4 → #4a8bcf)
- Updated color palette: green accents (#10b981), blue secondary (#3b82f6)
- Modernized all UI components with consistent design system
- Improved text contrast for better readability
- Header positioned at page top (flush alignment)
- Progress persistence moved from localStorage to Firestore
- Button styling updated with green/blue gradients

### Fixed
- Eliminated localStorage flickering issues in practice mode
- Optimized component rendering with useCallback
- Fixed header padding pushing content down
- Improved text visibility on gradient backgrounds
- Better focus states for accessibility

### Removed
- Local storage progress sync
- Account creation banner (users must login)
- Purple gradient theme entirely

### Technical
- Added Firebase SDK integration
- Implemented AuthContext for global auth state
- Created custom useAuth hook
- Created useFirestoreProgress hook for cloud sync
- Added ProtectedRoute component
- Enhanced Tailwind configuration with custom colors
- Added keyframe animations (pulse, spin)
- Implemented responsive design testing (mobile, tablet, desktop)

### Security
- Login required to access flashcard content
- User data encrypted in Firestore
- OAuth tokens managed by Firebase
- Environment variables for sensitive credentials

### Documentation
- Updated README.md with v2.0 features
- Added Firebase setup instructions
- Added environment variables documentation
- Updated tech stack in documentation
- Enhanced CONTRIBUTING.md with design system guidelines
- Added commit message conventions
- Added testing checklist and browser support matrix

### Performance
- No performance regression from cloud sync
- Real-time Firestore updates
- Optimized bundle size with code splitting
- Smooth animations with CSS-only transitions

---

## [1.0.0] - 2024-11-02

### Added
- Complete TOEFL vocabulary flashcard application
- 285 vocabulary items (64 prefixes, 159 roots, 62 suffixes)
- Interactive flashcard flip animation
- Spaced repetition algorithm
- Real-time progress tracking
- localStorage persistence
- Responsive mobile design
- Purple gradient UI theme
- Production build optimization
- Vercel deployment configuration

### Features
- **Interactive Flashcards**: Click to flip and reveal definitions
- **Spaced Repetition**: Unknown words automatically reappear after ~5 cards
- **Progress Tracking**: Three progress bars (Mastered, Reviewing, Learning)
- **Auto-Save**: Progress automatically saved to localStorage
- **Responsive**: Works on all devices (mobile, tablet, desktop)
- **Fast**: 65KB gzipped bundle, ~100ms load time on 4G

### Technical
- React 18.3
- Vite 5.x
- React Router 6.x
- Tailwind CSS 3.3.6
- Custom React Hooks
- CSV to JSON data transformation pipeline

---

**Latest Version**: 2.0.0  
**Status**: Production Ready  
**License**: MIT
