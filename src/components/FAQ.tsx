import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What therapeutic areas does Venjas Pharma cover?',
    answer: 'We specialize in six key therapeutic areas: Fertility Care, Cardiac Health Management, Diabetes Control, Gastrointestinal Wellness, Orthopaedics, and General Healthcare. Each product range is developed with the highest quality standards and extensive research.',
  },
  {
    question: 'Are Venjas Pharma products 100% authentic?',
    answer: 'Absolutely! All our products are sourced directly from licensed manufacturers and authorized distributors. We maintain strict quality control, FDA compliance, and complete traceability. Each product undergoes rigorous testing before reaching our partners and patients.',
  },
  {
    question: 'How can hospitals and clinics partner with Venjas?',
    answer: 'We collaborate with healthcare professionals, hospitals, and distributors nationwide. You can contact us at +91 9966238889 or email venjaspharma@gmail.com to discuss partnership opportunities. Our team will guide you through the process.',
  },
  {
    question: 'What makes Venjas Pharma different from other pharmaceutical companies?',
    answer: 'Our commitment to innovation, integrity, quality, and accessibility sets us apart. We focus on ethical marketing, patient commitment, and partnership growth. Healthcare is our commitment, not just business—this philosophy drives every decision.',
  },
  {
    question: 'Can I request specific products or formulations?',
    answer: 'Yes! We work closely with healthcare professionals to develop and customize solutions. Whether you need specialized formulations or specific product ranges, our team can assist. Contact us for detailed discussions about your requirements.',
  },
  {
    question: 'What is your CSR commitment?',
    answer: 'Venjas Pharma actively participates in awareness programs and community health initiatives. We believe in making healthcare accessible and contributing to society. We welcome collaborations for health camps and awareness drives.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Venjas Pharma and our products
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600'
                    : 'bg-gray-100'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Have more questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Reach out anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919966238889" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.006-.122c.882-.72 2.313-2.247 2.533-3.795C15.622 7.41 15 5.5 13 5m0 0H9m4 0a8 8 0 110 16H5a8 8 0 110-16h8z" />
              </svg>
              <span>Call Us</span>
            </a>
            <a href="mailto:venjaspharma@gmail.com" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold border-2 border-orange-500 hover:bg-orange-50 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
