import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Classroom Environment',
      emoji: '🏫',
      description: 'Modern, well-equipped classrooms',
    },
    {
      id: 2,
      title: 'Students Learning',
      emoji: '👨‍🎓',
      description: 'Focused and engaged learners',
    },
    {
      id: 3,
      title: 'Faculty Interaction',
      emoji: '👨‍🏫',
      description: 'Expert teachers with students',
    },
    {
      id: 4,
      title: 'Study Sessions',
      emoji: '📚',
      description: 'Intensive study sessions',
    },
    {
      id: 5,
      title: 'Student Success',
      emoji: '🏆',
      description: 'Success stories and achievements',
    },
    {
      id: 6,
      title: 'Interactive Learning',
      emoji: '💡',
      description: 'Modern teaching methods',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Kumar',
      class: 'Class 12',
      rating: 5,
      review: 'Best teacher at affordable price. I improved my marks significantly under Brijesh Sir\'s guidance!',
      emoji: '😊',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      class: 'Class 10',
      rating: 5,
      review: 'Great place for bright future. The personalized attention and doubt sessions really helped me excel.',
      emoji: '🌟',
    },
    {
      id: 3,
      name: 'Arjun Singh',
      class: 'JEE Prep',
      rating: 5,
      review: 'Excellent mentors and guidance. Got selected in top engineering college thanks to this institute!',
      emoji: '🚀',
    },
    {
      id: 4,
      name: 'Ananya Patel',
      class: 'Class 11',
      rating: 5,
      review: 'The structured approach and regular tests helped me stay on track with my studies.',
      emoji: '👏',
    },
    {
      id: 5,
      name: 'Vikram Tomar',
      class: 'Class 9',
      rating: 5,
      review: 'Very supportive environment with qualified teachers. Highly recommended for all students!',
      emoji: '✨',
    },
    {
      id: 6,
      name: 'Neha Gupta',
      class: 'NEET Prep',
      rating: 5,
      review: 'Outstanding teaching quality and one-on-one mentorship. Worth every rupee invested!',
      emoji: '💯',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
            Gallery & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Discover our institute through images and student experiences
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Photo Gallery</h2>
            <p className="text-gray-600">Glimpse of our state-of-the-art facilities and learning environment</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary-${300 + (image.id % 3) * 100} to-primary-${500 + (image.id % 3) * 100}`}>
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{image.emoji}</div>
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="w-full"
                  >
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from students who have achieved success with us
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
              <p className="text-gray-600 font-semibold ml-4">5.0 Rating (45 Reviews)</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.class}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '👨‍🎓', label: 'Happy Students', value: '1000+' },
              { icon: '⭐', label: 'Average Rating', value: '5.0' },
              { icon: '💬', label: 'Reviews', value: '45+' },
              { icon: '📈', label: 'Success Rate', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
