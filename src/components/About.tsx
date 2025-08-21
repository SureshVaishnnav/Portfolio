import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, CheckCircle, Download, Star, Award } from 'lucide-react';

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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'suresh-vaishnav-resume.pdf';
    link.click();
  };

  return (
    <section 
      id="about" 
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
              About{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Me
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
              Passionate mobile app developer with expertise in Flutter and React Native, creating innovative solutions that make a difference
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            {/* Profile Image */}
            <motion.div 
              variants={itemVariants} 
              style={{ textAlign: 'center' }}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <motion.div 
                  style={{
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    position: 'relative'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=320&fit=crop&crop=face&auto=format&q=80" 
                    alt="Suresh Vaishnav"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      console.log('Image failed to load, using fallback');
                      // Fallback to placeholder if the image fails to load
                      e.currentTarget.src = "https://via.placeholder.com/320x320/3B82F6/FFFFFF?text=Suresh+Vaishnav";
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully');
                    }}
                  />
                </motion.div>
                <motion.div 
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '-10px',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  3+ YOE
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  color: '#ffffff',
                  lineHeight: '1.3'
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                Bringing modern technologies into the real world is my{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  DNA
                </span>
              </motion.h3>
              
              <motion.p 
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#d1d5db',
                  marginBottom: '20px',
                  lineHeight: '1.7'
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                I am a passionate mobile app developer with over 3 years of experience in creating innovative and user-friendly applications. My journey in technology started with a curiosity to build solutions that make a difference in people's lives.
              </motion.p>
              
              <motion.p 
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#d1d5db',
                  marginBottom: '40px',
                  lineHeight: '1.7'
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I have worked on multiple startups and government projects to get the ideas into real-world mobile and web applications and developed successful Educational startups in Uzbekistan. My expertise spans across Flutter, React Native, and native Android development.
              </motion.p>

              {/* Download Resume Button */}
              <motion.button
                onClick={downloadResume}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download style={{ width: '20px', height: '20px', marginRight: '12px' }} />
                Download My Resume
              </motion.button>

              {/* Brand Logos */}
              <motion.div 
                style={{ marginTop: '50px' }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p style={{
                  color: '#9ca3af',
                  fontSize: '14px',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Trusted by companies worldwide
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  alignItems: 'center',
                  opacity: 0.7
                }}>
                  {['BURBERRY', 'EPM', 'INDEPENDENT', 'DAVR BANK', "Molly's"].map((brand, index) => (
                    <motion.span
                      key={brand}
                      style={{
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {brand}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div 
            style={{ marginBottom: '80px' }} 
            variants={itemVariants}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  title: 'Frontend Technologies',
                  skills: ['Dart', 'TypeScript', 'JavaScript', 'Core Java', 'Kotlin', 'XML'],
                  color: '#3b82f6'
                },
                {
                  title: 'Frameworks & Tools',
                  skills: ['Flutter', 'React Native', 'Expo + CLI', 'Android Native'],
                  color: '#8b5cf6'
                },
                {
                  title: 'Tools & VCS',
                  skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Android Studio', 'Xcode'],
                  color: '#10b981'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  style={{
                    padding: '30px',
                    background: `linear-gradient(135deg, ${category.color}10 0%, ${category.color}05 100%)`,
                    border: `1px solid ${category.color}30`,
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: `0 20px 40px ${category.color}20`
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '20px'
                  }}>
                    {category.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        style={{
                          background: `${category.color}20`,
                          color: category.color === '#3b82f6' ? '#60a5fa' : 
                                 category.color === '#8b5cf6' ? '#a78bfa' : '#34d399',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          border: `1px solid ${category.color}40`
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: `0 5px 15px ${category.color}30`
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div 
            style={{ marginBottom: '40px' }} 
            variants={itemVariants}
          >
            <motion.div 
              style={{
                padding: '50px 40px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 'bold',
                  marginBottom: '50px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}
                whileHover={{ scale: 1.02 }}
              >
                What I{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Do
                </span>
              </motion.h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px'
              }}>
                {[
                  {
                    icon: Smartphone,
                    title: 'Mobile Development',
                    description: 'Creating cross-platform mobile applications with Flutter and React Native, focusing on performance and user experience.',
                    color: '#3b82f6'
                  },
                  {
                    icon: Code,
                    title: 'App Architecture',
                    description: 'Designing scalable and maintainable app architectures with clean code principles and best practices.',
                    color: '#8b5cf6'
                  },
                  {
                    icon: CheckCircle,
                    title: 'API Integration',
                    description: 'Integrating third-party APIs, payment gateways, and real-time features like chat sockets for enhanced functionality.',
                    color: '#10b981'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    style={{ textAlign: 'center' }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.div 
                      style={{
                        width: '60px',
                        height: '60px',
                        background: `${service.color}20`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px auto',
                        border: `1px solid ${service.color}40`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        boxShadow: `0 10px 25px ${service.color}30`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon style={{ 
                        width: '28px', 
                        height: '28px', 
                        color: service.color 
                      }} />
                    </motion.div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: '#ffffff'
                    }}>
                      {service.title}
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      color: '#d1d5db',
                      lineHeight: '1.6'
                    }}>
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 