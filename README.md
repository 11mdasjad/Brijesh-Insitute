# 🎓 Brijesh Institute - Modern Education Website

[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](https://github.com/11mdasjad/Brijesh-Insitute)

A modern, fully responsive, professional website for **Brijesh Institute** - a premier education/coaching center in New Delhi. Built with React.js, Tailwind CSS, and Framer Motion animations.

## ✨ Features

- 🏠 **5 Complete Pages** - Home, About, Courses, Gallery, Contact
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✨ **Smooth Animations** - Framer Motion throughout
- 📋 **Form Validation** - Admission form with error handling
- 🗺️ **Google Maps** - Embedded location integration
- 💬 **WhatsApp Integration** - Fixed chat button
- 🎨 **Modern UI** - Premium design with gradients and shadows
- 🔒 **SEO Optimized** - Meta tags and structured data
- ⚡ **Fast Performance** - Optimized bundle (~130KB)

## 🚀 Live Demo

Check out the website: [https://github.com/11mdasjad/Brijesh-Insitute](https://github.com/11mdasjad/Brijesh-Insitute)

## 📋 Pages & Sections

### 🏠 Home Page `/`
- Hero section with tagline
- 5-star rating display
- Statistics cards
- Features showcase
- Call-to-action buttons

### 📖 About Page `/about`
- Institute introduction
- Mission & Vision statements
- 6 benefit cards
- Why choose us section

### 📚 Courses Page `/courses`
- 3 course offerings:
  - Classes 9-10 (₹3000/month)
  - Classes 11-12 (₹4500/month)
  - Competitive Exams (₹5000/month)
- Detailed course information
- Fee structure
- Enrollment process

### 📸 Gallery Page `/gallery`
- Photo gallery (6 items)
- Student testimonials (6 reviews)
- 5-star ratings
- Statistics display

### 📞 Contact Page `/contact`
- Contact information cards
- Contact form with validation
- Google Maps embedded
- FAQ section

## 🛠️ Tech Stack

```
Frontend:
  - React 19.2.5 (Functional components)
  - React Router DOM 7.14.2 (Navigation)
  - Tailwind CSS 3 (Styling)
  - Framer Motion 12.38 (Animations)
  - Lucide React 1.8 (Icons)

Tools:
  - PostCSS & Autoprefixer
  - Axios (HTTP client)
  - Google Fonts
```

## 📁 Project Structure

```
brijesh-institute/
├── public/
│   ├── index.html          # SEO optimized HTML
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation
│   │   ├── Footer.jsx      # Footer section
│   │   ├── AdmissionModal.jsx # Enrollment form
│   │   └── WhatsAppButton.jsx  # Chat button
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About section
│   │   ├── Courses.jsx     # Courses listing
│   │   ├── Gallery.jsx     # Gallery & reviews
│   │   └── Contact.jsx     # Contact page
│   ├── App.js              # Main component
│   ├── App.css             # Custom styles
│   └── index.css           # Tailwind directives
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/11mdasjad/Brijesh-Insitute.git
cd Brijesh-Insitute
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The website opens at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 📝 Available Scripts

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
npm run eject    # Eject from Create React App (irreversible)
```

## 🎨 Customization

### Change Institute Details

**Phone & Contact:**
- File: `src/components/Footer.jsx` (Line 95)
- File: `src/pages/Contact.jsx` (Line 50)

**Course Fees:**
- File: `src/pages/Courses.jsx` (Lines 144-158)

**Primary Color:**
- File: `tailwind.config.js` (Lines 14-25)
```js
colors: {
  primary: {
    500: '#4f7bff',  // Change to your color
  }
}
```

**Institute Name:**
- File: `src/components/Navbar.jsx` (Line 17)
```jsx
<p className="font-bold text-primary-700 text-lg">Brijesh</p>
```

## 📱 Responsive Design

The website is fully responsive across:
- 📱 Mobile (320px - 640px)
- 📱 Tablet (641px - 1024px)
- 🖥️ Desktop (1025px+)

## 🔒 Form Features

### Admission Modal
- Name (required)
- Email (optional)
- Phone (required, 10 digits)
- Class (required, dropdown)
- Subject (required, dropdown)
- Message (optional)

**Validation:**
- Real-time error checking
- Success message display
- Auto-reset after submission

### Contact Form
- Name, Phone, Email, Class/Course, Message
- Form validation
- Success feedback

## 📊 Performance

- Bundle Size: ~130 KB (gzipped)
- CSS Size: ~4.8 KB (gzipped)
- Load Time: < 2 seconds
- Lighthouse Score: 90+

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### GitHub Pages
```bash
# Update package.json homepage field
npm run build
```

### Traditional Hosting
```bash
npm run build
# Upload build folder via FTP
```

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Setup and customization guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview
- **[README_CUSTOM.md](README_CUSTOM.md)** - Detailed feature documentation
- **[FEATURES_CHECKLIST.md](FEATURES_CHECKLIST.md)** - Implementation checklist
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick commands reference

## 📞 Institute Information

**Brijesh Institute**
- 📍 Address: 25A, Lane 3, Block C, New Friends Colony, New Delhi 110025
- 📱 Phone: +91 8285867931
- ⏰ Opening: 8 AM
- ⭐ Rating: 5.0/5 (45 reviews)
- 🏢 Type: Education/Coaching Center

## 🎯 Key Components

### Navbar Component
- Sticky positioning with scroll detection
- Responsive mobile menu
- Logo with branding
- Navigation links
- Call-to-action buttons

### Footer Component
- Company information
- Quick links (4 categories)
- Social media icons
- Contact details

### AdmissionModal Component
- Complete enrollment form
- Real-time validation
- Error handling
- Success confirmation

### WhatsAppButton Component
- Fixed position chat button
- Direct WhatsApp integration
- Smooth animations

## 🔐 Security

- XSS protection via React
- Input validation on forms
- No hardcoded secrets
- Environment variables ready
- CSRF-ready architecture

## 🌟 Highlights

✅ **Professional Design** - Modern UI with premium aesthetics
✅ **Responsive** - Works on all devices
✅ **Animated** - Smooth Framer Motion animations
✅ **Validated Forms** - Client-side validation
✅ **SEO Ready** - Meta tags included
✅ **Fast** - Optimized bundle size
✅ **Maintainable** - Clean, organized code
✅ **Scalable** - Easy to extend and customize
✅ **Production Ready** - Ready to deploy
✅ **Well Documented** - Complete guides included

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Student dashboard
- [ ] Payment integration
- [ ] Email notifications
- [ ] Blog section
- [ ] Live chat support
- [ ] Video testimonials

## 🙏 Acknowledgments

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 📧 Contact

For questions or support, please reach out to:
- Email: info@brijesh.com
- Phone: +91 8285867931
- WhatsApp: [Chat here](https://wa.me/918285867931)

## 📍 Repository

https://github.com/11mdasjad/Brijesh-Insitute

---

**Made with ❤️ using React & Tailwind CSS**

*Last Updated: April 22, 2026*
