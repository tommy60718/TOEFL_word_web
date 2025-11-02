#  TOEFL Flashcard App - Complete User Guide

Welcome! This guide covers everything you need to know to use and deploy the TOEFL Root/Prefix/Suffix Flashcard App.

---

## ‹ Table of Contents

1. [Getting Started](#getting-started)
2. [Using the App](#using-the-app)
3. [Local Development](#local-development)
4. [Deploying to Vercel](#deploying-to-vercel)
5. [Troubleshooting](#troubleshooting)
6. [FAQ](#faq)

---

##  Getting Started

### What is This App?

A web-based flashcard application for learning TOEFL vocabulary through **roots, prefixes, and suffixes**. It features:
- 285 vocabulary items (64 prefixes, 159 roots, 62 suffixes)
- Interactive card flip animation
- Spaced repetition algorithm
- Real-time progress tracking
- Automatic progress saving

### System Requirements

**Minimum:**
- Node.js 20.11.1+
- npm 10.7.0+
- Modern web browser (Chrome, Firefox, Safari, Edge)

**Recommended:**
- Node.js 20.19+ or 22.12+
- Chrome/Firefox on desktop or any modern mobile browser

---

##  Using the App

### Start the App Locally

```bash
cd toefl-flashcard
npm install
npm run dev
```

Open: http://localhost:5173

### Home Page - Deck Selection

**What You See:**
- 3 deck cards: Prefixes, Roots, Suffixes
- Progress for each deck
- Purple gradient background

**What You Do:**
1. Click any deck card to start practicing
2. See total words (285 total for all decks)
3. See how many you've mastered (initially 0)
4. Green progress bar shows your mastery

### Practice Page - Learn Vocabulary

#### Front of Card (Initial)
```

‚     NEW WORD                ‚
‚                             ‚
‚    a, ac, ad, af, ag       ‚
‚    al, an, ap, as, at      ‚
‚                             ‚
‚  Click to see definition † ‚
˜
```

- **Root/Prefix/Suffix**: Large text showing the word element
- **"NEW WORD" Badge**: Only on first encounter
- **Prompt**: "Click to see definition and example †"

**Action**: Click anywhere on the card

#### Back of Card (After Click)
```

‚     NEW WORD                        ‚
‚                                     ‚
‚  a, ac, ad, af, ag, al, an, ap...  ‚
‚                                     ‚
‚  Prefix: to, toward, near, in add. ‚
‚          to, by                     ‚
‚                                     ‚
‚  Examples: aside, accompany,        ‚
‚            adjust, aggression       ‚
‚                                     ‚
‚     ‚
‚  ‚  I knew     ‚  I didn't   ‚   ‚
‚  ‚   this word  ‚   know this  ‚   ‚
‚  ´˜   ‚
˜
```

- **Type**: Prefix/Root/Suffix
- **Definition**: Meaning in English
- **Examples**: Up to 4 example words
- **Buttons**: Two action buttons

**Actions:**
- Green Button  "I knew this word"
  - Marks as MASTERED
  - Removes from queue
  - Advances to next card
  
- Red Button  "I didn't know this word"
  - Marks as LEARNING
  - Reappears after ~5 cards
  - Advances to next card

#### Progress Bars (Bottom)

Three real-time progress bars:

1. **Mastered**: Green fill (words you know perfectly)
2. **Reviewing**: Shows words cycling back for practice
3. **Learning**: Shows words you're actively learning

Example:
```
You have mastered 5 out of 51 words
[‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘] 10%

You are reviewing 0 out of 51 words
[‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘] 0%

You are learning 7 out of 51 words
[‘‘‘‘‘‘‘‘‘‘‘‘‘‘‘] 14%
```

### Navigation

- **† Deck Name** (top left): Go back to home
- ** Shuffle Icon** (top right): Indicates words will reappear
- **Green Banner**: Encourages creating account (optional)
- **Footer**: Support contact information

### Session Behavior

**What Happens During a Session:**

1. **You see a new card** (front with word)
2. **You click the card** (card flips, definition appears)
3. **You choose**: "I knew it" OR "I didn't know"
4. **Card auto-advances** (with "Loading next word..." state)
5. **Progress bars update** (in real-time)
6. **Next card appears** (front side, ready to flip)
7. **Repeat** until you're done practicing

**Spaced Repetition:**
- Unknown words stored in queue
- After ~5 new cards, unknown word reappears
- Forces you to practice difficult words more
- Keeps sessions challenging but focused

---

## ¾ Progress Tracking

### How Progress is Saved

 **Automatic**: Every action saves automatically to browser
 **No Login**: Requires no account or authentication
 **Offline**: Works even without internet
 **Persistent**: Survives page refresh and browser restart

### Progress Storage Location

Saved in browser's localStorage under key: `toefl-progress`

```javascript
{
  "prefix-deck": {
    "mastered": [...word IDs],
    "learning": [...word IDs],
    "reviewing": [...word IDs]
  },
  "root-deck": {...},
  "suffix-deck": {...}
}
```

### Clear Progress

To reset your progress:
1. Open browser DevTools (F12)
2. Go to Application † Local Storage
3. Find `toefl-progress`
4. Delete it
5. Refresh page

---

##  Local Development

### Installation

```bash
# Navigate to app directory
cd toefl-flashcard

# Install dependencies (one time)
npm install
```

### Running Locally

```bash
# Start dev server
npm run dev

# Server runs on http://localhost:5173
# Auto-reloads on file changes
```

### Building for Production

```bash
# Create optimized build
npm run build

# Output in dist/ directory
# Ready for deployment
```

### Stopping the Server

Press `Ctrl + C` in terminal

---

##  Deploying to Vercel

### Why Vercel?

 Free for individuals
 Easy 1-command deploy
 Auto-HTTPS
 CDN for fast loading
 Environment variables support
 Analytics and monitoring

### Quick Deploy (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Login
```bash
vercel login
```
Opens browser for authentication with GitHub or email.

#### Step 3: Deploy
```bash
cd /Users/linyangsen/Desktop/side\ projects/TOEFL_word_web/toefl-flashcard
vercel --prod
```

#### Step 4: Verify
- Terminal shows deployment URL
- Vercel dashboard shows build logs
- Visit URL to test live app

### Deploy via GitHub (Auto-deploy)

#### Step 1: Push to GitHub
```bash
cd /Users/linyangsen/Desktop/side\ projects/TOEFL_word_web

git init
git add .
git commit -m "TOEFL flashcard app"
git remote add origin https://github.com/YOUR_USERNAME/toefl-flashcard.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your repository
4. Click "Deploy"

**Benefit**: Every future push to GitHub auto-deploys!

### What Gets Deployed

**Files Included:**
- All source code in `src/`
- Generated `words.json` (285 vocabulary items)
- `dist/` production build

**Size:**
- JavaScript: 65.48 KB gzipped
- CSS: 3.02 KB gzipped
- Total: ~68 KB

**Performance:**
- Initial load: ~100ms on 4G
- First paint: < 1 second

---

##  Testing After Deployment

Visit your live URL and verify:

- [ ] Home page displays 3 deck cards
- [ ] Deck card shows progress
- [ ] Click deck card enters practice
- [ ] Card shows root/prefix/suffix on front
- [ ] Click card reveals definition
- [ ] Green button works ("I knew it")
- [ ] Red button works ("I didn't know")
- [ ] Progress bars update
- [ ] Back button returns to home
- [ ] Progress persists after refresh
- [ ] Works on mobile phone
- [ ] Unknown words reappear later

---

##  Troubleshooting

### Installation Issues

**Error: "npm: command not found"**
- Node.js not installed
- Download from https://nodejs.org
- Install LTS version
- Restart terminal

**Error: "EACCES: permission denied"**
- Try: `sudo chown -R $USER ~/.npm`
- Or use NVM: https://github.com/nvm-sh/nvm

### Development Issues

**Port 5173 already in use**
```bash
# Run on different port
npm run dev -- --port 3000
```

**"Cannot find module" error**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**CSS not loading**
```bash
# Rebuild Tailwind
npm install tailwindcss@3.3.6 --save-exact
```

**Blank page on http://localhost:5173**
1. Check browser console (F12)
2. Look for errors
3. Restart dev server: `npm run dev`

### Deployment Issues

**Build fails**
```bash
# Verify build works locally
npm run build

# Check for errors in output
```

**Routes not working (404)**
- Vercel.json configured for SPA routing
- Should be automatic
- Check Project Settings if needed

**Progress not saving**
- Check browser allows localStorage
- Private browsing disables localStorage
- Try different browser

### Performance Issues

**App loads slowly**
- Clear browser cache
- Check internet connection
- Try incognito/private mode

**Spaced repetition not working**
- Ensure localStorage enabled
- Check browser console for errors

---

##  FAQ

### How many words are in each deck?

- **Prefixes**: 64 word elements
- **Roots**: 159 word elements
- **Suffixes**: 62 word elements
- **Total**: 285 vocabulary items

### Can I download the app?

Not yet, but you can:
- Run locally: `npm run dev`
- Deploy to your own server
- Build as PWA (future feature)

### Does it work offline?

Partially:
-  Works without internet after loading
-  Need internet to deploy/update

### Can I add my own words?

Not in current version, but planned:
- [ ] Custom deck creation
- [ ] CSV import feature
- [ ] Word list management

### How does spaced repetition work?

1. New card † you mark "didn't know"
2. Card enters learning queue
3. After ~5 other cards, it reappears
4. Repeats until you master it
5. Focuses practice on difficult words

### Can I share my progress with friends?

Not directly, but you can:
- Share deck link
- Friends have separate progress
- Future: export/import progress

### What's the difference between Mastered/Reviewing/Learning?

- **Learning**: Newly encountered, didn't know
- **Reviewing**: Cycling back for practice
- **Mastered**: Know perfectly, removed from queue

### How long should I practice?

Recommended: 10-15 cards per session
- Optimal for retention
- Prevents fatigue
- Daily practice better than cramming

### Can I delete my progress?

Yes, manually:
1. Open DevTools (F12)
2. Application † Local Storage
3. Delete `toefl-progress`
4. Refresh page

### Is my data secure?

- Stored locally in browser
- Never sent to server
- No privacy concerns
- Lost if browser cache cleared

### Can I customize the appearance?

Yes, but requires editing code:
- Colors: `tailwind.config.js`
- Layout: component files
- See development section

---

##  Additional Resources

### Setup Help
- [QUICK_START.md](./QUICK_START.md) - Fast setup guide
- [React Official Docs](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

### Deployment Help
- [DEPLOY_TO_VERCEL.md](./toefl-flashcard/DEPLOY_TO_VERCEL.md) - Detailed deployment
- [Vercel Documentation](https://vercel.com/docs)
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Technical details

### Learning Help
- [TOEFL Vocabulary Guide](https://toefl.magoosh.com)
- [Word Roots and Prefixes](https://www.merriam-webster.com)
- [Etymology Resources](https://www.etymonline.com)

---

##  Learning Tips

### Effective Studying

1. **Practice Regularly**
   - 10-15 minutes daily better than 2 hours weekly
   - Consistency builds memory

2. **Focus on Unknown**
   - Red button words (didn't know) get priority
   - System cycles them back automatically

3. **Say It Out Loud**
   - Hearing words helps memory
   - Strengthens neural pathways

4. **Use in Sentences**
   - Make your own example sentences
   - Applies knowledge to real usage

5. **Review After Gaps**
   - Wait a day, then practice again
   - Spaced repetition strengthens retention

### Mastery Levels

- **0-25%**: Just started, focus on familiarity
- **25-50%**: Getting comfortable, speed up learning
- **50-75%**: Mostly known, drill weak areas
- **75-100%**: Nearly mastered, final review

---

##  Ready to Start?

```bash
# 1. Install
cd toefl-flashcard
npm install

# 2. Run locally
npm run dev

# 3. Open browser
# http://localhost:5173

# 4. Start learning!
```

**Have fun learning! **

---

**Last Updated**: November 2024
**Version**: 1.0.0
**Status**: Production Ready
