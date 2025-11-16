import { MessageCircle, X, Send, Pill, User, Download, Clock } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function PharmaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Venjas Pharma Assistant. I can help you with product information, company details, and contact information. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      type: 'text',
      data: "Hello! I'm Venjas Pharma Assistant. I can help you with product information, company details, and contact information. How can I assist you today?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const quickQuestions = [
    { text: 'Tell me about your products', icon: '💊' },
    { text: 'What is your mission?', icon: '🎯' },
    { text: 'Contact information', icon: '📞' },
    { text: 'Download catalogue', icon: '📥' },
    { text: 'Company locations', icon: '📍' }
  ];

  const products = [
    {
      name: 'Ferticare',
      category: 'Fertility Support',
      icon: '❤️',
      description: 'Micronutrients and antioxidants to promote reproductive health and hormonal balance.',
      benefits: [
        'Supports ovulation and reproductive wellness',
        'Improves overall fertility health',
        'Safe for long-term use'
      ]
    },
    {
      name: 'Cardiven',
      category: 'Cardiac Health Management',
      icon: '🫀',
      description: 'A heart-friendly formulation designed to support cardiovascular health and lipid balance.',
      benefits: [
        'Promotes healthy heart function',
        'Helps regulate lipid levels',
        'Strengthens cardiac endurance'
      ]
    },
    {
      name: 'Gluconil',
      category: 'Diabetes Control',
      icon: '🩸',
      description: 'Helps manage blood glucose levels and improves insulin response and metabolism.',
      benefits: [
        'Supports glucose control',
        'Enhances insulin sensitivity',
        'Promotes metabolic health'
      ]
    },
    {
      name: 'Gastroz',
      category: 'Gastrointestinal Wellness',
      icon: '🌟',
      description: 'Relief from acidity and indigestion while promoting a healthy digestive system.',
      benefits: [
        'Relieves acidity and bloating',
        'Supports gut balance',
        'Gentle on the stomach'
      ]
    },
    {
      name: 'OrthoMax',
      category: 'Bone & Joint Support',
      icon: '🦴',
      description: 'Supports bone strength, joint mobility, and overall musculoskeletal health.',
      benefits: [
        'Strengthens bones and cartilage',
        'Improves flexibility',
        'Reduces joint stiffness'
      ]
    }
  ];

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('product') || lowerMessage.includes('medicine')) {
      return {
        type: 'products',
        data: products
      };
    }
    else if (lowerMessage.includes('ferticare') || lowerMessage.includes('cardiven') || 
             lowerMessage.includes('gluconil') || lowerMessage.includes('gastroz') || 
             lowerMessage.includes('orthomax')) {
      const productName = products.find(p => lowerMessage.includes(p.name.toLowerCase()))?.name;
      const product = products.find(p => p.name.toLowerCase() === productName?.toLowerCase());
      if (product) {
        return {
          type: 'product_detail',
          data: product
        };
      }
    }
    else if (lowerMessage.includes('mission') || lowerMessage.includes('vision')) {
      return {
        type: 'text',
        data: `**Our Mission**\nTo improve the quality of life by providing safe, effective, and affordable pharmaceutical products that meet the highest standards of excellence.\n\n**Our Vision**\nTo become a trusted global healthcare brand known for innovation, quality, and compassion.`
      };
    }
    else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return {
        type: 'contact',
        data: {
          phone: '+91 9966238889',
          email: 'venjaspharma@gmail.com',
          website: 'www.venjaspharma.com',
          corporate: 'Door No. 3-14-77/1, 2nd Lane, Old Pattabhipuram, DRM Office Road, Guntur – 522006, Andhra Pradesh, India',
          registered: 'FT G1-103 H-7 19, ETH Nagar, Kukatpally, Tirumalagiri, Hyderabad – 500072, Telangana, India'
        }
      };
    }
    else if (lowerMessage.includes('catalogue') || lowerMessage.includes('download') || lowerMessage.includes('brochure')) {
      return {
        type: 'download',
        data: 'Venjas Pharma Product Catalogue'
      };
    }
    else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return {
        type: 'text',
        data: "Hello! Welcome to Venjas Pharma. I'm here to help you learn about our pharmaceutical products and company. What would you like to know?"
      };
    }
    else {
      return {
        type: 'text',
        data: "Thank you for your message. I'm here to help with information about Venjas Pharma products, company details, and contact information. Please feel free to ask about our pharmaceutical range or how to contact us."
      };
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date(),
      type: 'text',
      data: message
    };

    setMessages(prev => [...prev, userMessage]);
    const userInput = message;
    setMessage('');

    // Simulate bot typing
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(userInput);
      const botMessage = {
        id: Date.now() + 1,
        ...response,
        isBot: true,
        timestamp: new Date(),
        data: response?.data || "I'm sorry, I didn't understand that. Could you please rephrase your question?"
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setMessage(question);
    setTimeout(() => handleSendMessage(), 50);
  };

  const ProductCard = ({ product }) => (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-3 mb-2">
      <div className="flex items-start space-x-2">
        <div className="text-xl mt-1">{product.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
            <h4 className="font-bold text-gray-900 text-sm truncate">{product.name}</h4>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full whitespace-nowrap">
              {product.category}
            </span>
          </div>
          <p className="text-xs text-gray-700 mb-2 leading-relaxed">{product.description}</p>
          <div className="space-y-1">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2 text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactCard = ({ contact }) => (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-3">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 text-xs">📞</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-gray-900 text-sm truncate">{contact.phone}</div>
            <div className="text-xs text-gray-600">Phone</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 text-xs">📧</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-gray-900 text-sm truncate">{contact.email}</div>
            <div className="text-xs text-gray-600">Email</div>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-blue-600 text-xs">🏢</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-900 text-xs mb-1">Corporate Office</div>
            <div className="text-xs text-gray-600 leading-relaxed break-words">{contact.corporate}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMessage = (msg) => {
    if (!msg.data) {
      return <p className="text-sm text-gray-600">I'm sorry, I didn't understand that.</p>;
    }

    switch (msg.type) {
      case 'products':
        return (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900 mb-2">Our Pharmaceutical Products:</p>
            {msg.data && Array.isArray(msg.data) && msg.data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        );
      
      case 'product_detail':
        return msg.data ? <ProductCard product={msg.data} /> : <p>Product not found.</p>;
      
      case 'contact':
        return msg.data ? <ContactCard contact={msg.data} /> : <p>Contact information not available.</p>;
      
      case 'download':
        return (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Download className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm mb-1">{msg.data || 'Product Catalogue'}</div>
                <p className="text-xs text-gray-600 mb-2">Detailed information about all our products</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'text':
      default:
        const text = typeof msg.data === 'string' ? msg.data : `I'm sorry, I didn't understand that.`;
        return text.split('\n').map((line, index) => (
          <p key={index} className={index > 0 ? 'mt-1' : ''}>
            {line.startsWith('**') && line.endsWith('**') ? (
              <strong className="text-gray-900 text-sm">{line.replace(/\*\*/g, '')}</strong>
            ) : (
              <span className="text-sm">{line}</span>
            )}
          </p>
        ));
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-40 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform" />
          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse ring-1 sm:ring-2 ring-white"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatContainerRef}
          className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:top-auto w-full h-full sm:w-96 sm:h-[600px] sm:max-h-[80vh] bg-white sm:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-0 sm:border border-gray-200/80 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Pill className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Venjas Pharma Assistant</div>
                <div className="text-white/90 text-xs flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online • 24/7</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-all duration-200 flex-shrink-0"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3 sm:p-4 space-y-2 sm:space-y-3 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start space-x-2 ${msg.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                  msg.isBot 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600' 
                    : 'bg-blue-500'
                }`}>
                  {msg.isBot ? (
                    <Pill className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  ) : (
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] sm:max-w-[85%] ${msg.isBot ? '' : 'text-right'}`}>
                  <div className={`inline-block p-2 sm:p-3 rounded-2xl ${
                    msg.isBot 
                      ? 'bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-tl-sm shadow-sm' 
                      : 'bg-blue-500 text-white rounded-tr-sm shadow-md'
                  }`}>
                    <div className={`${msg.isBot ? 'text-gray-800' : 'text-white'}`}>
                      {renderMessage(msg)}
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 mt-1 text-xs ${
                    msg.isBot ? 'text-gray-500 justify-start' : 'text-gray-600 justify-end'
                  }`}>
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                    <span>{formatTime(msg.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-sm">
                  <Pill className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl rounded-tl-sm p-2 sm:p-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2 sm:space-y-3 pt-2">
                <p className="text-xs text-gray-500 font-medium px-1">Quick questions:</p>
                <div className="grid gap-1 sm:gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question.text)}
                      className="w-full text-left bg-white/80 backdrop-blur-sm hover:bg-white p-2 sm:p-3 rounded-xl text-xs sm:text-sm text-gray-700 hover:text-orange-700 transition-all duration-200 border border-gray-200/50 hover:border-orange-300 hover:shadow-sm group"
                    >
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <span className="text-sm sm:text-base">{question.icon}</span>
                        <span className="group-hover:translate-x-0.5 transition-transform truncate">{question.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm border-t border-gray-200/50 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about products, company, or contact..."
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-gray-100/80 border border-gray-300/50 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    handleSendMessage();
                  }
                }}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isTyping}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-2 sm:p-3 rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-md"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Venjas Pharma • Trusted Healthcare Solutions
            </p>
          </div>
        </div>
      )}
    </>
  );
}