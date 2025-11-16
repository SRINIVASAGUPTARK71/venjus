import { useState } from 'react';
import { Download } from 'lucide-react';
import ProductModal from '../components/ProductModal';

const fertilityProducts = [
    {
     id: 3,
    name: 'Atorven',
    category: 'Cardiovascular Health',
    image: '/Atroven.jpg',
    description: 'Advanced cardiovascular combination therapy to prevent heart-threatening risks, lower cholesterol, and prevent strokes.',
    benefits: [
      'Lowers blood cholesterol effectively',
      'Stabilizes plaque & prevents strokes',
      'Blocks platelets from sticking together',
      'Prevents formation of harmful clots',
      'Helps keep blood flowing smoothly',
      'Reduces formation of platelet leucocyte micro particles',
      'Prevents heart attacks and strokes'
    ],
    composition: 'Atorvastatin 20mg, Clopidogrel 75mg',
    dosage: 'As directed by physician',
    packaging: '10x10 Capsules (100 Capsules Pack)',
    prescription: 'Required',
    features: ['Cholesterol Control', 'Anti-platelet Action', 'Stroke Prevention', 'Heart Protection'],
    indications: 'Ischemic Heart Disease, Cardiac Prosthesis, Acute Coronary Syndrome, Hyperlipidemia',
    sideEffects: 'May cause bleeding tendencies, headache, or gastrointestinal discomfort. Medical supervision required.',
    storage: 'Store in a cool, dry & dark place. Keep out of reach of children',
    price: 'Contact for pricing',
    availability: 'In Stock'
  }
  
];



export default function CardiovascularProducts() {
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