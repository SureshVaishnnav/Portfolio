import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const animatedTexts = [
    "Flutter Developer",
    "React Native Expert", 
    "Mobile App Developer",
    "Software Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'suresh-vaishnav-resume.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Enhanced Particle Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Multiple Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-12 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          Available for new projects
        </motion.div> */}

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            variants={floatingVariants}
            animate="animate"
          >
            Hi, I'm <span className="gradient-text text-reveal">Suresh</span>
          </motion.h1>
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-300"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="gradient-text">Vaishnav</span>
          </motion.h2>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div variants={itemVariants} className="mb-15">
          <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
            <motion.span 
              key={currentTextIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              {animatedTexts[currentTextIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed">
            Rich experience of <span className="text-blue-400 font-semibold">3+ years</span> developing 
            <span className="text-purple-600 font-semibold"> Flutter</span> and 
            <span className="text-green-400 font-semibold"> React Native</span> applications using 
            <span className="text-yellow-400 font-semibold"> Dart</span>, 
            <span className="text-blue-400 font-semibold"> TypeScript</span>, 
            <span className="text-yellow-400 font-semibold"> JavaScript</span>, 
            <span className="text-orange-400 font-semibold"> Kotlin</span>, and 
            <span className="text-red-400 font-semibold"> Java</span>.
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Strong advocate of test-driven development and Agile methodologies, coordinating cross-functional teams to deliver high-quality mobile solutions.
          </p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={downloadResume}
              className="group glass-card hover-glow text-white px-8 py-4 rounded-full font-semibold text-lg pulse-glow relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Download className="w-4 h-10 mr-10 ml-10" />
                Download Resume
              </div>
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group neon-border hover-glow text-white px-8 py-4 rounded-full font-semibold text-lg bg-transparent relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <ArrowDown className="w-5 h-5 mr-3" />
                View My Work
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Statistics */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-300 text-base font-medium">Apps Developed</div>
                <div className="text-gray-500 text-sm mt-1">Cross-platform solutions</div>
              </div>
            </motion.div>
            <motion.div 
              className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-300 text-base font-medium">Years Experience</div>
                <div className="text-gray-500 text-sm mt-1">Professional development</div>
              </div>
            </motion.div>
            <motion.div 
              className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300 text-base font-medium">Client Satisfaction</div>
                <div className="text-gray-500 text-sm mt-1">Delivered on time</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Skills Preview */}
        <motion.div variants={itemVariants}>
          <div className="glass-card p-6 rounded-xl max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-white mb-4 ms-10 me-10">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-5 ms-10 me-10 ">
              {['Flutter', 'React Native', 'Dart', 'TypeScript', 'JavaScript', 'Kotlin', 'Java', 'Firebase'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-5 py-5 bg-gray-800/100 text-gray-300 ms-10 me-10  text-xs hover:border-blue-500/50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1}}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 