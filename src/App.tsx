import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-gray-50">
        <Navbar />
       
        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white"
          id="about"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-6"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600">
              I am Aditya Ashok Pise, a passionate Computer Science and Engineering student. My journey in technology is driven by a deep interest in Machine Learning, Data Science, and innovative problem-solving. My technical expertise spans multiple programming languages and frameworks, enabling me to develop robust solutions for complex challenges.
            </p>

            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-semibold text-gray-900">Vellore Institute of Technology Bhopal</p>
                  <p className="text-gray-600">B.Tech in Computer Science and Engineering</p>
                  <p className="text-gray-500">CGPA: 8.76 | Expected June 2025</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-semibold text-gray-900">Samarth Jr. College Karjat</p>
                  <p className="text-gray-600">Higher Secondary Certificate (Class XII)</p>
                  <p className="text-gray-500">Percentage: 94.50% | May 2021</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-semibold text-gray-900">Mahatma Gandhi Vidyalaya Karjat</p>
                  <p className="text-gray-600">Secondary School Certificate (Class X)</p>
                  <p className="text-gray-500">Percentage: 90.60% | May 2019</p>
                </div>
              </div>
            </div>
            </motion.div>
            <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >  
            {/* Technical Skills Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900">Programming Languages</h4>
                  <p className="text-gray-600">Python, C, C++, Java, R, HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Frameworks & Tools</h4>
                  <p className="text-gray-600">Flask, Jupyter, MySQL, MongoDB, Azure, Git, GitHub</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-semibold text-gray-900">Machine Learning Developer Extern</p>
                  <p className="text-gray-600">SmartBridge Educational Services Pvt. Ltd.</p>
                  <p className="text-gray-500">Aug 2023- Nov 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
              </div>
            </div>
        </motion.section>

         <Hero />
        
        {/* Research Interests Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-indigo-50"
          id="research"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Research Interests</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Machine Learning',
                  description: 'Deep learning, Neural Networks, and AI applications in real-world scenarios.'
                },
                {
                  title: 'Data Science',
                  description: 'Big data analytics, Statistical modeling, and Predictive analysis.'
                },
                {
                  title: 'Computer Vision',
                  description: 'Image processing, Object detection, and Visual recognition systems.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Research Interests</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Machine Learning',
                  description: 'Deep learning, Neural Networks, and AI applications in real-world scenarios.'
                },
                {
                  title: 'Data Science',
                  description: 'Big data analytics, Statistical modeling, and Predictive analysis.'
                },
                {
                  title: 'Computer Vision',
                  description: 'Image processing, Object detection, and Visual recognition systems.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white"
          id="projects"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071" 
                    alt="Integrated Crop Management System" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Bhoomi - Integrated Crop Management System</h3>
                  <p className="text-gray-600 mb-4">
                    A web-based platform optimizing agricultural production through machine learning models and advanced analytics. 
                    Empowers farmers with actionable insights to improve crop management efficiency and sustainability.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Flask</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MongoDB</span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    <strong>Achievement:</strong> 13% increase in crop yield prediction accuracy
                  </p>
                  <a 
                    href="https://github.com/adipise05/crop-management-system" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://datamathstat.wordpress.com/wp-content/uploads/2020/09/44-4.png" 
                    alt="Document Clustering" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Document Clustering Similarity Measures</h3>
                  <p className="text-gray-600 mb-4">
                    Conducted a detailed study on document clustering using various similarity measures applied to diverse 
                    English and Hindi datasets. Engineered efficient text preprocessing pipelines including custom Hindi stemmers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">R</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MATLAB</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NLP</span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    <strong>Outcome:</strong> Identified optimal similarity measures for multilingual document clustering
                  </p>
                  <a 
                    href="https://github.com/adipise05/document-clustering" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070" 
                    alt="StockGPT" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">StockGPT</h3>
                  <p className="text-gray-600 mb-4">
                    A dynamic web application providing real-time stock market analysis and predictions. 
                    Integrates machine learning models and live APIs to offer comprehensive insights for financial forecasting.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Flask</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MongoDB</span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    <strong>Features:</strong> ARIMA, LSTM, and Linear Regression models for stock trend forecasting
                  </p>
                  <a 
                    href="https://github.com/adipise05/stockgpt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Brain Tumor Detection" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Brain Tumor Detection System</h3>
                  <p className="text-gray-600 mb-4">
                    Designed and implemented convolutional neural networks (CNNs) for brain tumor detection, 
                    utilizing advanced deep learning techniques like transfer learning and data augmentation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">CNN</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Medical Imaging</span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    <strong>Achievement:</strong> Enhanced model accuracy through advanced preprocessing techniques
                  </p>
                  <a 
                    href="https://github.com/adipise05/brain-tumor-detection" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-indigo-50"
          id="publications"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Publications</h2>
            <div className="space-y-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2">Transitioning from Traditional to Integrated Crop Management: Advancing Cotton Production Practices</h3>
                <p className="text-gray-600 mb-4">
                  Authors: Aditya Ashok Pise, Vipin Jain, Adelin Parinita, Ashok Sampat Pise.
                </p>
                <p className="text-gray-500 mb-4">
                  Published in International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI-2025)
                </p>
                <a 
                  href="https://doi.org/10.xxxx/agriculture.2024.xxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Publication →
                </a>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2">Sivan Kailasavadivoo: A Leading Contributor to Modern India's Space Program </h3>
                <p className="text-gray-600 mb-4">
                  Authors: Aditya Ashok Pise.
                </p>
                <p className="text-gray-500 mb-4">
                  Published in International Interdisciplinary Conference
                </p>
                <a 
                  href="https://doi.org/10.xxxx/agriculture.2024.xxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Publication →
                </a>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2">Dr. Vijay P. Bhatkar: Architect of India's Digital and Scientific Renaissance</h3>
                <p className="text-gray-600 mb-4">
                  Authors: Aditya Ashok Pise.
                </p>
                <p className="text-gray-500 mb-4">
                  Published in International Interdisciplinary Conference
                </p>
                <a 
                  href="https://doi.org/10.xxxx/agriculture.2024.xxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Publication →
                </a>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2">Development of a Market Disruption Index (MDI) for AI in Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Authors: Aditya Ashok Pise, et al.
                </p>
                <p className="text-gray-500 mb-4">
                  Working
                </p>
                <a 
                  href="https://doi.org/10.xxxx/nlp.2023.xxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Publication →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Patents Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white"
          id="patents"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Patents</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-4">Period Pain Relief Device for the Stomach and Lower Back</h3>
                <p className="text-gray-600 mb-4">
                  A novel design for a wearable device that provides targeted relief for menstrual pain in the stomach and lower back regions. 
                  The device incorporates ergonomic design principles and therapeutic elements to enhance comfort and pain management.
                </p>
                <p className="text-gray-500 mb-4">Patent No: IN202341xxxxx</p>
                <a 
                  href="https://ipindia.gov.in/patents/patent-search/IN202341xxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Patent →
                </a>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-4">Period Pain Relief Device for the Thigh</h3>
                <p className="text-gray-600 mb-4">
                  An innovative design for a wearable device specifically engineered to alleviate menstrual pain in the thigh area. 
                  The device features adjustable components and therapeutic elements to provide customized relief and improve quality of life during menstruation.
                </p>
                <p className="text-gray-500 mb-4">Patent No: IN202342xxxxx</p>
                <a 
                  href="https://ipindia.gov.in/patents/patent-search/IN202342xxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Patent →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-indigo-50"
          id="contact"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's connect!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
              <a 
                href="mailto:adipise05@gmail.com"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                adipise05@gmail.com
              </a>
              <a 
                href="tel:+917057270803"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-7057270803
              </a>
              <a 
                href="https://linkedin.com/in/adipise05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                linkedin.com/in/adipise05
              </a>
              <a 
                href="https://github.com/adipise5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                github.com/adipise5
              </a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© {new Date().getFullYear()} Aditya Ashok Pise. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
