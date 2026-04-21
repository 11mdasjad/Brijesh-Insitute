import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', class: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '25A, Lane 3, Block C, New Friends Colony, New Delhi, Delhi 110025',
      color: 'from-blue-400 to-primary-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8285867931',
      link: 'tel:+918285867931',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@brijesh.com',
      link: 'mailto:info@brijesh.com',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Timing',
      content: 'Opens 8 AM - Flexible Timings Available',
      color: 'from-orange-400 to-red-500',
    },
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
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions? We'd love to hear from you. Contact us anytime!
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <a
                  href={info.link}
                  className={`bg-gradient-to-br ${info.color} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center`}
                >
                  <div className="bg-white/20 p-4 rounded-lg mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <info.icon size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{info.content}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10 digit mobile number"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Class */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Class/Course Interest
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-300"
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="competitive">Competitive Exams</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your queries or requirements..."
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you shortly!
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                  title="Brijesh Institute Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8568118750647!2d77.26047!3d28.564216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ec5ae3b49f%3A0x1b1b1b1b1b1b1b1b!2sNew%20Friends%20Colony%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Quick Information</h3>
                <div className="space-y-4">
                  <p>
                    <span className="font-semibold">📍 Location:</span> New Friends Colony, Delhi
                  </p>
                  <p>
                    <span className="font-semibold">🕐 Timing:</span> Opens 8 AM
                  </p>
                  <p>
                    <span className="font-semibold">📞 Call:</span>{' '}
                    <a href="tel:+918285867931" className="hover:underline">
                      +91 8285867931
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">💬 WhatsApp:</span>{' '}
                    <a
                      href="https://wa.me/918285867931"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us
                    </a>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    ℹ️ We're available 7 days a week for admissions and queries!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What are the admission requirements?',
                a: 'Students from any school are welcome. We conduct a quick assessment and counseling session to understand the best course for them.',
              },
              {
                q: 'Do you provide online classes?',
                a: 'Yes, we offer both offline and online classes for maximum flexibility.',
              },
              {
                q: 'What is the refund policy?',
                a: 'We offer a 7-day money-back guarantee if not satisfied with our services.',
              },
              {
                q: 'Are there discounts for group enrollments?',
                a: 'Yes, special discounts are available for batch enrollments. Contact us for more details.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-500"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
