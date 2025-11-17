import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Download, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
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
  };

  const navigateToProducts = () => {
    navigate('/products');
  };

  const navigateTofer = () => {
    navigate('/products/fertility');
  };

  const navigateTocar = () => {
    navigate('/products/cardiovascular');
  };

  const navigateTodia = () => {
    navigate('/products/diabetes');
  };

  const navigateTopcos = () => {
    navigate('/products/PCOS');
  };

  const navigateTouti = () => {
    navigate('/products/UTI');
  };

  const navigateTonutri = () => {
    navigate('/products/nutri');
  };

  const navigateTom = () => {
    navigate('/products/Menopausal');
  };

  const navigateToMedia = () => {
    navigate('/media');
  };

  // NEW: Function to navigate to contacts page
  const navigateToContacts = () => {
    navigate('/contact');
  };

  const downloadCatalogue = () => {
    const pdfUrl = '/venjas-catalogue.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Venjas-Product-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/WhatsApp Image 2025-10-25 at 19.03.28_0e0010f0.jpg"
                alt="Venjas Pharma"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-white text-lg">Venjas Pharma Private Limited</div>
                <div className="text-xs text-orange-500">Commited to quality. Inspired by innovation</div>
              </div>
            </div>
           
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61583654798549" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/VPPLBharat" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/venjas-pharma-835a03375/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={navigateTofer} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Fertility Support</span>
                </button>
              </li>
              <li>
                <button onClick={navigateTopcos} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>PCOS</span>
                </button>
              </li>
              <li>
                <button onClick={navigateTom} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Menopausal</span>
                </button>
              </li>
              <li>
                <button onClick={navigateTouti} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>UTI & BV</span>
                </button>
              </li>
              <li>
                <button onClick={navigateTonutri} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Nutritional</span>
                </button>
              </li>
              <li>
                <button onClick={navigateTocar} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Cardiac Care</span>
                </button>
              </li>
              <li>
                <button onClick={navigateTodia} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Diabetes Control</span>
                </button>
              </li>
              <li>
                <button onClick={downloadCatalogue} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2 w-full text-left mt-4 text-orange-400 font-semibold">
                  <Download className="w-4 h-4" />
                  <span>Download Full Product Catalogue</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={navigateToProducts} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Products</span>
                </button>
              </li>
              <li>
                <button onClick={navigateToMedia} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Media Gallery</span>
                </button>
              </li>
              <li>
                {/* CHANGED: Now uses navigateToContacts instead of scrollToSection */}
                <button onClick={navigateToContacts} className="hover:text-orange-400 transition-colors text-sm flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
            
            {/* Corporate Office */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Corporate Office</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
               FT G1-103 H-7 19, ETH Nagar, Kukatpally,<br />
                Tirumalagiri, Hyderabad – 500072,<br />
                Telangana, India
              </p>
            </div>

            {/* Registered Office */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Registered Office</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                FT G1-103 H-7 19, ETH Nagar, Kukatpally,<br />
                Tirumalagiri, Hyderabad – 500072,<br />
                Telangana, India
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="tel:+919966238889" className="hover:text-orange-400 transition-colors text-sm">
                    +91 9966238889
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:Info@venjaspharma.com" className="hover:text-orange-400 transition-colors text-sm">
                    Info@venjaspharma.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Website</div>
                  <a href="https://www.venjaspharma.com" className="hover:text-orange-400 transition-colors text-sm flex items-center gap-1">
                    www.venjaspharma.com
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <p className="text-gray-400">
                © 2025 Venjas Pharma Pvt. Ltd. | All Rights Reserved.
              </p>
              <p className="text-gray-400">
                Committed to Care. Dedicated to Quality.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">www.venjaspharma.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
