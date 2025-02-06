import React from 'react';
import { Bot, Brain, Sparkles, Users, Zap } from 'lucide-react';

const AIFashionLanding = () => {
  const features = [
    {
      id: 1,
      title: "HauteMatch™",
      subtitle: "Virtual Stylist AI",
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      description: "Deep learning-powered personal styling that considers your preferences, history, and occasions.",
      features: [
        "Mood-based styling tailored to emotions",
        "Event-specific outfit curation",
        "Dynamic updates reflecting seasonal trends"
      ]
    },
    {
      id: 2,
      title: "PerfectFitAI™",
      subtitle: "Fit Finder AI",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Body-mapping algorithms ensuring perfect fit for every customer.",
      features: [
        "Virtual try-ons with digital avatar",
        "Intelligent fabric interaction analysis",
        "Smart size predictions based on your data"
      ]
    },
    {
      id: 3,
      title: "VogueRadar™",
      subtitle: "Trend Forecaster AI",
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      description: "Real-time trend analysis from global fashion shows, celebrity styles, and social media.",
      features: [
        "Real-time trend insights",
        "Geographical trend relevance",
        "Exclusive designer collaborations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-scale-in">
            AI-Powered Fashion Personalization
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of fashion with our three proprietary AI models
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-slide-up`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-50 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-600 opacity-0 animate-slide-in"
                    style={{
                      animationDelay: `${(index * 200) + (i * 100)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <Zap className="w-4 h-4 text-purple-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            Experience AI Fashion
          </button>
        </div>
      </div>

      {/* Add CSS animations */}
      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from { 
            transform: scale(0.9);
            opacity: 0;
          }
          to { 
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AIFashionLanding;