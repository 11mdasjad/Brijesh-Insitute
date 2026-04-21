# Brijesh Institute - Premium Education Website

A modern, fully responsive, professional website for Brijesh Institute using React.js, Tailwind CSS, and Framer Motion animations.

## 🌟 Features

### Pages & Sections
- **Home Page**: Hero section with rating, stats, and features
- **About Us**: Mission, vision, and why choose us section
- **Courses**: Detailed course cards with fees and features
- **Gallery**: Photo gallery and student testimonials
- **Contact**: Contact form, Google Maps, and FAQs

### Components
- **Sticky Navbar**: Responsive navigation with smooth scrolling
- **Admission Modal**: Form with validation (Name, Email, Phone, Class, Message)
- **WhatsApp Button**: Fixed button for direct messaging
- **Footer**: Company info, links, and social media

### Design Features
- ✅ Modern UI with premium aesthetic
- ✅ Smooth animations using Framer Motion
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ SEO-friendly meta tags
- ✅ Gradient colors and soft shadows
- ✅ Loading animations
- ✅ Form validation with error messages

## 📋 Tech Stack

```json
{
  "Frontend": ["React 19.2.5", "React Router DOM 7.14.2"],
  "Styling": ["Tailwind CSS 3", "Framer Motion 12.38"],
  "Icons": ["Lucide React 1.8"],
  "Tools": ["Axios", "PostCSS", "Autoprefixer"]
}
```

## 📁 Project Structure

```
brijesh-institute/
├── public/
│   ├── index.html (SEO optimized)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AdmissionModal.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.js (Main component with routing)
│   ├── App.css
│   ├── index.css (Tailwind directives)
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Installation

1. **Navigate to project directory:**
```bash
cd brijesh-institute
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```
The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## 📄 Pages Overview

### 1. Home Page (`/`)
- Hero section with tagline: "Building Bright Futures with Expert Guidance"
- 5-star rating display with 45 reviews
- Stats section (1000+ students, 98% success rate, etc.)
- Features section highlighting key benefits
- CTA (Call-to-Action) button for enrollment

### 2. About Page (`/about`)
- Institute introduction
- Mission & Vision statements
- Benefits list with icons
- Enrollment journey
- Contact CTA

### 3. Courses Page (`/courses`)
- Three course options:
  - Classes 9-10: ₹3000/month
  - Classes 11-12: ₹4500/month
  - Competitive Exams: ₹5000/month
- Detailed course cards with features
- Fee structure table
- Enrollment steps

### 4. Gallery Page (`/gallery`)
- Photo gallery with emojis (6 showcase items)
- Student testimonials (6 reviews with 5-star ratings)
- Statistics section

### 5. Contact Page (`/contact`)
- Contact information cards
- Contact form with validation
- Google Maps integration
- FAQ section
- WhatsApp chat option

## 🎨 Customization

### Change Institute Details
Edit these files to customize for your institute:

**App.js** - Phone numbers and links
**Footer.jsx** - Footer content and social links
**Contact.jsx** - Address and maps embedding

### Colors
Edit `tailwind.config.js` to customize the primary color palette:
```js
colors: {
  primary: {
    500: '#4f7bff',  // Primary blue
    600: '#2d5be8',
    700: '#2247d4',
    // ... more colors
  }
}
```

### Typography
Fonts are defined in `tailwind.config.js`:
```js
fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔒 Form Validation

The Admission Modal includes validation for:
- ✅ Name (required)
- ✅ Phone (10 digits, required)
- ✅ Class (dropdown, required)
- ✅ Subject (dropdown, required)
- ✅ Email (optional)
- ✅ Message (optional)

## 🌐 SEO Optimization

**Meta Tags Included:**
- Page titles and descriptions
- Keywords and author
- OpenGraph tags
- Responsive meta viewport
- Theme color

## 🎯 Key Features

### Smooth Animations
- Page entrance animations
- Hover effects on buttons and cards
- Scroll-triggered animations
- Modal animations

### Interactive Components
- Sticky navbar with scroll detection
- Mobile-responsive menu
- Form validation with error messages
- Animated buttons
- Hover effects

### Performance
- Optimized bundle size (~130KB gzipped)
- CSS minimization
- Image optimization ready
- Fast loading animations

## 📞 Contact Information

**Brijesh Institute**
- 📍 Address: 25A, Lane 3, Block C, New Friends Colony, New Delhi 110025
- 📱 Phone: +91 8285867931
- ⏰ Opening Time: 8 AM
- ⭐ Rating: 5.0 (45 reviews)

## 🔗 Quick Links

- [Home](/)
- [About](/about)
- [Courses](/courses)
- [Gallery](/gallery)
- [Contact](/contact)

## 💡 Features Checklist

- ✅ Modern, premium UI design
- ✅ Full responsive design
- ✅ Smooth animations & transitions
- ✅ Form with validation
- ✅ WhatsApp integration
- ✅ Google Maps embedded
- ✅ SEO-friendly
- ✅ Fast performance
- ✅ Reusable components
- ✅ Clean code structure

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'build' folder to Netlify
```

### Deploy to GitHub Pages
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name"
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For customizations or issues, please refer to the code comments or contact the developer.

---

**Made with ❤️ using React & Tailwind CSS**
