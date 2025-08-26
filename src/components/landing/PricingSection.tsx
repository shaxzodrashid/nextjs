"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small projects and startups",
      monthlyPrice: 29,
      yearlyPrice: 290,
      savings: "17%",
      popular: false,
      features: [
        "Up to 5 projects",
        "10GB storage",
        "Basic support",
        "SSL certificate",
        "Mobile responsive",
        "Basic analytics",
        "Email support"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for growing businesses and agencies",
      monthlyPrice: 79,
      yearlyPrice: 790,
      savings: "17%",
      popular: true,
      features: [
        "Unlimited projects",
        "100GB storage",
        "Priority support",
        "Advanced SSL",
        "Custom domains",
        "Advanced analytics",
        "24/7 phone support",
        "API access",
        "Team collaboration",
        "Custom integrations"
      ],
      color: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      savings: "17%",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated support manager",
        "Custom development",
        "White-label solutions",
        "Advanced security",
        "SLA guarantee",
        "Custom integrations",
        "Training & onboarding",
        "Priority feature requests",
        "Custom reporting",
        "Multi-region deployment"
      ],
      color: "from-green-500 to-teal-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

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

  const getPrice = (plan: typeof pricingPlans[0]) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getMonthlyPrice = (plan: typeof pricingPlans[0]) => {
    return isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full opacity-5 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="pricing-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Transparent Pricing
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to grow with your business. 
            No hidden fees, no surprises - just transparent, value-driven pricing.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg inline-flex">
            <span className={`text-sm font-medium transition-colors duration-200 ${!isYearly ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm font-medium transition-colors duration-200 ${isYearly ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              } ${plan.popular ? 'md:-translate-y-4 scale-105' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Most Popular
                  </div>
                </div>
              )}

              <Card className={`h-full bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                hoveredCard === plan.id ? 'scale-105 -translate-y-2' : ''
              } ${plan.popular ? 'ring-2 ring-purple-500 dark:ring-purple-400' : ''} overflow-hidden relative`}>
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center pb-8 relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 transform transition-transform duration-300 ${
                    hoveredCard === plan.id ? 'rotate-12 scale-110' : ''
                  } shadow-lg`}>
                    {plan.icon}
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </CardDescription>

                  {/* Price Display */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${getMonthlyPrice(plan)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        /month
                      </span>
                    </div>
                    
                    {isYearly && (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="line-through">${plan.monthlyPrice}/month</span>
                        <span className="ml-2 text-green-600 dark:text-green-400 font-medium">
                          Save {plan.savings}
                        </span>
                      </div>
                    )}
                    
                    {isYearly && (
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Billed annually (${getPrice(plan)})
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200 + featureIndex * 100}ms` }}
                      >
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>

                  {/* Additional Info */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    {plan.name === 'Enterprise' ? 'Custom pricing available' : '14-day free trial • No credit card required'}
                  </p>
                </CardContent>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 transition-opacity duration-300 pointer-events-none ${
                  hoveredCard === plan.id ? 'opacity-10' : ''
                }`}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We understand that every business is unique. Our team can create a tailored 
              solution that perfectly fits your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3"
              >
                Schedule Consultation
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Contact Sales Team
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[
              { text: "30-Day Money Back", icon: "💰" },
              { text: "99.9% Uptime SLA", icon: "⚡" },
              { text: "24/7 Support", icon: "🛟" },
              { text: "Enterprise Security", icon: "🔒" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
