import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award } from 'lucide-react';

const Courses = ({ onAdmissionClick }) => {
  const courses = [
    {
      id: 1,
      title: 'Class 9 & 10',
      icon: '📖',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
      duration: '1 Year',
      description: 'Foundation building for board exams with comprehensive curriculum coverage',
      color: 'from-blue-400 to-primary-500',
      features: [
        'Daily classes from 8 AM',
        'Weekly tests and assignments',
        'Individual doubt sessions',
        'Board exam preparation',
      ],
    },
    {
      id: 2,
      title: 'Class 11 & 12',
      icon: '📚',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Commerce'],
      duration: '2 Years',
      description: 'Advanced curriculum for board exams and competitive exam preparation',
      color: 'from-primary-500 to-purple-500',
      features: [
        'Advanced problem-solving',
        'Competitive exam focus',
        'Concept clarity sessions',
        'Board + JEE/NEET preparation',
      ],
    },
    {
      id: 3,
      title: 'Competitive Exams',
      icon: '🏆',
      subjects: ['JEE Main', 'JEE Advanced', 'NEET', 'KVPY'],
      duration: 'Flexible',
      description: 'Intensive preparation for engineering and medical entrance exams',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Expert faculty with experience',
        'Regular mock tests',
        'Result-oriented teaching',
        'Career guidance included',
      ],
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive courses designed for every student, from foundation building to competitive exam preparation
          </motion.p>
        </div>
      </section>

      {/* Courses Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${course.color} p-8 text-white text-center`}>
                  <div className="text-6xl mb-4">{course.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{course.title}</h3>
                  <p className="text-white/90 flex items-center justify-center gap-2">
                    <Clock size={16} />
                    {course.duration}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{course.description}</p>

                  {/* Subjects */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen size={18} className="text-primary-600" />
                      Subjects Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award size={18} className="text-primary-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onAdmissionClick}
                    className={`w-full bg-gradient-to-r ${course.color} text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 mt-6`}
                  >
                    Enroll in {course.title}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Affordable Fee Structure</h2>
            <p className="text-lg text-gray-600">
              Quality education at reasonable prices - flexible payment options available
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-gray-600 font-medium mb-2">Classes 9-10</p>
                <p className="text-4xl font-bold text-primary-600 mb-2">₹3000</p>
                <p className="text-sm text-gray-500">Per Month</p>
              </div>
              <div className="border-l border-r border-gray-200 px-8">
                <p className="text-gray-600 font-medium mb-2">Classes 11-12</p>
                <p className="text-4xl font-bold text-primary-600 mb-2">₹4500</p>
                <p className="text-sm text-gray-500">Per Month</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-2">Competitive Exams</p>
                <p className="text-4xl font-bold text-primary-600 mb-2">₹5000</p>
                <p className="text-sm text-gray-500">Per Month</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center">
                💡 Special discounts available for batch enrollments and long-term courses. Contact us for more details!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h3>
            <ul className="space-y-4">
              {[
                'Daily classes with structured curriculum',
                'Weekly tests and performance tracking',
                'Personalized guidance and mentoring',
                'Doubt clearing sessions',
                'Study materials and notes',
                'Regular parent-teacher meetings',
                'Career counseling sessions',
                '100% Results guarantee',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-600"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">How to Enroll</h3>
            <ol className="space-y-4">
              {[
                { step: '1', title: 'Fill Admission Form', desc: 'Complete our quick admission form' },
                { step: '2', title: 'Assessment Test', desc: 'Take a free placement assessment' },
                { step: '3', title: 'Counseling Session', desc: 'Meet with our academic counselor' },
                { step: '4', title: 'Join Classes', desc: 'Start your learning journey with us' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex gap-4"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold rounded-full flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-primary-700">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            Choose Your Perfect Course Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Limited seats available - Enroll now and secure your future!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAdmissionClick}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Courses;
