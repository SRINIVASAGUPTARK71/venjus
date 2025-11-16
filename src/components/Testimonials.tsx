import { Star, Quote, Shield, Award } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Senior Physician',
    image: '👨‍⚕️',
    rating: 5,
    text: 'Venjas Pharma products are exceptional in quality. I confidently recommend them to all my patients. Their commitment to excellence is remarkable.',
  },
  {
    name: 'Priya Sharma',
    role: 'Healthcare Professional',
    image: '👩‍⚕️',
    rating: 5,
    text: 'Outstanding quality and affordability! The range of therapeutic products is comprehensive. Venjas truly understands patient needs.',
  },
  {
    name: 'Amitabh Patel',
    role: 'Hospital Administrator',
    image: '👨‍💼',
    rating: 5,
    text: 'Excellent partnership with Venjas Pharma. Their reliability and ethical practices make them stand out in the industry.',
  },
  {
    name: 'Sneha Desai',
    role: 'Patient',
    image: '👩',
    rating: 5,
    text: 'The fertility products helped my family tremendously. Affordable, quality, and I felt truly cared for by the team.',
  },
  {
    name: 'Vikram Singh',
    role: 'Distributor',
    image: '👨‍💼',
    rating: 5,
    text: 'Working with Venjas Pharma is a pleasure. Their products fly off shelves and customer satisfaction is exceptional.',
  },
  {
    name: 'Anjali Verma',
    role: 'Pharmacist',
    image: '👩‍⚕️',
    rating: 5,
    text: 'Best pharmaceutical partner we could ask for. Quality, support, and integrity - Venjas has it all.',
  },
];

const trustBadges = [
  { icon: Shield, text: 'FDA Approved', color: 'from-green-500 to-emerald-600' },
  { icon: Award, text: 'ISO Certified', color: 'from-blue-500 to-cyan-600' },
  { icon: Star, text: '4.9/5 Rating', color: 'from-yellow-500 to-orange-600' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What They Say
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Healthcare{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Professionals & Patients
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            See what doctors, hospitals, and patients say about Venjas Pharma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-teal-200" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center space-x-3">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Quality Assured & Certified
            </h3>
            <p className="text-gray-600">
              Excellence and authenticity guaranteed in every product
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-gray-900 text-lg">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
