import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Heart, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Flutter', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'React Native', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'Dart', level: 92, color: 'from-blue-600 to-blue-800' },
    { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Kotlin', level: 80, color: 'from-purple-600 to-purple-800' },
    { name: 'Java', level: 82, color: 'from-red-500 to-red-700' },
    { name: 'Firebase', level: 87, color: 'from-orange-500 to-yellow-500' }
  ];

  const technologies = [
    { name: 'Flutter', icon: '📱', category: 'Framework' },
    { name: 'React Native', icon: '⚛️', category: 'Framework' },
    { name: 'Dart', icon: '🎯', category: 'Language' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'JavaScript', icon: '🟨', category: 'Language' },
    { name: 'Kotlin', icon: '🟪', category: 'Language' },
    { name: 'Java', icon: '☕', category: 'Language' },
    { name: 'Firebase', icon: '🔥', category: 'Backend' },
    { name: 'Git', icon: '📚', category: 'Version Control' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Figma', icon: '🎨', category: 'Design' }
  ];

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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise in mobile app development with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={tech.name} 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <h4 className="font-semibold text-gray-800 text-sm">{tech.name}</h4>
                    <p className="text-xs text-gray-500">{tech.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div className="mt-16" variants={itemVariants}>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">Development Approach</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-sm text-gray-600">Writing maintainable and scalable code</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-sm text-gray-600">Optimizing for speed and efficiency</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">User Experience</h4>
                <p className="text-sm text-gray-600">Creating intuitive interfaces</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-4 h-4 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-sm text-gray-600">Implementing best security practices</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills; 