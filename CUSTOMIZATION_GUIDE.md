# Portfolio Customization Guide

This guide will walk you through customizing your portfolio website with your personal information, projects, and styling preferences.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Projects Section](#projects-section)
3. [Skills Section](#skills-section)
4. [Contact Information](#contact-information)
5. [Color Scheme](#color-scheme)
6. [Adding Your Resume](#adding-your-resume)
7. [Adding Photos/Images](#adding-photosimages)

---

## Personal Information

### Hero Section (`src/components/Hero.jsx`)

**Line 15-20**: Update your name and title
```jsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-4">
  Your Name  // ← Change this
</h1>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6">
  Aspiring Software Engineer  // ← Change this
</h2>
```

**Line 24-29**: Update your bio
```jsx
<p className="text-lg text-gray-700 leading-relaxed">
  4th-year Computer Science student passionate about...  // ← Change this entire paragraph
  Specializing in <span className="font-semibold text-primary">Full-Stack Development</span>
  ...
</p>
```

### About Section (`src/components/About.jsx`)

**Line 43-51**: Update education details
```jsx
<p className="text-gray-700">
  <span className="font-semibold">B.S. in Computer Science</span>
  <br />
  Your University Name  // ← Change this
  <br />
  Expected Graduation: May 2026  // ← Change this
  <br />
  <span className="text-sm text-gray-600">Focus: Software Engineering & Web Development</span>
</p>
```

**Line 64-71**: Update your passion statement
```jsx
<p className="text-gray-700">
  I'm passionate about creating innovative solutions...  // ← Customize this
</p>
```

**Line 84-92**: Update career goals
```jsx
<p className="text-gray-700">
  Seeking opportunities as a Software Engineer...  // ← Customize this
</p>
```

### Footer (`src/components/Footer.jsx`)

**Line 37-42**: Update your name
```jsx
<div>
  <h3 className="text-2xl font-bold mb-4">Your Name</h3>  // ← Change this
  <p className="text-gray-400">
    Computer Science Student & Aspiring Software Engineer
  </p>
</div>
```

---

## Projects Section

### Adding/Editing Projects (`src/components/Projects.jsx`)

**Line 4-68**: Modify the projects array

```jsx
const projects = [
  {
    title: 'E-Commerce Dashboard',  // Your project name
    description: 'A responsive e-commerce dashboard...',  // Brief description
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],  // Technologies used
    github: '#',  // Your GitHub repo URL
    demo: '#',  // Live demo URL
    color: 'blue'  // Color theme: blue, emerald, purple, orange, indigo, rose
  },
  // Add more projects here...
];
```

**Example of adding a new project:**
```jsx
{
  title: 'My Awesome App',
  description: 'A revolutionary mobile app that helps users track their daily habits and achieve their goals.',
  techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  github: 'https://github.com/yourusername/awesome-app',
  demo: 'https://awesome-app-demo.netlify.app',
  color: 'emerald'
},
```

**To remove a project**: Simply delete its entire object from the array.

---

## Skills Section

### Updating Skills (`src/components/Skills.jsx`)

**Line 9-35**: Modify the skillCategories array

```jsx
const skillCategories = [
  {
    title: 'Languages',
    icon: CodeBracketIcon,
    color: 'blue',
    skills: ['Python', 'Java', 'JavaScript', 'C++', 'HTML5', 'CSS3']  // ← Edit this array
  },
  {
    title: 'Frontend',
    icon: CommandLineIcon,
    color: 'emerald',
    skills: ['React', 'Tailwind CSS', 'Redux', 'Next.js', 'Responsive Design']  // ← Edit this
  },
  // ... more categories
];
```

**To add a new skill category:**
```jsx
{
  title: 'Cloud & DevOps',
  icon: ServerIcon,
  color: 'indigo',
  skills: ['AWS', 'Azure', 'Kubernetes', 'CI/CD', 'Terraform']
},
```

---

## Contact Information

### Social Links (`src/components/Contact.jsx`)

**Line 34-63**: Update social media URLs

```jsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',  // ← Change this
    icon: (/* SVG */)
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',  // ← Change this
    icon: (/* SVG */)
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',  // ← Change this
    icon: <EnvelopeIcon className="h-6 w-6" />
  }
];
```

**Line 163-172**: Update @yourusername displays
```jsx
<div>
  <p className="font-medium">{link.name}</p>
  <p className="text-sm text-gray-500">@yourusername</p>  // ← Change this
</div>
```

### Footer Social Links (`src/components/Footer.jsx`)

**Line 5-33**: Update URLs (similar to Contact.jsx)
```jsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',  // ← Change this
    // ...
  },
  // ... more links
];
```

---

## Color Scheme

### Primary Colors (`tailwind.config.js`)

**Line 8-12**: Change the main color palette
```js
extend: {
  colors: {
    primary: '#2563eb',    // Main blue - buttons, links, accents
    secondary: '#1e293b',  // Dark slate - text, headings
    accent: '#059669',     // Emerald - secondary accents
  },
}
```

**Popular Color Combinations:**

**Professional Blue:**
```js
primary: '#2563eb',
secondary: '#1e293b',
accent: '#3b82f6',
```

**Modern Purple:**
```js
primary: '#8b5cf6',
secondary: '#1e1b4b',
accent: '#a78bfa',
```

**Tech Green:**
```js
primary: '#10b981',
secondary: '#064e3b',
accent: '#34d399',
```

**Bold Orange:**
```js
primary: '#f97316',
secondary: '#1c1917',
accent: '#fb923c',
```

---

## Adding Your Resume

### Option 1: PDF in Public Folder

1. Add your resume PDF to the `public` folder:
   ```
   portfolio/
   └── public/
       └── resume.pdf  ← Add your file here
   ```

2. Update the link in `src/components/Hero.jsx` (Line 38-44):
   ```jsx
   <a
     href="/resume.pdf"  // ← Link to your PDF
     download="YourName-Resume.pdf"  // ← Filename for download
     className="group flex items-center gap-2..."
   >
     <ArrowDownTrayIcon className="h-5 w-5..." />
     Download Resume
   </a>
   ```

### Option 2: External Link (Google Drive, Dropbox)

```jsx
<a
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2..."
>
  <ArrowDownTrayIcon className="h-5 w-5..." />
  View Resume
</a>
```

---

## Adding Photos/Images

### Profile Picture in About Section

1. Add your photo to `src/assets/`:
   ```
   portfolio/src/assets/
   └── profile.jpg  ← Add your photo here
   ```

2. Replace the icon in `src/components/About.jsx` (Line 17-25):
   ```jsx
   // Import at the top
   import profilePhoto from '../assets/profile.jpg';
   
   // Replace the decorative div with:
   <div className="relative">
     <img 
       src={profilePhoto} 
       alt="Your Name" 
       className="rounded-lg shadow-lg w-full h-96 object-cover"
     />
     {/* Keep decorative elements */}
   </div>
   ```

### Project Screenshots

1. Add images to `public/projects/`:
   ```
   portfolio/public/projects/
   ├── project1.png
   ├── project2.png
   └── project3.png
   ```

2. Update `src/components/Projects.jsx`:
   ```jsx
   const projects = [
     {
       title: 'E-Commerce Dashboard',
       description: '...',
       image: '/projects/project1.png',  // ← Add this
       techStack: [...],
       // ...
     },
   ];
   ```

3. Display the image in the project card (Line 84-93):
   ```jsx
   <div className="bg-white rounded-lg shadow-md...">
     {/* Add image before the gradient header */}
     {project.image && (
       <img 
         src={project.image} 
         alt={project.title} 
         className="w-full h-48 object-cover"
       />
     )}
     
     {/* Keep existing gradient header */}
     <div className={`bg-gradient-to-r...`}>
       ...
     </div>
   </div>
   ```

---

## Contact Form Setup

The contact form is currently client-side only. To make it functional:

### Option 1: FormSpree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `src/components/Contact.jsx` (Line 21-26):
   ```jsx
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     try {
       const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
       
       if (response.ok) {
         setSubmitted(true);
         setTimeout(() => setSubmitted(false), 3000);
         setFormData({ name: '', email: '', message: '' });
       }
     } catch (error) {
       console.error('Error:', error);
     }
   };
   ```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
3. Follow their React integration guide

---

## Typography

### Changing Fonts (`tailwind.config.js`)

**Line 13-15**: Update font family
```js
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],  // ← Change this
},
```

**Popular font combinations:**
```js
// Modern & Clean
sans: ['Poppins', 'sans-serif'],

// Professional
sans: ['Roboto', 'Arial', 'sans-serif'],

// Elegant
sans: ['Playfair Display', 'serif'],

// Tech-focused
sans: ['Fira Code', 'monospace'],
```

**Don't forget to import the font in `index.html`:**
```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

---

## Final Checklist

Before deploying, make sure you've updated:

- [ ] Name in Hero, About, and Footer
- [ ] Education details in About
- [ ] Career goals and bio
- [ ] All project information
- [ ] Skills list
- [ ] Social media links (GitHub, LinkedIn, Email)
- [ ] Resume link
- [ ] Color scheme (optional)
- [ ] Profile photo (optional)
- [ ] Project screenshots (optional)
- [ ] Meta tags in `index.html` for SEO
- [ ] Favicon in `public` folder

---

## Need Help?

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **Heroicons**: https://heroicons.com
- **Color Palette Generator**: https://coolors.co

Happy customizing! 🎨
