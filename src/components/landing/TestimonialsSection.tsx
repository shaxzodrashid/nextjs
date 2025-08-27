"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/assets/client_1.jpg",
      content: "Working with this team has been absolutely transformational for our business. Their attention to detail and innovative approach exceeded all our expectations. The results speak for themselves - our conversion rates increased by 300%.",
      rating: 5,
      companyLogo: "🚀"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      company: "DataFlow Solutions",
      image: "/assets/client_2.jpg",
      content: "The level of technical expertise and professionalism is unmatched. They delivered a complex solution ahead of schedule and under budget. Our system performance improved by 250% after their optimization work.",
      rating: 5,
      companyLogo: "💡"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      image: "/assets/client_3.jpg",
      content: "Their creative vision and strategic thinking helped us completely reimagine our digital presence. The new platform they built has become our most powerful marketing tool, generating 400% more leads.",
      rating: 5,
      companyLogo: "📈"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder, InnovateLab",
      company: "InnovateLab",
      image: "/assets/client_4.jpg",
      content: "From concept to deployment, every phase was handled with exceptional care and expertise. The team&apos;s ability to understand our vision and translate it into reality was remarkable. Highly recommended!",
      rating: 5,
      companyLogo: "🔬"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "VP of Operations, ScaleUp Co.",
      company: "ScaleUp Co.",
      image: "/assets/client_5.jpg",
      content: "The automation solutions they implemented saved us countless hours and significantly reduced operational costs. Their ongoing support and maintenance have been exemplary. True partners in our success.",
      rating: 5,
      companyLogo: "⚡"
    },
    {
      id: 6,
      name: "James Mitchell",
      role: "Head of Digital, RetailMax",
      company: "RetailMax",
      image: "/assets/client_6.jpg",
      content: "Their e-commerce platform revolutionized our online sales. The user experience is seamless, and our customers love the new interface. Sales increased by 180% in the first quarter after launch.",
      rating: 5,
      companyLogo: "🛒"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} animate-pulse`}
        style={{ animationDelay: `${i * 0.1}s` }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section ref={sectionRef} data-visible={isVisible} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Quote Marks */}
        <div className="absolute top-1/4 left-1/4 text-blue-100 dark:text-blue-900 opacity-30 transform -rotate-12">
          <svg className="w-32 h-32 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-purple-100 dark:text-purple-900 opacity-30 transform rotate-12">
          <svg className="w-24 h-24 animate-bounce" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-4v-10h10z"/>
          </svg>
        </div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Client Testimonials
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
            What Our Clients
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Say About Us</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders and successful 
            entrepreneurs have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-2xl mx-4">
                    <CardContent className="p-12">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                        {/* Client Image */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.name} - ${testimonial.role}`}
                              className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-700"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                            <div className="hidden w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white dark:border-gray-700">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            
                            {/* Company Logo Badge */}
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-600">
                              <span className="text-2xl">{testimonial.companyLogo}</span>
                            </div>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex-1 text-center lg:text-left">
                          {/* Quote */}
                          <div className="relative mb-8">
                            <svg className="absolute -top-4 -left-4 w-8 h-8 text-blue-200 dark:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed italic pl-8">
                              &quot;{testimonial.content}&quot;
                            </p>
                          </div>

                          {/* Rating */}
                          <div className="flex justify-center lg:justify-start mb-6">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Client Info */}
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {testimonial.name}
                            </h4>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                              {testimonial.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 dark:bg-blue-400 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-4 ring-blue-500 dark:ring-blue-400 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-20 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-20 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="absolute bottom-1 left-1 right-1">
                <div className="text-xs text-white font-medium truncate">
                  {testimonial.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
