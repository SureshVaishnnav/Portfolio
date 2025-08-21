import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Download, Eye, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "FR (First Responders)",
      description: "First Responder is a React Native-based emergency app that allows users to instantly request ambulance services, with real-time location tracking, notifications, and live ambulance updates. Guides ambulance drivers to patient locations via Google Maps integration.",
      image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=First+Responders",
      technologies: ["React Native", "Google Maps", "Firebase"],
      category: "Emergency Services",
      downloads: "50K+",
      rating: 4.8,
      link: "#",
      color: "#ef4444"
    },
    {
      id: 2,
      title: "Aquila i (Cyber Awareness)",
      description: "Aquila i is a Native-based cyber security awareness app featuring interactive quizzes, a KBC-style game, certificate downloads in PDF format, and integrated webviews for enhanced learning, educating users about online threats and best practices.",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Aquila+i",
      technologies: ["Android Native", "Java", "PDF Generation"],
      category: "Education",
      downloads: "25K+",
      rating: 4.6,
      link: "#",
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "Job Milegi (Job Requirements)",
      description: "Job search application providing verified vacancies in Bhiwadi, Manesar, Gurugram, Bawal, Neemrana, and other categories.",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Job+Milegi",
      technologies: ["React Native", "Firebase", "Job APIs"],
      category: "Job Search",
      downloads: "100K+",
      rating: 4.7,
      link: "#",
      color: "#10b981"
    },
    {
      id: 4,
      title: "Umatic (E-commerce)",
      description: "Developed intuitive e-commerce app with seamless user experience and secure transactions, focusing on scalability and performance.",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Umatic",
      technologies: ["Flutter", "Firebase", "Stripe"],
      category: "E-Commerce",
      downloads: "200K+",
      rating: 4.8,
      link: "#",
      color: "#8b5cf6"
    },
    {
      id: 5,
      title: "Tutorgator",
      description: "Developed from scratch using Android (Java). Integrated Google Maps API, Chat Socket, Google Sign-In, OTP verification via REST APIs, video trimmer, and custom calendars.",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Tutorgator",
      technologies: ["Android Native", "Java", "Google Maps", "REST APIs"],
      category: "Education",
      downloads: "75K+",
      rating: 4.5,
      link: null,
      color: "#f59e0b"
    },
    {
      id: 6,
      title: "Eldercare",
      description: "Eldercare consists of group of dedicated veterans (selfless soldiers from Army, Navy & Air Force who have recently retired), doctors and social work specialists working to bridge the distance.",
      image: "https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Eldercare",
      technologies: ["React Native", "Firebase", "Healthcare APIs"],
      category: "Healthcare",
      downloads: "30K+",
      rating: 4.9,
      link: "#",
      color: "#06b6d4"
    },
    {
      id: 7,
      title: "Spofit365",
      description: "Spofit365 is a React Native sports app offering venue booking, slot payments via Stripe, tournament enrollment, team creation, player availability marking, rewards, real-time tournament status, notifications, and in-app ads.",
      image: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Spofit365",
      technologies: ["React Native", "Stripe", "Firebase", "Real-time"],
      category: "Sports",
      downloads: "150K+",
      rating: 4.7,
      link: "#",
      color: "#ec4899"
    },
    {
      id: 8,
      title: "Spofit365 Partner",
      description: "Spofit365 also empowers partners to create and publish tournaments, manage venue bookings, boost tournament visibility, maintain organization profiles, and share live match and tournament details with advanced search and filter options.",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Spofit365+Partner",
      technologies: ["React Native", "Firebase", "Admin Panel"],
      category: "Sports",
      downloads: "25K+",
      rating: 4.6,
      link: "#",
      color: "#8b5cf6"
    },
    {
      id: 9,
      title: "Rajasthan Tourism (RTDC)",
      description: "Explore the royal heritage of Rajasthan with ease. Discover forts, palaces, festivals, and local experiences. Your perfect travel companion for the Land of Kings.",
      image: "https://via.placeholder.com/400x300/F97316/FFFFFF?text=Rajasthan+Tourism",
      technologies: ["React Native", "Tourism APIs", "Google Maps"],
      category: "Travel",
      downloads: "100K+",
      rating: 4.8,
      link: "#",
      color: "#f97316"
    }
  ];

  const categories = ['All', 'Emergency Services', 'Education', 'Job Search', 'E-Commerce', 'Healthcare', 'Sports', 'Travel'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
      id="projects" 
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
        top: '10%',
        left: '10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '350px',
        height: '350px',
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
                Projects
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
              Explore my portfolio of innovative mobile applications and digital solutions
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '15px', 
              justifyContent: 'center', 
              marginBottom: '60px' 
            }}
            variants={itemVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  padding: '12px 24px',
                  background: activeFilter === category 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: activeFilter === category 
                    ? 'none' 
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  background: activeFilter === category 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' 
                    : 'rgba(255, 255, 255, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}
            variants={itemVariants}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: `0 20px 40px ${project.color}20`
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    borderRadius: '20px',
                    padding: '6px 12px',
                    color: project.color,
                    fontSize: '12px',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '25px' }}>
                  <motion.h3 
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    color: '#d1d5db',
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                          padding: '6px 12px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '500',
                          border: `1px solid ${project.color}40`
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: `0 5px 15px ${project.color}30`
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Download style={{ width: '16px', height: '16px', color: '#60a5fa' }} />
                      <span style={{ color: '#d1d5db', fontSize: '14px' }}>{project.downloads}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Star style={{ width: '16px', height: '16px', color: '#fbbf24' }} />
                      <span style={{ color: '#d1d5db', fontSize: '14px' }}>{project.rating}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {project.link ? (
                    <motion.button
                      onClick={() => window.open(project.link, '_blank')}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}80 100%)`,
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 10px 25px ${project.color}40`
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink style={{ width: '16px', height: '16px' }} />
                      Play Store
                    </motion.button>
                  ) : (
                    <motion.div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#9ca3af',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'not-allowed'
                      }}
                    >
                      <Eye style={{ width: '16px', height: '16px' }} />
                      Coming Soon
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            style={{ 
              textAlign: 'center', 
              marginTop: '80px',
              padding: '50px 30px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)'
            }}
            variants={itemVariants}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#ffffff'
              }}
              whileHover={{ scale: 1.02 }}
            >
              Ready to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Collaborate?
              </span>
            </motion.h3>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#d1d5db',
              marginBottom: '30px',
              maxWidth: '600px',
              margin: '0 auto 30px auto',
              lineHeight: '1.6'
            }}>
              Let's work together to bring your ideas to life with cutting-edge mobile solutions
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
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
              <Code style={{ width: '20px', height: '20px' }} />
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 