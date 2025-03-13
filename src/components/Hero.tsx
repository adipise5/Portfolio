import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, FileText, Laptop } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Exploring the frontiers of technology through research, patents, and innovative projects.
            Pursuing BTech with a focus on advancing technological boundaries.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, stagger: 0.2 }}
        >
          {[
           { icon: BookOpen, label: 'Research Papers', count: '2', id: 'publications' },
           { icon: Award, label: 'Patents', count: '2', id: 'patents' },
           { icon: FileText, label: 'Articles', count: '2', id: 'articles' },
           { icon: Laptop, label: 'Projects', count: '5+', id: 'projects' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-8 w-8 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center text-gray-900">{item.count}</h3>
              <p className="text-gray-600 text-center">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
