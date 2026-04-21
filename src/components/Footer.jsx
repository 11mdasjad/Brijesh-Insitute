import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Quick: [
      { name: 'Home', href: '#' },
      { name: 'About Us', href: '#' },
      { name: 'Courses', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Services: [
      { name: 'Competitive Exams', href: '#' },
      { name: 'Class 9-12', href: '#' },
      { name: 'Career Guidance', href: '#' },
      { name: 'Doubt Sessions', href: '#' },
    ],
    Company: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Heart, href: '#', label: 'Facebook' },
    { icon: Heart, href: '#', label: 'Twitter' },
    { icon: Heart, href: '#', label: 'Instagram' },
    { icon: Heart, href: '#', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center font-bold text-lg">
                BI
              </div>
              <div>
                <p className="font-bold text-lg">Brijesh Institute</p>
                <p className="text-xs text-primary-300">बृजेश इंस्टीट्यूट</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Building bright futures with expert guidance and personalized attention.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-700/30 hover:bg-primary-600/50 rounded-full transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.Quick.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+918285867931"
                className="flex items-start gap-3 text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 8285867931</span>
              </a>
              <a
                href="mailto:info@brijesh.com"
                className="flex items-start gap-3 text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@brijesh.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>25A, Lane 3, Block C, New Friends Colony, New Delhi 110025</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary-700/50 my-8" />

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Brijesh Institute. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed with <span className="text-primary-400">❤</span> | Made with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
