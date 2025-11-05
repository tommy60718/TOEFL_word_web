# Contributing to TOEFL Flashcard App

Thank you for considering contributing to this project! We welcome contributions from the community.

## Development Setup

### Prerequisites
- Node.js 20.11.1 or higher
- npm 8.0+
- Git

### Initial Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/TOEFL_word_web.git
   cd TOEFL_word_web/toefl-flashcard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with Firebase credentials:
   ```bash
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start development:
   ```bash
   npm run dev
   # Visit http://localhost:5173
   ```

## Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following code style guidelines

3. Test locally:
   ```bash
   npm run build
   ```

4. Commit with clear messages (follow Conventional Commits):
   ```bash
   git commit -m "feat(component): add new feature

   - Change 1
   - Change 2"
   ```

5. Push and open a Pull Request

## Code Style

### JavaScript/React
- Use 2 spaces for indentation
- Use camelCase for variables/functions, PascalCase for components
- Prefer functional components with hooks
- Add comments for complex logic

### CSS/Tailwind
- Use Tailwind utility classes (no inline styles)
- Follow mobile-first approach
- Keep shadows and transitions consistent

### Components
- Keep components small and focused
- Extract complex logic into custom hooks
- Document props and behavior

## Design System

### Colors
- **Green**: `#10b981` (primary actions)
- **Blue**: `#3b82f6` (secondary actions)
- **Teal-Blue BG**: `#5cc9a4 → #4a8bcf` (gradient)

### Typography
- **Font**: Inter (300-700 weights from Google Fonts)
- **Headings**: Bold (700 weight)
- **Body**: Regular (400 weight)
- **Accents**: Semibold (600 weight)

### Components
- Cards: `bg-white rounded-2xl shadow-lg`
- Buttons: Gradient background with hover lift
- Progress bars: `h-2 bg-gray-200` with gradient fill
- Header: `sticky top-0 z-50 backdrop-blur-md`

## Project Structure

```
toefl-flashcard/
 src/
   components/      # UI components
   pages/          # Page components
   hooks/          # Custom React hooks
   contexts/       # Context providers
   config/         # Firebase config
   utils/          # Utility functions
   data/           # Vocabulary data
```

## Adding Features

### New Component
1. Create in `src/components/` with PascalCase name
2. Follow existing patterns
3. Document props

### New Custom Hook
1. Create in `src/hooks/` prefixed with `use`
2. Document parameters and return values

### New Page
1. Create in `src/pages/`
2. Add route in `src/App.jsx`
3. Use ProtectedRoute if authentication required

## Testing Checklist

Before submitting a PR:
- [ ] App runs locally without errors
- [ ] All features work as expected
- [ ] Build succeeds: `npm run build`
- [ ] No console errors/warnings
- [ ] Mobile responsive (375px, 768px, 1440px)
- [ ] All links work
- [ ] Authentication works

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Example**:
```
feat(flashcard): add card flip animation

- Implemented 3D flip animation
- Added smooth 0.6s transition

Closes #42
```

## Reporting Issues

Include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Console errors

## Questions?

Check the [README.md](./README.md) or [CHANGELOG.md](./CHANGELOG.md) for overview and version history.

Thank you for contributing! 🚀
