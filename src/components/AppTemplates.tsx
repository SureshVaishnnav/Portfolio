import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Zap, Shield, RefreshCw } from 'lucide-react';

const AppTemplates: React.FC = () => {
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
      image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=E-Commerce+Template"
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
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Social+Template"
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
      image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Food+Delivery+Template"
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
      image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Fitness+Template"
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
      image: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Education+Template"
    },
    {
      id: 6,
      name: "Travel Companion Template",
      description: "Travel planning app with itinerary management, booking integration, and local recommendations.",
      price: "$139",
      features: [
        "Itinerary planning",
        "Booking integration",
        "Local recommendations",
        "Offline maps",
        "Travel checklist",
        "Expense tracking",
        "Photo sharing",
        "Travel community"
      ],
      downloads: 1200,
      rating: 4.4,
      image: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=Travel+Template"
    }
  ];

  const downloadTemplate = (id: number, name: string) => {
    // Simulate download
    alert(`Downloading ${name} template...`);
  };

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
    <section id="templates" className="py-20 bg-gray-50">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            App <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready-to-use mobile app templates to accelerate your development process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <motion.div 
              key={template.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Template Image */}
              <div className="relative">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {template.price}
                </div>
              </div>

              {/* Template Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {template.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {template.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                    {template.features.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{template.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    📥 {template.downloads} downloads
                  </span>
                  <span className="text-sm text-gray-500">
                    ⭐ {template.rating}/5.0
                  </span>
                </div>

                {/* Download Button */}
                <button 
                  onClick={() => downloadTemplate(template.id, template.name)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Template
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Template Bundle */}
        <div className="mt-16 fade-in delay-500">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Complete Template Bundle</h3>
              <p className="text-xl mb-6 opacity-90">
                Get all 6 templates at a discounted price and save 60%
              </p>
              <div className="flex justify-center items-center gap-4 mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-2xl line-through opacity-70">$1,194</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save $895
                </span>
              </div>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover-lift transition-all duration-300 shadow-lg">
                Get Complete Bundle
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 fade-in delay-600">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover-lift">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Fast Development</h4>
              <p className="text-gray-600">Save months of development time with ready-to-use templates</p>
            </div>

            <div className="text-center hover-lift">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Production Ready</h4>
              <p className="text-gray-600">All templates are tested and optimized for production use</p>
            </div>

            <div className="text-center hover-lift">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Free Updates</h4>
              <p className="text-gray-600">Get lifetime updates and new features for all templates</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppTemplates; 