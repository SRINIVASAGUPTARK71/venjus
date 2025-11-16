import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Product divisions for dropdown
  const productDivisions = [
    { name: 'Fertility Support', id: 'fertility', path: '/products/fertility' },
    { name: 'PCOS', id: 'pcos', path: '/products/PCOS' },
    { name: 'Menopausal', id: 'men', path: '/products/Menopausal' },
    { name: 'UTI & BV', id: 'uti', path: '/products/UTI' },
    { name: 'Nutri Supplements', id: 'nutri', path: '/products/nutri' },
    { name: 'Cardiovascular Health', id: 'cardiovascular', path: '/products/cardiovascular' },
    { name: 'Diabetes Management', id: 'diabetes', path: '/products/diabetes' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['about', 'testimonials', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(currentSection || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const navigateToProducts = (path = '/products') => {
    navigate(path);
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const navigateToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const navigateToMedia = () => {
    navigate('/media');
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const navigateToContact = () => {
    navigate('/contact');
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  // Check if a section is active
  const isSectionActive = (sectionId: string) => {
    return location.pathname === '/' && activeSection === sectionId;
  };

  // Check if current route is a products route
  const isProductsRoute = location.pathname.startsWith('/products');

  // Toggle mobile products dropdown
  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  // Handle Products click - navigate to All Products
  const handleProductsClick = () => {
    navigateToProducts('/products');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={navigateToHome}
          >
            <img
              src="/WhatsApp Image 2025-10-25 at 19.03.28_0e0010f0.jpg"
              alt="Venjas Pharma"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg">Venjas Pharma Private Limited</div>
              <div className="text-xs text-gray-600">Commited to quality. Inspired by innovation</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={navigateToHome}
              className={`transition-colors font-medium ${
                location.pathname === '/' && activeSection === '' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                isSectionActive('about')
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              About
            </button>
            
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={handleProductsClick} // Click goes to All Products
                onMouseEnter={() => setIsProductsDropdownOpen(true)} // Hover shows dropdown
                className={`flex items-center space-x-1 transition-colors font-medium ${
                  isProductsRoute || isProductsDropdownOpen
                    ? 'text-orange-600 font-semibold' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  {/* Product Divisions First */}
                  {productDivisions.map((division) => (
                    <button 
                      key={division.id}
                      onClick={() => navigateToProducts(division.path)}
                      className={`block w-full text-left px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-100 ${
                        location.pathname === division.path ? 'text-orange-600 bg-orange-50' : 'text-gray-700'
                      }`}
                    >
                      {division.name}
                    </button>
                  ))}
                  
                  {/* All Products Button at the Bottom */}
                  <div className="p-3 border-t border-gray-100">
                    <button 
                      onClick={handleProductsClick}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                    >
                      All Products
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={navigateToMedia}
              className={`transition-colors font-medium ${
                location.pathname === '/media' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Media
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`transition-colors font-medium ${
                isSectionActive('testimonials')
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Reviews
            </button>
            <button 
              onClick={navigateToContact} // Navigate to /contact route
              className={`transition-colors font-medium ${
                location.pathname === '/contact'
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={handleProductsClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Products
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <button 
              onClick={navigateToHome}
              className={`text-left py-2 transition-colors font-medium ${
                location.pathname === '/' && activeSection === ''
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-left py-2 transition-colors font-medium ${
                isSectionActive('about')
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              About
            </button>
            
            {/* Products Section in Mobile Menu */}
            <div className="py-2">
              <button 
                onClick={toggleMobileProducts}
                className="flex items-center justify-between w-full text-left py-2 transition-colors font-medium text-gray-700 hover:text-orange-600"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileProductsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {/* Product Divisions First */}
                  {productDivisions.map((division) => (
                    <button 
                      key={division.id}
                      onClick={() => navigateToProducts(division.path)}
                      className={`block w-full text-left py-1 text-sm ${
                        location.pathname === division.path
                          ? 'text-orange-600 font-semibold' 
                          : 'text-gray-600 hover:text-orange-600'
                      }`}
                    >
                      {division.name}
                    </button>
                  ))}
                  
                  {/* All Products Button at the Bottom */}
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <button 
                      onClick={handleProductsClick}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                    >
                      All Products
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={navigateToMedia}
              className={`text-left py-2 transition-colors font-medium ${
                location.pathname === '/media' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Media
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`text-left py-2 transition-colors font-medium ${
                isSectionActive('testimonials')
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Reviews
            </button>
            <button 
              onClick={navigateToContact} // Navigate to /contact route
              className={`text-left py-2 transition-colors font-medium ${
                location.pathname === '/contact'
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={handleProductsClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
            >
              View Products
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}