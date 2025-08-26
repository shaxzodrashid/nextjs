"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const techCategories = {
    frontend: {
      title: "Frontend Technologies",
      description: "Modern frameworks and libraries for exceptional user experiences",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", level: 95, description: "Component-based UI library", icon: "⚛️" },
        { name: "Next.js", level: 92, description: "Full-stack React framework", icon: "▲" },
        { name: "TypeScript", level: 90, description: "Type-safe JavaScript", icon: "📘" },
        { name: "Tailwind CSS", level: 88, description: "Utility-first CSS framework", icon: "🎨" },
        { name: "Vue.js", level: 85, description: "Progressive JavaScript framework", icon: "💚" },
        { name: "Angular", level: 82, description: "Platform for web applications", icon: "🅰️" }
      ]
    },
    backend: {
      title: "Backend Technologies",
      description: "Robust server-side solutions and APIs",
      color: "from-green-500 to-teal-500",
      technologies: [
        { name: "Node.js", level: 94, description: "JavaScript runtime environment", icon: "🟢" },
        { name: "Python", level: 91, description: "Versatile programming language", icon: "🐍" },
        { name: "Express.js", level: 89, description: "Fast web framework for Node.js", icon: "🚀" },
        { name: "Django", level: 87, description: "High-level Python web framework", icon: "🎯" },
        { name: "FastAPI", level: 85, description: "Modern Python web framework", icon: "⚡" },
        { name: "GraphQL", level: 83, description: "Query language for APIs", icon: "📊" }
      ]
    },
    database: {
      title: "Database Solutions",
      description: "Scalable data storage and management systems",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "PostgreSQL", level: 93, description: "Advanced relational database", icon: "🐘" },
        { name: "MongoDB", level: 90, description: "NoSQL document database", icon: "🍃" },
        { name: "Redis", level: 88, description: "In-memory data structure store", icon: "🔴" },
        { name: "MySQL", level: 86, description: "Popular relational database", icon: "🐬" },
        { name: "Elasticsearch", level: 84, description: "Search and analytics engine", icon: "🔍" },
        { name: "Firebase", level: 82, description: "Real-time database platform", icon: "🔥" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      description: "Modern deployment and infrastructure solutions",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS", level: 92, description: "Amazon Web Services", icon: "☁️" },
        { name: "Docker", level: 90, description: "Containerization platform", icon: "🐳" },
        { name: "Kubernetes", level: 87, description: "Container orchestration", icon: "⚓" },
        { name: "Vercel", level: 89, description: "Frontend deployment platform", icon: "▲" },
        { name: "GitHub Actions", level: 85, description: "CI/CD automation", icon: "🔄" },
        { name: "Terraform", level: 83, description: "Infrastructure as code", icon: "🏗️" }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const currentCategory = techCategories[activeCategory as keyof typeof techCategories];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% { 
            transform: translateY(-20px) rotate(0deg); 
          }
          75% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        
        @keyframes orbit {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg); 
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg); 
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          animation: orbit 15s linear infinite;
        }

        .orbit-icon {
          animation: pulse-scale 2s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Network Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="tech-network" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-blue-400">
                  <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-blue-300" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-purple-300" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-network)" />
          </svg>

          {/* Floating Tech Icons */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            >
              {['⚛️', '🐍', '🐳', '☁️', '🔥', '🚀', '⚡', '🎯'][i]}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Technology Stack
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
              Powered by
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Cutting-Edge Tech</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage the most advanced technologies and frameworks to deliver 
              exceptional performance, scalability, and user experiences.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Category Info */}
            <div className={`space-y-8 transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentCategory.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {currentCategory.description}
                </p>
              </div>

              {/* Technology List */}
              <div className="space-y-6">
                {currentCategory.technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`transform transition-all duration-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`text-2xl transition-transform duration-300 ${
                          hoveredTech === tech.name ? 'scale-125' : ''
                        }`}>
                          {tech.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {tech.level}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full transition-all duration-1000 ease-out ${
                          hoveredTech === tech.name ? 'animate-pulse' : ''
                        }`}
                        style={{
                          width: isVisible ? `${tech.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Interactive Visualization */}
            <div className={`relative transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}>
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl overflow-hidden shadow-2xl">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-pulse z-10">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* Orbiting Technologies */}
                {currentCategory.technologies.slice(0, 6).map((tech, index) => (
                  <div
                    key={tech.name}
                    className="animate-orbit"
                    style={{
                      animationDelay: `${index * -2.5}s`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className={`w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transition-all duration-300 cursor-pointer orbit-icon ${
                      hoveredTech === tech.name ? 'ring-4 ring-blue-400 scale-125' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 0.3}s`,
                    }}>
                      {tech.icon}
                    </div>
                  </div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {currentCategory.technologies.slice(0, 6).map((_, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = 120;
                    const x = Math.cos(angle) * radius + 192;
                    const y = Math.sin(angle) * radius + 192;

                    return (
                      <line
                        key={index}
                        x1="192"
                        y1="192"
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-blue-300 dark:text-blue-700 opacity-30"
                        strokeDasharray="5,5"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;10"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    );
                  })}
                </svg>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {currentCategory.technologies.length}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Technologies
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {Math.round(currentCategory.technologies.reduce((acc, tech) => acc + tech.level, 0) / currentCategory.technologies.length)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg. Expertise
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how our technology expertise can bring your vision to life 
                with the perfect combination of performance, scalability, and innovation.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}