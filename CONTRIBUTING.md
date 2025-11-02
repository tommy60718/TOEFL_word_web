# Contributing to TOEFL Flashcard App

Thank you for considering contributing to this project! 

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/TOEFL_word_web.git
   cd TOEFL_word_web/toefl-flashcard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test locally:
   ```bash
   npm run build
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request

## Code Style

- Use 2 spaces for indentation
- Follow existing code patterns
- Add comments for complex logic
- Keep components small and focused

## Project Structure

```
toefl-flashcard/
 src/
�    components/    # Reusable UI components
�    pages/         # Page-level components
�    hooks/         # Custom React hooks
�    utils/         # Utility functions
�    data/          # JSON data files
```

## Adding New Features

### New Deck
1. Update `src/data/words.json`
2. Regenerate if needed: `node scripts/generateWords.mjs`

### New Component
1. Create in `src/components/`
2. Follow existing naming conventions
3. Add PropTypes or TypeScript types

### New Hook
1. Create in `src/hooks/`
2. Prefix with `use`
3. Document parameters and return values

## Testing

Before submitting:
- [ ] App runs without errors
- [ ] All features work as expected
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors
- [ ] Mobile responsive

## Reporting Issues

Please include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Check the [documentation](./docs/) or open an issue.

Thank you for contributing!

