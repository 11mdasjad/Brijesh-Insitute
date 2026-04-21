import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, TrendingUp } from 'lucide-react';

const Home = ({ onAdmissionClick }) => {
  const stats = [
    { icon: Star, label: 'Rating', value: '5.0⭐', color: 'from-yellow-400 to-orange-500' },
    { icon: Users, label: 'Happy Students', value: '1000+', color: 'from-blue-400 to-primary-600' },
    { icon: Award, label: 'Expert Faculty', value: '20+', color: 'from-green-400 to-emerald-600' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%', color: 'from-purple-400 to-pink-600' },
  ];

  const features = [
    {
      title: 'Experienced Faculty',
      description: 'Highly qualified teachers with 10+ years of experience',
      icon: '👨‍🏫',
    },
    {
      title: 'Personalized Attention',
      description: 'Small batch sizes ensuring individual focus',
      icon: '🎯',
    },
    {
      title: 'Affordable Pricing',
      description: 'Quality education at reasonable fees',
      icon: '💰',
    },
    {
      title: 'Career Guidance',
      description: 'Expert mentorship for bright future',
      icon: '🚀',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building Bright <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Futures</span> with Expert Guidance
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Brijesh Institute - Your trusted partner in educational excellence. We provide quality education with personalized attention to help every student achieve their dreams.
              </p>

              {/* Rating Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-primary-100 w-fit"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-800">5.0 Rating</p>
                  <p className="text-xs text-gray-600">45 Reviews</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(79, 123, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onAdmissionClick}
                  className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <span>→</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 md:h-full flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full h-full"
              >
                {/* Gradient Blob Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-700 rounded-2xl opacity-10 blur-3xl"></div>

                {/* Hero Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📚</div>
                    <p className="text-white font-bold text-2xl">Modern Education</p>
                    <p className="text-white/80 text-lg">Expert Learning Environment</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-lg w-fit mb-4`}>
                  <stat.icon size={28} className="text-white" />
                </div>
                <p className="text-gray-600 font-medium text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Brijesh Institute</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive education with focus on individual growth and career development.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Education?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join hundreds of successful students at Brijesh Institute and start your journey to success today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAdmissionClick}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
