import { useState } from 'react';
import { Download } from 'lucide-react';
import ProductModal from '../components/ProductModal';

const fertilityProducts = [
  {
    id: 1,
    name: 'Fertiven-M',
    category: 'Fertility Support',
    image: '/fertiven.jpg',
    description: 'Comprehensive male fertility supplement designed to improve sperm quality, motility, and count for asthenozoospermia and male infertility.',
    benefits: [
      'Male fertility support - improves sperm quality, motility, and count',
      'Antioxidant protection - reduces oxidative stress, protects DNA',
      'Energy & vitality - boosts mitochondrial energy and reduces fatigue',
      'Reproductive health - balances hormones, improves testosterone levels',
      'General wellness - supports heart, immunity, and stress management',
      'Ensures healthy sperm and assures happy fatherhood'
    ],
    composition: 'L-Carnitine L-Tartrate 300mg, Coenzyme Q10 100mg, Lycopene 10mg, Zinc 15mg, Vitamin E 10mg, Vitamin C 90mg, Folic Acid 400mcg, Selenium 40mcg, Ashwagandha Extract 250mg, Omega-3 (EPA+DHA) 200mg, Grape Seed Extract 50mg',
    dosage: 'As directed by physician',
    packaging: '10x15 Tablets (150 Tablets Pack)',
    prescription: 'Required',
    features: ['Sperm Health', 'Antioxidant Protection', 'Male Fertility', 'Energy & Vitality'],
    indications: 'Oligoasthenoteratozoospermia (OAT), Idiopathic Male Infertility, Varicocele associated with asthenozoospermia, Smoking Induced Male Infertility',
    sideEffects: 'Generally well tolerated. Consult physician if any discomfort occurs.',
    storage: 'Store in a cool dry place away from direct sunlight',
    price: 'Contact for pricing',
    availability: 'In Stock'
  },
  {
    id: 2,
    name: 'Fertiven-F',
    category: 'Fertility Support',
    image: '/f1.jpg',
    description: 'Comprehensive nutritional support for female fertility, PCOS management, and reproductive wellness to give hope in PCOS.',
    benefits: [
      'Supports fertility & reproductive health (useful in PCOS & infertility)',
      'Enhances metabolism & insulin sensitivity',
      'Provides antioxidant protection (reduces oxidative stress)',
      'Strengthens immunity, energy & overall wellness',
      'Promotes ovulation and reduces pregnancy loss',
      'Improves conception rate',
      'Restores ovulatory activity',
      'Decreases Luteinizing Hormone',
      'Improves oocyte quality'
    ],
    composition: 'Myo-Inositol 300mg, D-Chiro Inositol 50mg, L-Methyl Folate 200mcg, Vitamin D3 600IU, Vitamin B12 2.2mcg, Coenzyme Q10 50mg, L-Arginine 100mg, N-Acetyl Cysteine 200mg, Omega-3 (EPA+DHA) 200mg, Zinc 10mg, Selenium 40mcg',
    dosage: 'As directed by physician',
    packaging: '10x15 Tablets (150 Tablets Pack)',
    prescription: 'Required',
    features: ['Ovulation Support', 'PCOS Management', 'Female Fertility', 'Hormonal Balance'],
    indications: 'PCOS, Pre-eclampsia, Irregular periods, Female fertility support',
    sideEffects: 'Generally well tolerated. Consult physician if any discomfort occurs.',
    storage: 'Store in a cool dry place away from direct sunlight',
    price: 'Contact for pricing',
    availability: 'In Stock'
  },
 
];

const downloadCatalogue = () => {
  const pdfUrl = '/venjas-catalogue.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Venjas-Fertility-Catalogue.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function FertilityProducts() {
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