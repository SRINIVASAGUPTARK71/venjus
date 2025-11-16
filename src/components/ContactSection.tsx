// ContactSection.tsx - Enhanced UI/UX Version (No Sonner)
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Navigation, Building, Users, CheckCircle2, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const name = `${firstName} ${lastName}`.trim();
    
    // Create email content
    const subject = `Contact Form Submission from ${name}`;
    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This message was sent from Venjas Pharma website contact form.
    `.trim();

    // Encode the subject and body for mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Create mailto link
    const mailtoLink = `mailto:Info@venjaspharma.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Simulate loading for better UX
    setTimeout(() => {
      // Open user's email client
      window.location.href = mailtoLink;
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      formRef.current?.reset();
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: Building, 
      title: "Registered Office", 
      content: "Hyderabad, Telangana, India",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: MapPin, 
      title: "Licensed Office", 
      content: "Hyderabad, Telangana, India",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      content: "+91 9966238889", 
      href: "tel:+919966238889",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Mail, 
      title: "Email Us", 
      content: "Info@venjaspharma.com", 
      href: "mailto:Info@venjaspharma.com",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Clock, 
      title: "Office Hours", 
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      color: "from-amber-500 to-yellow-500"
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-25"></div>
      
      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl max-w-md mx-auto flex items-center gap-3"
        >
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <div>
            <p className="font-semibold">Success!</p>
            <p className="text-sm">Opening your email client... Please send the email to complete your message.</p>
          </div>
        </motion.div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-orange-700 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm mb-6 hover:shadow-md transition-all duration-300">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reach out to us for any inquiries or partnership opportunities
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-10">
            {/* Enhanced Contact Information Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full opacity-50 -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.1 }} 
                    className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-gray-600 hover:text-orange-600 transition-colors break-words text-base font-medium flex items-center gap-1 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.content}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Navigation size={14} />
                          </div>
                        </a>
                      ) : (
                        <p className="text-gray-600 text-base font-medium">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Interactive Map Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Main Hyderabad Office Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative group">
                <div className="h-64 md:h-72 lg:h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263234338638!2d78.48622931538474!3d17.412888588059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dac93a5f21%3A0x813fd4821507b67!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venjas Pharma - Hyderabad Office"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-5 bg-gradient-to-r from-orange-50 to-red-50 border-t border-orange-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <div>
                        <h4 className="font-bold text-gray-900">Hyderabad Office</h4>
                        <p className="text-sm text-gray-600">Registered Office</p>
                      </div>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Hyderabad,Telangana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Navigation size={16} />
                      <span className="text-sm font-semibold">Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Guntur Office Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative group">
                <div className="h-48 md:h-56 lg:h-60 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.123456789012!2d80.44000000000001!3d16.300000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a5c123456789%3A0xabcdef123456789!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venjas Pharma - Hyderabad Office"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-gray-900 text-sm">Hyderbad Licensed Office</span>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Hyderabad,Telangana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300"
                    >
                      Get Directions
                      <Navigation size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 sticky top-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full opacity-50 -mr-16 -mt-16"></div>
            
            <div className="text-center mb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Send Message
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Contact us for inquiries or partnership opportunities
              </p>
            </div>

            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    First Name *
                    {focusedField === 'firstName' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <div className="relative">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-orange-300 peer"
                      placeholder="Enter your first name"
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    Last Name *
                    {focusedField === 'lastName' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <div className="relative">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-orange-300 peer"
                      placeholder="Enter your last name"
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  Email Address *
                  {focusedField === 'email' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-orange-300 peer"
                    placeholder="Enter your email address"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  Phone Number *
                  {focusedField === 'phone' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-orange-300 peer"
                    placeholder="Enter your phone number"
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  Message *
                  {focusedField === 'message' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-orange-300 resize-none peer"
                    placeholder="Tell us how we can help you..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                    <AlertCircle className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Preparing Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">Response Time</p>
                  <p className="text-sm text-gray-600">We'll respond within 24 hours on business days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
