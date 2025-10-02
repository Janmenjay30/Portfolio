# Modern Portfolio Website 🚀

A professional, responsive portfolio website built with React and Tailwind CSS for showcasing your projects, skills, and experience as an aspiring Software Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success) ![React](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project cards with tech stack badges
- **Skills Display**: Organized skills grid by category
- **Social Integration**: Links to GitHub, LinkedIn, and other platforms

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS 3
- **Icons**: Heroicons
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed navigation with active section highlighting
│   │   ├── Hero.jsx        # Landing section with CTA buttons
│   │   ├── About.jsx       # About section with education and goals
│   │   ├── Skills.jsx      # Technical skills grid
│   │   ├── Projects.jsx    # Project showcase cards
│   │   ├── Contact.jsx     # Contact form and social links
│   │   └── Footer.jsx      # Footer with links
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles and Tailwind directives
├── public/                  # Static assets
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## 🎨 Customization Guide

### 1. Personal Information
Update `src/components/Hero.jsx`, `About.jsx`, and `Footer.jsx` with your name, bio, and education details.

### 2. Projects
Edit `src/components/Projects.jsx`:
```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description...',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/repo',
    demo: 'https://your-demo-url.com',
    color: 'blue'
  },
];
```

### 3. Skills
Update `src/components/Skills.jsx` with your technical skills.

### 4. Social Links
Update URLs in `Contact.jsx` and `Footer.jsx` with your GitHub, LinkedIn, and email.

### 5. Color Scheme
Modify `tailwind.config.js`:
```js
colors: {
  primary: '#2563eb',
  secondary: '#1e293b',
  accent: '#059669',
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## 💡 Key Features Explained

### Smooth Scrolling
Implemented using CSS `scroll-behavior: smooth` and JavaScript scroll functions.

### Active Section Highlighting
Navigation automatically highlights the current section as you scroll.

### Responsive Design
Mobile-first approach with Tailwind breakpoints (sm, md, lg, xl).

### Animations
Fade-in animations, hover effects, and smooth transitions throughout.

## 🤝 Tips for Success

1. **Add Professional Photos**: Replace placeholder content with your headshot
2. **Update Meta Tags**: Edit `index.html` for better SEO
3. **Custom Domain**: Connect a custom domain to your deployment
4. **Keep Updated**: Regularly add new projects and skills
5. **Add Analytics**: Track visitors with Google Analytics

## 📧 Support

Questions? Feel free to reach out or open an issue!

---

**Built with ❤️ using React and Tailwind CSS**

Good luck with your job search! 🎯
