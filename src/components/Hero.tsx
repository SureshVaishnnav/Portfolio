import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowDown, Star, Code, Menu, X, Home, User, Briefcase, MessageSquare, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const animatedTexts = [
    "Flutter Developer",
    "React Native Expert", 
    "Mobile App Developer",
    "Software Developer"
  ];

  const menuItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: MessageSquare, label: 'Contact', href: '#contact' },
    { icon: FileText, label: 'Resume', href: '#resume' }
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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
    hidden: { opacity: 0, y: 30 },
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

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        padding: '20px'
      }}
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Navigation Menu Button */}
      <motion.button
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          zIndex: 1000,
          background: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X style={{ width: '24px', height: '24px', color: '#ffffff' }} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu style={{ width: '24px', height: '24px', color: '#ffffff' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '300px',
              height: '100vh',
              background: 'rgba(15, 15, 35, 0.95)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 999,
              padding: '100px 30px 30px 30px'
            }}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px 20px',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    x: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        padding: '40px 20px'
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '50px',
              color: '#60a5fa',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '60px',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star style={{ width: '16px', height: '16px', marginRight: '8px', color: '#fbbf24' }} />
            </motion.div>
            Available for new projects
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
            <motion.h1 
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}
              variants={floatingVariants}
              animate="animate"
            >
              Hi, I'm{' '}
              <motion.span 
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Suresh
              </motion.span>
            </motion.h1>
            <motion.h2 
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                color: '#e5e7eb',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}
              variants={floatingVariants}
              animate="animate"
            >
              <motion.span 
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Vaishnav
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div variants={itemVariants} style={{ marginBottom: '50px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentTextIndex}
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontWeight: '600',
                  color: '#d1d5db'
                }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {animatedTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <motion.p 
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: '#d1d5db',
                maxWidth: '800px',
                margin: '0 auto 20px auto',
                lineHeight: '1.6'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Passionate <motion.span style={{ color: '#60a5fa', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>mobile developer</motion.span> with{' '}
              <motion.span style={{ color: '#a78bfa', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>3+ years</motion.span> of experience crafting exceptional{' '}
              <motion.span style={{ color: '#34d399', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>Flutter</motion.span> and{' '}
              <motion.span style={{ color: '#22d3ee', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>React Native</motion.span> applications.{' '}
              Expert in <motion.span style={{ color: '#fbbf24', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>Dart</motion.span>,{' '}
              <motion.span style={{ color: '#60a5fa', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>TypeScript</motion.span>, and{' '}
              <motion.span style={{ color: '#f59e0b', fontWeight: '600' }} whileHover={{ scale: 1.1 }}>JavaScript</motion.span>.
            </motion.p>
            <motion.p 
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: '#9ca3af',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.5'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Delivering high-quality, scalable mobile solutions with a focus on user experience and performance optimization.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} style={{ marginBottom: '80px' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <motion.button
                onClick={downloadResume}
                style={{
                  display: 'flex',
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
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download style={{ width: '20px', height: '20px', marginRight: '12px' }} />
                </motion.div>
                Download Resume
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: 'transparent',
                  color: '#ffffff',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3, 
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  background: 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown style={{ width: '20px', height: '20px', marginRight: '12px' }} />
                </motion.div>
                View My Work
              </motion.button>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div variants={itemVariants} style={{ marginBottom: '80px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                { number: '10+', title: 'Apps Developed', subtitle: 'Cross-platform solutions', color: '#3b82f6' },
                { number: '3+', title: 'Years Experience', subtitle: 'Professional development', color: '#8b5cf6' },
                { number: '100%', title: 'Client Satisfaction', subtitle: 'Delivered on time', color: '#10b981' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    padding: '30px 20px',
                    background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}05 100%)`,
                    border: `1px solid ${stat.color}30`,
                    borderRadius: '20px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: `0 20px 40px ${stat.color}20`
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div 
                    style={{
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      color: stat.color,
                      marginBottom: '10px'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#e5e7eb',
                    marginBottom: '5px'
                  }}>
                    {stat.title}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#9ca3af'
                  }}>
                    {stat.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <motion.div 
              style={{
                padding: '40px 30px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                maxWidth: '800px',
                margin: '0 auto'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Code style={{ width: '24px', height: '24px', marginRight: '12px', color: '#60a5fa' }} />
                </motion.div>
                Tech Stack
              </motion.h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center'
              }}>
                {[
                  { name: 'Flutter', color: '#02569B' },
                  { name: 'React Native', color: '#61DAFB' },
                  { name: 'Dart', color: '#00D4AA' },
                  { name: 'TypeScript', color: '#3178C6' },
                  { name: 'JavaScript', color: '#F7DF1E' },
                  { name: 'Kotlin', color: '#7F52FF' },
                  { name: 'Java', color: '#ED8B00' },
                  { name: 'Firebase', color: '#FFCA28' }
                ].map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    style={{
                      padding: '10px 20px',
                      background: `${tech.color}20`,
                      border: `1px solid ${tech.color}40`,
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: tech.color === '#F7DF1E' ? '#000000' : '#ffffff',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 25px ${tech.color}50`,
                      y: -3
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span 
          style={{
            fontSize: '14px',
            color: '#9ca3af',
            marginBottom: '12px',
            fontWeight: '500'
          }}
          whileHover={{ scale: 1.1, color: '#ffffff' }}
        >
          Scroll to explore
        </motion.span>
        <motion.div 
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid #6b7280',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
            cursor: 'pointer'
          }}
          whileHover={{ 
            borderColor: '#ffffff',
            scale: 1.1
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div 
            style={{
              width: '4px',
              height: '8px',
              background: '#6b7280',
              borderRadius: '2px'
            }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 