import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Experienced Faculty',
      description: 'Our teachers have 10+ years of experience with proven track records of success.',
    },
    {
      icon: CheckCircle,
      title: 'Personalized Attention',
      description: 'Small batch sizes ensure every student gets the individual focus they deserve.',
    },
    {
      icon: CheckCircle,
      title: 'Affordable Pricing',
      description: 'Quality education accessible to everyone without compromising on standards.',
    },
    {
      icon: CheckCircle,
      title: 'Career Guidance',
      description: 'Expert mentorship and guidance for a bright and successful future.',
    },
    {
      icon: CheckCircle,
      title: 'Doubt Sessions',
      description: 'Regular doubt clearing sessions to ensure complete concept clarity.',
    },
    {
      icon: CheckCircle,
      title: 'Result-Oriented',
      description: '100% result-oriented teaching with focus on board exams and competitive tests.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Brijesh Institute</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
          >
            बृजेश इंस्टीट्यूट - Your Gateway to Academic Excellence and Success
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Excellence in Education, Since Our Foundation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Brijesh Institute, we believe that every student has the potential to excel. Our mission is to nurture this potential through quality education, expert guidance, and a supportive learning environment.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Located in the heart of New Friends Colony, New Delhi, we have been serving students from classes 9-12 and preparing them for competitive exams with dedication and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
          >
            <div className="text-center">
              <div className="text-8xl mb-4">🎓</div>
              <p className="text-white font-bold text-2xl">Academic Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Target className="text-primary-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide high-quality, affordable education that empowers every student to achieve their academic and career goals. We are committed to creating an inclusive, supportive learning environment where every student can thrive and reach their full potential.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-primary-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be recognized as a leading educational institute that develops confident, knowledgeable, and responsible individuals equipped with skills and values to excel in their careers and contribute positively to society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              We go beyond traditional teaching to create lasting impact
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
                      <benefit.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Success Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join Brijesh Institute and experience the difference quality education can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
