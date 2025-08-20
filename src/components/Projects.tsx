import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A comprehensive e-commerce solution with payment integration, user authentication, and real-time inventory management.",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-Commerce+App",
      technologies: ["Flutter", "Firebase", "Stripe"],
      category: "E-Commerce",
      downloads: "500K+",
      rating: 4.8,
      link: "#"
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Personal fitness companion with workout tracking, nutrition planning, and progress analytics.",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Fitness+App",
      technologies: ["React Native", "Node.js", "MongoDB"],
      category: "Health & Fitness",
      downloads: "300K+",
      rating: 4.6,
      link: "#"
    },
    {
      id: 3,
      title: "Food Delivery Platform",
      description: "On-demand food delivery app with real-time tracking, restaurant management, and payment processing.",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Food+Delivery",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      category: "Food & Delivery",
      downloads: "750K+",
      rating: 4.9,
      link: "#"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Modern social networking platform with photo sharing, messaging, and community features.",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Social+App",
      technologies: ["React Native", "GraphQL", "AWS"],
      category: "Social Media",
      downloads: "1M+",
      rating: 4.7,
      link: "#"
    },
    {
      id: 5,
      title: "Educational Learning App",
      description: "Interactive learning platform with video courses, quizzes, and progress tracking for students.",
      image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Education+App",
      technologies: ["Flutter", "Firebase", "YouTube API"],
      category: "Education",
      downloads: "200K+",
      rating: 4.5,
      link: "#"
    },
    {
      id: 6,
      title: "Travel Companion App",
      description: "Travel planning and booking app with itinerary management, local recommendations, and booking integration.",
      image: "https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Travel+App",
      technologies: ["React Native", "Node.js", "Booking API"],
      category: "Travel",
      downloads: "150K+",
      rating: 4.4,
      link: "#"
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
    <section id="projects" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my best mobile app development work with modern technologies and user-centric design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover hover-scale transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  ⭐ {project.rating}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover-underline cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    📥 {project.downloads} downloads
                  </span>
                  <span className="text-sm text-gray-500">
                    ⭐ {project.rating}/5.0
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 fade-in delay-500">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Project Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600">Apps Published</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">2.5M+</div>
                <div className="text-gray-600">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">4.7</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center fade-in delay-600">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift transition-all duration-300 shadow-lg">
            View All Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 