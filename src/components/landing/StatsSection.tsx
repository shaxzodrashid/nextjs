"use client";

import { useState, useEffect, useRef, useMemo } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    uptime: 0,
    awards: 0,
    countries: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const finalStats = useMemo(() => ({
    projects: 1250,
    clients: 850,
    satisfaction: 98,
    uptime: 99.9,
    awards: 25,
    countries: 45
  }), []);

  const statsData = useMemo(() => [
    {
      key: 'projects',
      value: finalStats.projects,
      label: 'Projects Completed',
      suffix: '+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'clients',
      value: finalStats.clients,
      label: 'Happy Clients',
      suffix: '+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500'
    },
    {
      key: 'satisfaction',
      value: finalStats.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-500'
    },
    {
      key: 'uptime',
      value: finalStats.uptime,
      label: 'System Uptime',
      suffix: '%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500'
    },
    {
      key: 'awards',
      value: finalStats.awards,
      label: 'Industry Awards',
      suffix: '+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      key: 'countries',
      value: finalStats.countries,
      label: 'Countries Served',
      suffix: '+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-emerald-500 to-blue-500'
    }
  ], [finalStats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setAnimatedStats({
          projects: Math.floor(finalStats.projects * easeOutQuart),
          clients: Math.floor(finalStats.clients * easeOutQuart),
          satisfaction: Math.floor(finalStats.satisfaction * easeOutQuart),
          uptime: parseFloat((finalStats.uptime * easeOutQuart).toFixed(1)),
          awards: Math.floor(finalStats.awards * easeOutQuart),
          countries: Math.floor(finalStats.countries * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(animateStats, 500);
    return () => clearTimeout(timeout);
  }, [isVisible, finalStats]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200 dark:bg-purple-800 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>

        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="stats-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Proven Results
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
            Numbers That
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Speak Volumes</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our track record of success is reflected in these impressive metrics,
            showcasing our commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <div
              key={stat.key}
              className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>

              {/* Stat Number */}
              <div className="mb-4">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  <span className="tabular-nums">
                    {stat.key === 'uptime' ? animatedStats[stat.key as keyof typeof animatedStats].toFixed(1) : animatedStats[stat.key as keyof typeof animatedStats]}
                  </span>
                  <span className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 150 + 500}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "ISO 27001", subtitle: "Security Certified", icon: "🔒" },
            { title: "AWS Partner", subtitle: "Cloud Excellence", icon: "☁️" },
            { title: "Google Partner", subtitle: "Digital Innovation", icon: "🚀" },
            { title: "Microsoft Gold", subtitle: "Technology Partner", icon: "⭐" }
          ].map((badge, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                {badge.title}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {badge.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of satisfied clients who trust us with their success
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Become Our Next Success Story
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
