import { useState } from 'react';
import { Download } from 'lucide-react';
import ProductModal from '../components/ProductModal';

const fertilityProducts = [
  {
   
  
    id: 1,
    name: 'Ovalite',
    category: 'Fertility Support',
    image: '/ovalite.jpg',
    description: 'A powerful combination for female health, fertility, cardiovascular wellness, energy, and stamina with antioxidant protection.',
    benefits: [
      'Supports energy, heart health, and antioxidant protection',
      'Enhances stamina and reproductive health',
      'Provides anti-aging benefits',
      'Supports fat metabolism and energy production',
      'Improves blood flow and circulation',
      'Boosts energy production in cells',
      'Protects eyes, skin, and cardiovascular system'
    ],
    composition: 'L-Carnitine 500mg, L-Arginine 100mg, Liposomal Coenzyme Q10 20mg, Astaxanthin 8mg, Lycopene 2500mcg, Zinc 5mg, Selenomethionine 40mcg, Protodioscin 40mg',
    dosage: 'As directed by physician',
    packaging: '10x15 Tablets (150 Tablets Pack)',
    prescription: 'Required',
    features: ['Energy & Stamina', 'Antioxidant Protection', 'Reproductive Health', 'Cardiovascular Support'],
    indications: 'Cardiovascular Health, Energy & Stamina, Antioxidant Protection, Male & Female Vitality, Reproductive Health, Immunity & General Well-being, Thyroid & Cellular Function',
    sideEffects: 'Generally well tolerated. Consult physician if any discomfort occurs.',
    storage: 'Store in a cool dry place away from direct sunlight',
    price: 'Contact for pricing',
    availability: 'In Stock'
  },
];



export default function PCOS() {
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
      

      {/* CTA Section */}
      

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