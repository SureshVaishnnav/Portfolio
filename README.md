# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for showcasing mobile app development projects and professional skills.

## ✨ Features

### 🎨 Design & Animations
- **Smooth Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover animations on cards, buttons, and images
- **Modern UI**: Clean, professional design with gradient accents
- **Responsive Design**: Fully responsive across all devices
- **Premium Feel**: Smooth transitions and professional animations

### 📱 Mobile Developer Focus
- **Project Showcase**: Display mobile app screenshots with descriptions
- **App Templates**: Download section for ready-to-use app templates
- **Skills Section**: Technical skills with progress bars and technology icons
- **Professional Experience**: Detailed work history and education

### 🚀 Key Sections
1. **Hero Section**: Animated introduction with resume download
2. **About Me**: Professional details and experience
3. **Skills**: Technical expertise with visual progress bars
4. **Projects**: Mobile app portfolio with screenshots
5. **App Templates**: Downloadable app templates for clients
6. **Contact**: Contact form and social links

### 🛠 Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Intersection Observer** for scroll animations
- **Custom Hooks** for reusable functionality
- **Responsive Grid Layouts**
- **Form Handling** with validation
- **Smooth Scrolling** navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with animated text
│   ├── About.tsx             # About me section
│   ├── Skills.tsx            # Skills and technologies
│   ├── Projects.tsx          # Project showcase
│   ├── AppTemplates.tsx      # App template downloads
│   ├── Contact.tsx           # Contact form and info
│   └── Navbar.tsx            # Navigation bar
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for animations
├── App.tsx                   # Main app component
├── App.css                   # Global styles and animations
└── vite-env.d.ts            # Vite environment types
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Personal details, experience, education
- `src/components/Contact.tsx` - Contact information and social links

### Projects
Edit `src/components/Projects.tsx` to add your mobile app projects:
```typescript
const projects = [
  {
    id: 1,
    title: "Your App Name",
    description: "App description...",
    image: "path/to/screenshot.png",
    technologies: ["React Native", "Firebase"],
    category: "Category",
    downloads: "100K+",
    rating: 4.8,
    link: "#"
  }
];
```

### App Templates
Update `src/components/AppTemplates.tsx` with your actual templates:
```typescript
const templates = [
  {
    id: 1,
    name: "Your Template",
    description: "Template description...",
    price: "$99",
    features: ["Feature 1", "Feature 2"],
    downloads: 1000,
    rating: 4.8
  }
];
```

### Styling
- Modify `src/App.css` for custom animations and styles
- Update color schemes in Tailwind classes
- Customize gradients and hover effects

## 📱 Mobile App Screenshots

The portfolio includes placeholder images for mobile app screenshots. Replace these with your actual app screenshots:

1. Update image URLs in the projects array
2. Use high-quality screenshots (recommended: 300x600px)
3. Ensure screenshots showcase your app's best features

## 🎯 Features in Detail

### Scroll Animations
- **Fade In**: Elements fade in from bottom
- **Slide In**: Elements slide in from left/right
- **Scale In**: Elements scale up into view
- **Staggered Delays**: Sequential animation timing

### Hover Effects
- **Scale**: Elements scale up on hover
- **Lift**: Cards lift with shadow on hover
- **Underline**: Text gets animated underline
- **Color Transitions**: Smooth color changes

### Interactive Elements
- **Smooth Scrolling**: Navigation to sections
- **Form Validation**: Contact form with validation
- **Download Buttons**: Resume and template downloads
- **Social Links**: Professional social media integration

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Firebase Hosting**: Use Firebase CLI

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue or contact me.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
