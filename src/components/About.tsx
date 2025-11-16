// About.tsx - Professional version without floating icons
import { Award, Heart, Target, Zap, Globe, Users, Shield, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div 
                className={`inline-flex items-center gap-3 bg-white text-orange-700 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                About Us
              </div>

              <h2 
                className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Who We Are
              </h2>

              <div 
                className={`transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                  <p>
                    Venjas Pharma Pvt. Ltd., headquartered in Hyderabad, Telangana, with a licensed office in Guntur, Andhra Pradesh, is driven by a passion for quality healthcare. We collaborate with reputed third-party WHO-GMP and ISO-certified manufacturers to market formulations that meet global standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div 
                className={`bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Our Mission
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To deliver world-class, affordable medicines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To establish a strong presence in specialized rapeutic segments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To build enduring relationships with doctors, patients, and distributors.</span>
                  </li>
                </ul>
              </div>

              <div 
                className={`bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as one of India's most trusted and ethical pharmaceutical marketing companies, enhancing human life through superior formulations and service excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Core Values & Therapeutic Areas */}
          <div className="space-y-8">
            {/* Core Values */}
            <div 
              className={`bg-white p-8 rounded-2xl border border-gray-200 shadow-sm ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="font-bold text-gray-900 text-2xl mb-6 text-center">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Integrity & Transparency", desc: "Building trust through ethical practices", color: "border-orange-200", icon: <Shield className="w-5 h-5 text-orange-600" /> },
                  { name: "Innovation", desc: "Continuously improving through research and creativity", color: "border-blue-200", icon: <Sparkles className="w-5 h-5 text-blue-600" /> },
                  { name: "Quality", desc: "Ensuring excellence at every stage of product delivery", color: "border-green-200", icon: <Award className="w-5 h-5 text-green-600" /> },
                  { name: "Commitment", desc: "Dedicated to our mission of better healthcare", color: "border-red-200", icon: <Heart className="w-5 h-5 text-red-600" /> },
                  { name: "Teamwork", desc: "Empowering people and fostering collaboration", color: "border-purple-200", icon: <Users className="w-5 h-5 text-purple-600" /> },
                  { name: "Accessibility", desc: "Making healthcare solutions available to all", color: "border-yellow-200", icon: <Globe className="w-5 h-5 text-yellow-600" /> }
                ].map((value, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border-2 ${value.color} hover:shadow-md transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {value.icon}
                      <h4 className="font-semibold text-gray-900">{value.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Manufacturing Excellence */}
            <div 
              className={`bg-white p-6 rounded-xl border border-gray-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Manufacturing Excellence
              </h3>
              <p className="text-gray-700 mb-4">All our products are manufactured at WHO-GMP & ISO 9001:2015 certified facilities, ensuring:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  Stringent Quality Control (QA/QC)
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  Stability-tested Formulations
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  Usage of Premium HPMC (Lonza Veaps®) Capsules
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  Compliance with Drug Control & Regulatory Standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
