import { useState } from 'react';
import { Download } from 'lucide-react';
import ProductModal from '../components/ProductModal';

const fertilityProducts = [
    {
     id: 1,
    name: 'Metjas-EM',
    category: 'Diabetes Management',
    image: '/Metjas.jpg',
    description: 'Empowered diabetes management targeting heart and kidneys with one smart combination for comprehensive glycemic control.',
    benefits: [
      'Promotes urinary glucose excretion via SGLT2 inhibition',
      'Decreases hepatic glucose output and improves insulin sensitivity',
      'Offers triple-action glycemic control for improved HbA1c levels',
      'Cardiometabolic benefit supports heart and kidney health',
      'Empowers diabetes management',
      'Targets heart and kidneys with one smart combination'
    ],
    composition: 'Empagliflozin 12.5mg, Metformin HCL 500mg',
    dosage: 'As directed by physician',
    packaging: '10x10 Tablets (100 Tablets Pack)',
    prescription: 'Required',
    features: ['Glycemic Control', 'Heart Protection', 'Kidney Protection', 'Dual Action'],
    indications: 'Type 2 Diabetes Management with cardiovascular and renal concerns',
    sideEffects: 'May cause urinary tract infections, genital infections, or gastrointestinal discomfort. Consult physician.',
    storage: 'Store in a cool, dry and dark place at below 25°C. Protect from direct light and moisture',
    price: 'Contact for pricing',
    availability: 'In Stock'
  }
  
];



export default function Menopausal() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      
      

      

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fertilityProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden cursor-pointer group"
                onClick={() => openProductModal(product)}
              >
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-xs text-pink-600 font-semibold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                
                 
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

 
      

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}