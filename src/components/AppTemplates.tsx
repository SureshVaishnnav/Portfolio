import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Zap, Star, ShoppingCart, Eye } from 'lucide-react';

const AppTemplates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const templates = [
    {
      id: 1,
      name: "E-Commerce Template",
      description: "Complete e-commerce solution with product catalog, shopping cart, payment integration, and admin panel.",
      price: "$199",
      features: [
        "Product catalog with categories",
        "Shopping cart & wishlist",
        "Payment gateway integration",
        "Order management system",
        "User authentication",
        "Admin dashboard",
        "Push notifications",
        "Analytics integration"
      ],
      downloads: 2500,
      rating: 4.8,
      image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=E-Commerce+Template",
      category: "E-Commerce",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Social Media Template",
      description: "Modern social networking app with user profiles, posts, messaging, and real-time notifications.",
      price: "$179",
      features: [
        "User profiles & authentication",
        "Post creation & sharing",
        "Real-time messaging",
        "Push notifications",
        "Photo & video upload",
        "Like & comment system",
        "Friend/follow system",
        "Privacy settings"
      ],
      downloads: 1800,
      rating: 4.7,
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Social+Template",
      category: "Social Media",
      color: "#8b5cf6"
    },
    {
      id: 3,
      name: "Food Delivery Template",
      description: "On-demand food delivery platform with restaurant listings, order tracking, and payment processing.",
      price: "$159",
      features: [
        "Restaurant listings",
        "Menu management",
        "Order tracking",
        "Payment processing",
        "Delivery management",
        "User reviews",
        "Real-time updates",
        "Multiple payment methods"
      ],
      downloads: 2200,
      rating: 4.9,
      image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Food+Delivery+Template",
      category: "Food & Delivery",
      color: "#10b981"
    },
    {
      id: 4,
      name: "Fitness Tracker Template",
      description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
      price: "$149",
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Progress analytics",
        "Goal setting",
        "Social features",
        "Wearable integration",
        "Custom workout plans",
        "Progress photos"
      ],
      downloads: 1600,
      rating: 4.6,
      image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Fitness+Template",
      category: "Health & Fitness",
      color: "#f59e0b"
    },
    {
      id: 5,
      name: "Educational App Template",
      description: "Learning platform with video courses, quizzes, progress tracking, and certificate generation.",
      price: "$169",
      features: [
        "Video course player",
        "Interactive quizzes",
        "Progress tracking",
        "Certificate generation",
        "Discussion forums",
        "Offline learning",
        "Multi-language support",
        "Instructor dashboard"
      ],
      downloads: 1400,
      rating: 4.5,
      image: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Education+Template",
      category: "Education",
      color: "#ef4444"
    },
    {
      id: 6,
      name: "Travel Companion Template",
      description: "Travel planning and booking app with itinerary management, local recommendations, and booking integration.",
      price: "$139",
      features: [
        "Trip planning",
        "Hotel booking",
        "Flight search",
        "Local recommendations",
        "Itinerary management",
        "Travel expenses",
        "Offline maps",
        "Travel community"
      ],
      downloads: 1200,
      rating: 4.4,
      image: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=Travel+Template",
      category: "Travel",
      color: "#06b6d4"
    }
  ];

  const categories = ['All', 'E-Commerce', 'Social Media', 'Food & Delivery', 'Health & Fitness', 'Education', 'Travel'];

  const filteredTemplates = activeFilter === 'All' 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

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
      id="templates" 
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
              App{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Templates
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
              Ready-to-use mobile app templates to accelerate your development process
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

          {/* Templates Grid */}
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px',
              marginBottom: '80px'
            }}
            variants={itemVariants}
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
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
                  boxShadow: `0 20px 40px ${template.color}20`
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Template Image */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={template.image} 
                    alt={template.name}
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
                    background: `${template.color}20`,
                    border: `1px solid ${template.color}40`,
                    borderRadius: '20px',
                    padding: '6px 12px',
                    color: template.color,
                    fontSize: '12px',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {template.category}
                  </div>
                </div>

                {/* Template Content */}
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
                    {template.name}
                  </motion.h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    color: '#d1d5db',
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    {template.description}
                  </p>

                  {/* Features */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '10px',
                    marginBottom: '20px'
                  }}>
                    {template.features.slice(0, 6).map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '14px',
                          color: '#d1d5db'
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <Check style={{ 
                          width: '16px', 
                          height: '16px', 
                          color: template.color,
                          flexShrink: 0
                        }} />
                        <span>{feature}</span>
                      </motion.div>
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
                      <span style={{ color: '#d1d5db', fontSize: '14px' }}>{template.downloads.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Star style={{ width: '16px', height: '16px', color: '#fbbf24' }} />
                      <span style={{ color: '#d1d5db', fontSize: '14px' }}>{template.rating}</span>
                    </div>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: template.color
                    }}>
                      {template.price}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <motion.button
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        background: `linear-gradient(135deg, ${template.color} 0%, ${template.color}80 100%)`,
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
                        boxShadow: `0 10px 25px ${template.color}40`
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart style={{ width: '16px', height: '16px' }} />
                      Buy Now
                    </motion.button>
                    <motion.button
                      style={{
                        padding: '12px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        background: 'rgba(255, 255, 255, 0.2)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye style={{ width: '16px', height: '16px' }} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            style={{ 
              textAlign: 'center',
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
              Need a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Custom Template?
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
              I can create a custom template tailored to your specific requirements and design preferences
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
              <Zap style={{ width: '20px', height: '20px' }} />
              Request Custom Template
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppTemplates; 