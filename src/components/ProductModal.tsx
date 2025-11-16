import { X, CheckCircle2, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  benefits: string[];
  composition: string;
  dosage: string;
  packaging: string;
  prescription: string;
  features: string[];
  indications: string;
  sideEffects: string;
  storage: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState('details');

  const handleInquiry = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello Venjas Pharma,\n\nI would like to know more about ${product.name}.\n\nPlease provide detailed information about this medicine.\n\nThank you.`;
    
    window.open(`mailto:venjaspharma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919966238889', '_self');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
            <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
              {/* Product Image */}
              <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h2>
                <div className="text-base text-orange-600 font-semibold mt-1">
                  {product.category}
                </div>
                
                <div className="mt-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.prescription === 'OTC' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {product.prescription === 'OTC' ? 'Over the Counter' : 'Prescription Required'}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full self-start"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {['details', 'information', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'details' && 'Medicine Details'}
                  {tab === 'information' && 'Product Information'}
                  {tab === 'contact' && 'Get Information'}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'details' && (
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">About This Medicine</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>
                </div>

                {/* Key Benefits */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Key Benefits</h3>
                  <div className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Features */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'information' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Composition</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.composition}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recommended Dosage</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.dosage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Packaging</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.packaging}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Indications</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.indications}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Side Effects</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.sideEffects}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Storage Instructions</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.storage}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Get More Information</h3>
                  <p className="text-gray-700 mb-6">
                    For detailed information about {product.name}, please contact our medical team. 
                    We're here to provide comprehensive details about this medicine.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">+91 9966238889</div>
                        <div className="text-sm text-gray-600">Speak with our medical team</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-100">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">venjaspharma@gmail.com</div>
                        <div className="text-sm text-gray-600">Send your inquiries</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Inquiry</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={handleInquiry}
                      className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Send Inquiry About {product.name}</span>
                    </button>
                    
                    <button 
                      onClick={handleCall}
                      className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}