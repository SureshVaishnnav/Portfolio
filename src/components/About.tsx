import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate mobile app developer with expertise in Flutter and React Native
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img 
                  src="https://via.placeholder.com/320x320/3B82F6/FFFFFF?text=Suresh+Vaishnav" 
                  alt="Suresh Vaishnav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3+ YOE
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-white">
              Bringing modern technologies into the real world is my DNA
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a passionate mobile app developer with over 3 years of experience in creating innovative and user-friendly applications. My journey in technology started with a curiosity to build solutions that make a difference in people's lives.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I have worked on multiple startups and government projects to get the ideas into real-world mobile and web applications and developed successful Educational startups in Uzbekistan. My expertise spans across Flutter, React Native, and native Android development.
            </p>

            {/* Download Resume Button */}
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download My Resume
            </motion.button>

            {/* Brand Logos */}
            <div className="mt-12">
              <p className="text-gray-400 text-sm mb-4">Trusted by companies worldwide</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <span className="text-white font-semibold">BURBERRY</span>
                <span className="text-white font-semibold">EPM</span>
                <span className="text-white font-semibold">INDEPENDENT</span>
                <span className="text-white font-semibold">DAVR BANK</span>
                <span className="text-white font-semibold">Molly's</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div className="mt-16" variants={itemVariants}>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="glass-card p-6 rounded-xl hover-lift"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">Frontend Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Dart', 'TypeScript', 'JavaScript', 'Core Java', 'Kotlin', 'XML'].map((skill, index) => (
                  <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 rounded-xl hover-lift"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'React Native', 'Expo + CLI', 'Android Native'].map((skill, index) => (
                  <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 rounded-xl hover-lift"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">Tools & VCS</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Android Studio', 'Xcode'].map((skill, index) => (
                  <span key={skill} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div className="mt-16" variants={itemVariants}>
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Mobile Development</h4>
                <p className="text-gray-300">Creating cross-platform mobile applications with Flutter and React Native, focusing on performance and user experience.</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">UI/UX Design</h4>
                <p className="text-gray-300">Designing adaptive and intuitive user interfaces for handsets, watches, and tablets with modern design principles.</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">API Integration</h4>
                <p className="text-gray-300">Integrating third-party APIs, payment gateways, and real-time features like chat sockets for enhanced functionality.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 