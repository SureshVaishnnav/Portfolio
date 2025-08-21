import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Globe, Send, MessageSquare, User, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'suresh.vaishnav@example.com',
      color: '#3b82f6',
      link: 'mailto:suresh.vaishnav@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: '#10b981',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      color: '#f59e0b',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM PST',
      color: '#8b5cf6',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sureshvaishanav',
      icon: Linkedin,
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sureshvaishanav',
      icon: Github,
      color: '#333333'
    },
    {
      name: 'Website',
      url: 'https://suresh-vaishnav.com',
      icon: Globe,
      color: '#10b981'
    }
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
      id="contact" 
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
              Get In{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Touch
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
              Let's discuss your next mobile app project or collaboration opportunity
            </motion.p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 'bold',
                  marginBottom: '40px',
                  color: '#ffffff'
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                Let's{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Connect
                </span>
              </motion.h3>
              
              <div style={{ marginBottom: '40px' }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '20px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      marginBottom: '15px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderColor: `${info.color}40`
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      style={{
                        width: '50px',
                        height: '50px',
                        background: `${info.color}20`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '20px',
                        border: `1px solid ${info.color}40`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        boxShadow: `0 10px 25px ${info.color}30`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon style={{ 
                        width: '24px', 
                        height: '24px', 
                        color: info.color 
                      }} />
                    </motion.div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '5px'
                      }}>
                        {info.title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        color: '#d1d5db'
                      }}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '20px'
                }}>
                  Follow Me
                </h4>
                <div style={{
                  display: 'flex',
                  gap: '15px'
                }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: `${social.color}20`,
                        border: `1px solid ${social.color}40`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        boxShadow: `0 10px 25px ${social.color}30`,
                        background: `${social.color}30`
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon style={{ 
                        width: '24px', 
                        height: '24px', 
                        color: social.color 
                      }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                style={{
                  padding: '40px',
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
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageSquare style={{ width: '24px', height: '24px', color: '#3b82f6' }} />
                  Send Message
                </motion.h3>
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#d1d5db',
                      marginBottom: '8px'
                    }}>
                      Name
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '18px',
                        height: '18px',
                        color: '#9ca3af'
                      }} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '15px 15px 15px 45px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#d1d5db',
                      marginBottom: '8px'
                    }}>
                      Email
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '18px',
                        height: '18px',
                        color: '#9ca3af'
                      }} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '15px 15px 15px 45px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#d1d5db',
                      marginBottom: '8px'
                    }}>
                      Subject
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Calendar style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '18px',
                        height: '18px',
                        color: '#9ca3af'
                      }} />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '15px 15px 15px 45px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#d1d5db',
                      marginBottom: '8px'
                    }}>
                      Message
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MessageSquare style={{
                        position: 'absolute',
                        left: '15px',
                        top: '20px',
                        width: '18px',
                        height: '18px',
                        color: '#9ca3af'
                      }} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        style={{
                          width: '100%',
                          padding: '15px 15px 15px 45px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          resize: 'vertical',
                          transition: 'all 0.3s ease',
                          fontFamily: 'inherit'
                        }}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '16px 32px',
                      background: isSubmitting 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '15px',
                      fontSize: '18px',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    whileHover={!isSubmitting ? { 
                      scale: 1.02,
                      boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)'
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{
                            width: '20px',
                            height: '20px',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            borderTop: '2px solid #ffffff',
                            borderRadius: '50%'
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send style={{ width: '20px', height: '20px' }} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 