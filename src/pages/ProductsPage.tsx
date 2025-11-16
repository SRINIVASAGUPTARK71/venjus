import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Download } from 'lucide-react';
import ProductModal from '../components/ProductModal';

const products = [
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    name: 'Ovalite',
    category: 'pcos',
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

const categories = ['All', 'Fertility Support', 'Cardiovascular Health', 'Diabetes Management'];

// Download catalogue function
const downloadCatalogue = () => {
  const pdfUrl = '/venjas-catalogue.pdf';
  
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Venjas-Product-Catalogue.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function ProductsPage() {
  const location = useLocation();
  // Get the selected category from navigation state, default to 'All'
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.selectedCategory || 'All'
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = products.filter(product => {
    return selectedCategory === 'All' || product.category === selectedCategory;
  });

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
      {/* Simple Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Quality pharmaceutical solutions
            </p>
            {/* Show active category filter */}
            {selectedCategory !== 'All' && (
              <div className="mt-4 inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                Showing: {selectedCategory}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
          

            {/* Download Catalogue Button */}
            <button 
              onClick={downloadCatalogue}
              className="flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
            >
              <Download className="w-5 h-5" />
              <span>Download Catalogue</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clean Rectangular Product Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Info */}
          {selectedCategory !== 'All' && (
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory} Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {selectedCategory === 'Fertility Support' && 'Comprehensive PCOS management, fertility enhancement, and reproductive health solutions for men and women'}
                {selectedCategory === 'Cardiovascular Health' && 'Advanced cardiovascular therapies for heart protection and stroke prevention'}
                {selectedCategory === 'Diabetes Management' && 'Smart diabetes management solutions with heart and kidney protection'}
                {selectedCategory === 'Gastrointestinal Wellness' && 'Complete digestive health solutions for acidity relief and gut balance'}
                {selectedCategory === 'Bone & Joint Support' && 'Musculoskeletal support for bone strength and joint mobility'}
                {selectedCategory === 'Neurological Support' && 'Neurological health solutions for brain function and nerve health'}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 overflow-hidden cursor-pointer group"
                onClick={() => openProductModal(product)}
              >
                {/* Rectangular Product Image */}
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Name Only - Clean and Simple */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-8xl mb-6">📂</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
              <p className="text-lg text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Simple CTA Section */}
      

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