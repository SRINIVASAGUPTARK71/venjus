import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const downloadCatalogue = () => {
  const pdfUrl = '/venjas-catalogue.pdf';
  
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Venjas-Product-Catalogue.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Product divisions with icons
const productDivisions = [
  {
    name: 'Fertility Support',
    icon: '/pregnancy.png',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    description: 'Comprehensive fertility and reproductive health solutions',
    path: '/products/fertility'
  },
  {
    name: 'PCOS',
    icon: '/w.png',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    description: 'Polycystic ovary syndrome management and treatment',
    path: '/products/pcos'
  },
  {
    name: 'Cardiovascular Health',
    icon: '/heart.png',
    color: 'from-red-500 to-orange-600',
    bgColor: 'bg-red-50',
    description: 'Advanced cardiovascular therapies and heart protection',
    path: '/products/cardiovascular'
  },
  {
    name: 'Diabetes Management',
    icon: '/diabetes.png',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    description: 'Smart diabetes management with organ protection',
    path: '/products/diabetes'
  },
  {
    name: 'UTI & BV',
    icon: '/medical.png', // You might want a specific icon for this
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-50',
    description: 'Urinary tract and bacterial vaginosis treatments',
    path: '/products/UTI'
  },
  {
    name: 'Nutritional Supplements',
    icon: '/t.png', // You might want a specific icon for this
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    description: 'Essential vitamins and nutritional supplements',
    path: '/products/nutri'
  }
];

// Add the missing keyProducts array
const keyProducts = [
  "Fertility & PCOS Management Solutions",
  "Cardiovascular Health Products", 
  "Diabetes Care Medications",
  "UTI & Bacterial Vaginosis Treatments",
  "Nutritional Supplements & Vitamins",
  "Women's Health Specialties"
];

// Division Icon Component
function DivisionIcon({ division }) {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleDivisionClick = (path) => {
    // Navigate to products page with the division category
    navigate(path);
  };

  return (
    <button
      onClick={() => handleDivisionClick(division.path)}
      className={`${division.bgColor} p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer text-center w-full h-full flex flex-col items-center justify-start`}
    >
      {/* Icon Container */}
      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        {!imageError ? (
          <img 
            src={division.icon} 
            alt={`${division.name} icon`}
            className="w-12 h-12 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${division.color} rounded-2xl flex items-center justify-center`}>
            <div className="text-white text-xl font-bold">{division.name.charAt(0)}</div>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
        {division.name}
      </h3>
      
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
        {division.description}
      </p>

      <div className="text-orange-600 text-sm font-semibold group-hover:scale-105 transition-transform duration-300 mt-auto">
        Explore →
      </div>
    </button>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Pharmaceutical Range
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
             Our{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Divisions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
Each division is dedicated to promoting specialized, research-backed formulations developed with care and scientific excellence.
          </p>
        </div>

        {/* Icon Grid Layout - Adjusted for 3 items */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {productDivisions.map((division, index) => (
              <DivisionIcon key={index} division={division} />
            ))}
          </div>
        </div>

        
       
        {/* Key Products Section */}
        
        {/* Business Opportunity */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Opportunity</h3>
              <p className="text-gray-700 mb-6">
                Venjas Pharma welcomes ethical distributors, franchise partners, and business associates to join our mission of expanding quality healthcare access across India.
              </p>
              <p className="text-orange-600 font-semibold italic">
                "Together, let's redefine healthcare excellence."
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-4">Why Partner With Us?</h4>
              <div className="space-y-3">
                {[
                  "Transparent Business Policies",
                  "Competitive Margins", 
                  "Strong Brand Support (Visual Aids, Samples, Digital Marketing)",
                  "Reliable Supply Chain & Customer Support"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Catalogue */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Download Our Full Product Catalogue
          </h3>
          <button 
            onClick={downloadCatalogue}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>Download Catalogue (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
}