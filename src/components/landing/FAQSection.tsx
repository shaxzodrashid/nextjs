"use client";

import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const faqCategories = {
    general: {
      title: "General Questions",
      icon: "❓",
      color: "from-blue-500 to-cyan-500"
    },
    pricing: {
      title: "Pricing & Plans",
      icon: "💰",
      color: "from-green-500 to-teal-500"
    },
    technical: {
      title: "Technical Support",
      icon: "🔧",
      color: "from-purple-500 to-pink-500"
    },
    security: {
      title: "Security & Privacy",
      icon: "🔒",
      color: "from-red-500 to-orange-500"
    }
  };

  const faqs = {
    general: [
      {
        id: "g1",
        question: "What makes your web development services unique?",
        answer: "Our approach combines cutting-edge technology with user-centered design principles. We focus on creating scalable, performant applications using modern frameworks like React, Next.js, and TypeScript. Our team brings years of experience in both startup and enterprise environments, ensuring we can adapt to any project size or complexity."
      },
      {
        id: "g2",
        question: "How long does a typical project take to complete?",
        answer: "Project timelines vary based on complexity and scope. A simple landing page might take 2-3 weeks, while a full-scale web application can take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process with regular milestones and demos."
      },
      {
        id: "g3",
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes! We offer comprehensive maintenance packages that include regular updates, security patches, performance monitoring, and technical support. Our support plans range from basic monthly maintenance to 24/7 enterprise-level support with dedicated account managers."
      },
      {
        id: "g4",
        question: "Can you work with our existing team and systems?",
        answer: "Absolutely. We&apos;re experienced in collaborating with in-house teams and integrating with existing systems. We can work as an extension of your team, provide consultation services, or take full ownership of specific projects while maintaining seamless communication and integration."
      }
    ],
    pricing: [
      {
        id: "p1",
        question: "What&apos;s included in each pricing tier?",
        answer: "Each tier is designed for different business needs. Starter includes basic features perfect for small projects, Professional adds advanced functionality and priority support for growing businesses, and Enterprise provides custom solutions with dedicated support for large organizations. All plans include SSL certificates, mobile responsiveness, and basic analytics."
      },
      {
        id: "p2",
        question: "Are there any hidden fees or additional costs?",
        answer: "No hidden fees! Our pricing is completely transparent. The only additional costs might be third-party services you choose to integrate (like premium APIs or specialized hosting requirements), which we&apos;ll discuss upfront. All development, testing, and basic deployment costs are included in your plan."
      },
      {
        id: "p3",
        question: "Can I upgrade or downgrade my plan anytime?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We&apos;ll help you migrate any additional features and ensure a smooth transition without any service interruption."
      },
      {
        id: "p4",
        question: "Do you offer custom pricing for large projects?",
        answer: "Yes, we provide custom pricing for enterprise clients and large-scale projects. Our enterprise solutions include volume discounts, custom feature development, dedicated project managers, and flexible payment terms. Contact our sales team for a personalized quote."
      }
    ],
    technical: [
      {
        id: "t1",
        question: "What technologies and frameworks do you use?",
        answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, and Docker. Our tech stack is chosen based on project requirements, ensuring optimal performance, scalability, and maintainability."
      },
      {
        id: "t2",
        question: "How do you ensure website performance and speed?",
        answer: "We implement multiple optimization strategies including code splitting, lazy loading, image optimization, CDN integration, and server-side rendering. We also conduct regular performance audits using tools like Lighthouse and WebPageTest to maintain optimal Core Web Vitals scores."
      },
      {
        id: "t3",
        question: "Do you provide API development and integration services?",
        answer: "Yes, we specialize in both RESTful and GraphQL API development. We can create custom APIs for your applications or integrate with existing third-party services. Our APIs are designed with security, scalability, and documentation as top priorities."
      },
      {
        id: "t4",
        question: "How do you handle database design and management?",
        answer: "We design databases with scalability and performance in mind, using both SQL and NoSQL solutions as appropriate. Our database services include schema design, optimization, backup strategies, and migration services. We also provide ongoing database monitoring and maintenance."
      }
    ],
    security: [
      {
        id: "s1",
        question: "How do you ensure the security of our applications?",
        answer: "Security is built into every layer of our development process. We implement HTTPS encryption, secure authentication systems, input validation, SQL injection prevention, XSS protection, and regular security audits. We also follow OWASP guidelines and industry best practices."
      },
      {
        id: "s2",
        question: "Are you compliant with GDPR and other privacy regulations?",
        answer: "Yes, we ensure all applications comply with GDPR, CCPA, and other relevant privacy regulations. We implement proper data handling procedures, privacy controls, cookie consent management, and data retention policies as required by law."
      },
      {
        id: "s3",
        question: "How do you handle data backup and disaster recovery?",
        answer: "We implement comprehensive backup strategies including automated daily backups, geographically distributed storage, and tested disaster recovery procedures. Our backup systems ensure minimal data loss and quick recovery times in case of any issues."
      },
      {
        id: "s4",
        question: "Do you provide security audits and penetration testing?",
        answer: "Yes, we offer comprehensive security audits and can arrange penetration testing through our certified security partners. We also provide ongoing security monitoring and can implement additional security measures based on audit findings."
      }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCategory = faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Question Mark Pattern */}
        <div className="absolute top-1/4 left-1/4 text-blue-100 dark:text-blue-900 opacity-20 text-9xl font-bold animate-pulse">
          ?
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-purple-100 dark:text-purple-900 opacity-20 text-7xl font-bold animate-bounce" style={{ animationDelay: '1s' }}>
          !
        </div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Frequently Asked Questions
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
            Got Questions?
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> We&apos;ve Got Answers</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to the most common questions about our services, pricing,
            and technical capabilities. Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 dark:border-gray-700 rounded-full focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(faqCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm">{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Category Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${currentCategory.color} rounded-full text-white shadow-lg`}>
              <span className="text-2xl">{currentCategory.icon}</span>
              <h3 className="text-xl font-semibold">{currentCategory.title}</h3>
            </div>
          </div>

          {/* FAQ Accordion */}
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-0 overflow-hidden transform transition-all duration-500 hover:shadow-xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <div className="flex items-start space-x-4 w-full">
                      <div className={`w-8 h-8 bg-gradient-to-r ${currentCategory.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1`}>
                        Q
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 group-data-[state=open]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-8 h-8 bg-gradient-to-r ${currentCategory.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 opacity-70`}>
                        A
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No FAQs Found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Get in touch with us for personalized answers
              to your specific questions or to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
