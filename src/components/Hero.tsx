import { ArrowRight, ShoppingBag, Sparkles, Zap, Award, Globe, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const navigateToProducts = () => {
    navigate('/products');
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 10; // Reduced movement
      const y = (clientY / window.innerHeight - 0.5) * 10; // Reduced movement
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced laser particles
    const particles = [];
    const particleCount = 40; // Reduced for performance

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1; // Slower movement
        this.vy = (Math.random() - 0.5) * 1; // Slower movement
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.2;
        this.color = `hsl(${Math.random() * 30 + 15}, 100%, 60%)`; // Orange to red colors
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulsing effect
        this.alpha = 0.2 + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.2;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        
        // Create laser glow effect
        ctx.shadowBlur = 10; // Reduced glow
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connecting lines with bezier curves
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.2; // More subtle
            
            // Create gradient for the line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(255, 100, 50, ${opacity})`);
            gradient.addColorStop(1, `rgba(255, 50, 50, ${opacity * 0.5})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8; // Thinner lines
            ctx.shadowBlur = 5; // Reduced shadow
            ctx.shadowColor = 'rgba(255, 100, 50, 0.3)';
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            
            // Add slight curve to the line
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const offset = Math.sqrt(dx * dx + dy * dy) * 0.1;
            
            ctx.quadraticCurveTo(
              midX + offset, midY - offset,
              particles[j].x, particles[j].y
            );
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-br from-orange-50 via-red-50 to-white overflow-hidden relative"
    >
      {/* Laser Flow Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-1/4 left-1/5 w-8 h-8 text-orange-400 opacity-60 ${
            isVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <Sparkles />
        </div>
        <div 
          className={`absolute top-1/3 right-1/4 w-6 h-6 text-red-400 opacity-60 ${
            isVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{ animationDelay: '1s' }}
        >
          <Zap />
        </div>
        <div 
          className={`absolute bottom-1/3 left-1/3 w-7 h-7 text-orange-500 opacity-60 ${
            isVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.5s' }}
        >
          <Award />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div 
              className={`inline-flex items-center space-x-2   text-sm font-medium border border-orange-200 shadow-md transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              
            </div>

            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Delivering Quality Healthcare,{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Building a Healthier Future
              </span>
            </h1>

            <p 
              className={`text-lg md:text-xl text-gray-600 leading-relaxed font-sans transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Venjas Pharma Private Limited is a rapidly emerging pharmaceutical marketing company committed to 
              delivering high-quality, affordable, and innovative healthcare solutions. With a deep understanding of patient 
              needs and medical excellence, Venjas Pharma strives to build trusted brands that ensure better health and a 
              brighter tomorrow.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <button 
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-sans relative overflow-hidden"
                onClick={navigateToProducts}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ShoppingBag className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Explore Our Products</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                className="group bg-white text-orange-600 px-6 py-4 rounded-full font-semibold border-2 border-orange-500 hover:bg-orange-50 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-sans"
                onClick={navigateToContact}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-3xl opacity-60 animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` // Reduced movement
              }}
            ></div>
            <div 
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 font-sans transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` // Reduced movement
              }}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl flex items-center gap-2">
                    <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                    Company Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-orange-50 p-3 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer hover:shadow-md group/item">
                      <div className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm font-medium text-gray-900 group-hover/item:text-orange-700 transition-colors">Visionary Leadership & Transparent Practices</div>
                      </div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-colors cursor-pointer hover:shadow-md group/item">
                      <div className="flex items-start gap-2">
                        <Globe className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm font-medium text-gray-900 group-hover/item:text-red-700 transition-colors">PAN India Marketing Network</div>
                      </div>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer hover:shadow-md group/item">
                      <div className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm font-medium text-gray-900 group-hover/item:text-pink-700 transition-colors">Dedicated Divisions – Cardiac, Diabetic, Gastro, Ortho, Fertility, and General</div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer hover:shadow-md group/item">
                      <div className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm font-medium text-gray-900 group-hover/item:text-yellow-700 transition-colors">Strong Ethical Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300 group/cert">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover/cert:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">WHO-GMP Certified</div>
                      <div className="text-xs text-gray-600">Manufacturing Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}