import React, { useState } from 'react';
import { 
  ChevronDown, 
  Truck, 
  RefreshCw, 
  MessageCircle, 
  HelpCircle,
  Clock,
  Package,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faqs');
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      category: "Orders & Payments",
      questions: [
        {
          q: "How can I track my order?",
          a: "You can track your order by clicking on 'Track Order' in your account dashboard or using the tracking number provided in your shipping confirmation email."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
        }
      ]
    },
    {
      category: "Product & Sizing",
      questions: [
        {
          q: "How do I find my size?",
          a: "You can refer to our detailed size guide available on each product page. We provide measurements in inches and centimeters for accurate sizing."
        },
        {
          q: "Are your products sustainable?",
          a: "Yes, we use ethically sourced materials and sustainable production methods. Each product page includes detailed information about materials and origin."
        }
      ]
    }
  ];

  const shippingInfo = [
    {
      title: "Standard Shipping",
      time: "3-5 business days",
      price: "$5.99",
      description: "Available for all orders within the continental US"
    },
    {
      title: "Express Shipping",
      time: "1-2 business days",
      price: "$12.99",
      description: "Order by 2 PM for same-day processing"
    },
    {
      title: "International Shipping",
      time: "7-14 business days",
      price: "Varies by location",
      description: "Available for most countries worldwide"
    }
  ];

  const returnSteps = [
    {
      title: "Initiate Return",
      description: "Log into your account and select the items you wish to return"
    },
    {
      title: "Print Label",
      description: "Download and print your prepaid return shipping label"
    },
    {
      title: "Pack Items",
      description: "Pack items in original packaging or similar secure packaging"
    },
    {
      title: "Ship",
      description: "Drop off your package at any authorized shipping location"
    }
  ];

  const TabButton = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-6 py-4 rounded-lg transition-all ${
        activeTab === id 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  const ContactForm = () => (
    <form className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Order Number (Optional)</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          rows={4}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Send Message
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-50    ">
      {/* Hero Section */}
      <div className="bg-white border-b ">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h1 className="text-4xl font-light mb-4">How Can We Help?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our customer service team is here to assist you with any questions or concerns
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TabButton icon={HelpCircle} label="FAQs" id="faqs" />
          <TabButton icon={Truck} label="Shipping & Delivery" id="shipping" />
          <TabButton icon={RefreshCw} label="Returns & Exchanges" id="returns" />
          <TabButton icon={MessageCircle} label="Contact Us" id="contact" />
        </div>

        {/* Content Sections */}
        <div className="mt-12">
          {/* FAQs Section */}
          {activeTab === 'faqs' && (
            <div className="space-y-8">
              {faqData.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <h3 className="text-xl font-medium px-6 py-4 border-b">
                    {category.category}
                  </h3>
                  <div className="divide-y">
                    {category.questions.map((faq, faqIdx) => (
                      <div key={faqIdx} className="px-6 py-4">
                        <button
                          onClick={() => setActiveFaq(activeFaq === `${idx}-${faqIdx}` ? null : `${idx}-${faqIdx}`)}
                          className="w-full flex justify-between items-center text-left"
                        >
                          <span className="font-medium">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 transform transition-transform ${
                              activeFaq === `${idx}-${faqIdx}` ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeFaq === `${idx}-${faqIdx}` && (
                          <p className="mt-4 text-gray-600">{faq.a}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Shipping Section */}
          {activeTab === 'shipping' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-medium">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-light">{info.price}</p>
                    <p className="text-gray-600">{info.time}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Returns Section */}
          {activeTab === 'returns' && (
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-light mb-8">Returns Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {returnSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 font-medium">{idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {idx < returnSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-medium mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>support@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>1-800-123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>123 Fashion St, NY 10001</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <p>Monday - Friday: 9AM - 6PM EST</p>
                    <p>Saturday: 10AM - 4PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;