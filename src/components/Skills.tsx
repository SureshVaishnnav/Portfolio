import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Flutter', level: 95, color: '#3b82f6', icon: Smartphone },
    { name: 'React Native', level: 90, color: '#8b5cf6', icon: Code },
    { name: 'Dart', level: 92, color: '#06b6d4', icon: Code },
    { name: 'TypeScript', level: 88, color: '#3b82f6', icon: Code },
    { name: 'JavaScript', level: 85, color: '#f59e0b', icon: Code },
    { name: 'Kotlin', level: 80, color: '#8b5cf6', icon: Code },
    { name: 'Java', level: 82, color: '#ef4444', icon: Code },
    { name: 'Firebase', level: 87, color: '#f59e0b', icon: Database }
  ];

  const technologies = [
    { name: 'Flutter', icon: Smartphone, category: 'Framework', color: '#3b82f6' },
    { name: 'React Native', icon: Code, category: 'Framework', color: '#8b5cf6' },
    { name: 'Dart', icon: Code, category: 'Language', color: '#06b6d4' },
    { name: 'TypeScript', icon: Code, category: 'Language', color: '#3b82f6' },
    { name: 'JavaScript', icon: Code, category: 'Language', color: '#f59e0b' },
    { name: 'Kotlin', icon: Code, category: 'Language', color: '#8b5cf6' },
    { name: 'Java', icon: Code, category: 'Language', color: '#ef4444' },
    { name: 'Firebase', icon: Database, category: 'Backend', color: '#f59e0b' },
    { name: 'Git', icon: Code, category: 'Version Control', color: '#ef4444' }
  ];

  const categories = [
    { name: 'Mobile Development', icon: Smartphone, color: '#3b82f6', description: 'Cross-platform mobile app development with Flutter and React Native' },
    { name: 'Frontend Development', icon: Code, color: '#8b5cf6', description: 'Modern web development with TypeScript and JavaScript' },
    { name: 'Backend Integration', icon: Database, color: '#10b981', description: 'API integration and backend services with Firebase' }
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
    <section 
      id="skills" 
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '80px' }} 
            variants={itemVariants}
          >
            <motion.h2 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#ffffff'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              My{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Skills
              </span>
            </motion.h2>
            <motion.p 
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: '#d1d5db',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Expertise in mobile app development with modern technologies and best practices
            </motion.p>
          </motion.div>

          {/* Skills Progress Section */}
          <motion.div 
            style={{ marginBottom: '80px' }}
            variants={itemVariants}
          >
            <motion.h3 
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '40px',
                color: '#ffffff',
                textAlign: 'center'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Technical{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Skills
              </span>
            </motion.h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  style={{
                    padding: '25px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: `0 20px 40px ${skill.color}20`
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}>
                    <motion.div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: `${skill.color}20`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        border: `1px solid ${skill.color}40`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        boxShadow: `0 10px 25px ${skill.color}30`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon style={{ 
                        width: '20px', 
                        height: '20px', 
                        color: skill.color 
                      }} />
                    </motion.div>
                    <div>
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '5px'
                      }}>
                        {skill.name}
                      </h4>
                      <span style={{
                        fontSize: '0.9rem',
                        color: '#9ca3af'
                      }}>
                        {skill.level}% Proficiency
                      </span>
                    </div>
                  </div>
                  
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                        borderRadius: '4px'
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Categories */}
          <motion.div 
            style={{ marginBottom: '80px' }}
            variants={itemVariants}
          >
            <motion.h3 
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '40px',
                color: '#ffffff',
                textAlign: 'center'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Technology{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Stack
              </span>
            </motion.h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px'
            }}>
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  style={{
                    padding: '30px',
                    background: `linear-gradient(135deg, ${category.color}10 0%, ${category.color}05 100%)`,
                    border: `1px solid ${category.color}30`,
                    borderRadius: '20px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: `0 20px 40px ${category.color}20`
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: `${category.color}20`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      border: `1px solid ${category.color}40`
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: `0 10px 25px ${category.color}30`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon style={{ 
                      width: '28px', 
                      height: '28px', 
                      color: category.color 
                    }} />
                  </motion.div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '15px'
                  }}>
                    {category.name}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#d1d5db',
                    lineHeight: '1.6'
                  }}>
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '40px',
                color: '#ffffff',
                textAlign: 'center'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Tools &{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Technologies
              </span>
            </motion.h3>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'center'
            }}>
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  style={{
                    padding: '15px 25px',
                    background: `${tech.color}20`,
                    border: `1px solid ${tech.color}40`,
                    borderRadius: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 25px ${tech.color}30`,
                    y: -3
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <tech.icon style={{ 
                    width: '20px', 
                    height: '20px', 
                    color: tech.color 
                  }} />
                  <span style={{
                    color: tech.color,
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {tech.name}
                  </span>
                  <span style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}>
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 