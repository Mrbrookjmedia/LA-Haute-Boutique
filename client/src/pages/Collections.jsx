// import React from 'react';

import img1 from '../assets/images/collection1.png';
import img2 from '../assets/images/collection2.png';
import img3 from '../assets/images/collection3.png';

// const Collection = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       {/* Navigation */}
//       {/* <nav className="flex items-center justify-between py-4 px-6">
//         <div className="flex items-center space-x-6">
//           <a href="#" className="text-gray-800">Home</a>
//           <a href="#" className="text-gray-800">Shop</a>
//           <a href="#" className="text-gray-800">Collections</a>
//         </div>
//         <div className="flex items-center space-x-6">
//           <a href="#" className="text-gray-800">About</a>
//           <a href="#" className="text-gray-800">Contact</a>
//           <a href="#" className="text-gray-800">Cart (0)</a>
//         </div>
//       </nav> */}

//       {/* First Section */}
//       <section className="mb-24">
//         <div className="text-center mb-8">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded mt-6">
//             Seasonal Collection
//           </button>
//           <p className="text-gray-800 mb-4 mt-7 text-2xl text-center ml-1 mr-16 ">
//           Introducing our exclusive collaboration with designer XYZ—
//           luxury meets innovation in a timeless design.
//             </p>
//         </div>
//         <div className="relative h-[500px] w-full bg-gray-100 mb-4">
//           <img
//             src={img1}
//             alt="Model in beige outfit"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="text-center">
//           <p className="text-gray-800 mb-4 mt-7 text-2xl text-center ml-1 mr-16">
//           Our  Sustainable Luxury that are  time-tested and 
//           gives  aesthetic vibes
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="mb-24">
//         <div className="relative h-[500px] w-full bg-gray-100 mb-4">
//           <img
//             src={img2}
//             alt="Model in winter coat"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="text-center">
//           <p className="text-gray-800 mb-4 mt-7 text-2xl text-center ml-1 mr-16">
//           Beat the Season with our new collection of breath-taking clothes for winter and stay ahead of your peers!
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded">
//            Limited Edition
//           </button>
//         </div>
//       </section>

//       {/* Third Section */}
//       <section className="mb-24">
//         <div className="relative h-[500px] w-full bg-gray-100 mb-4">
//           <img
//             src={img3}
//             alt="Grey boots"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="text-center">
//           <p className="text-gray-800 mb-4 mt-7 text-2xl text-center ml-1 mr-16">
//           Own the rare – crafted for style, designed for the bold. Limited Edition Shoes, while they last
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 text-center">
//         <h2 className="text-2xl font-light mb-6">The Elegance of Thoughtful Choices</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Discover quality and timeless collection, ethically crafted with the finest materials. Our 
//           thoughtfully designed pieces embody both style and sustainability, ensuring each garment 
//           tells a story of conscious luxury.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Collection;


import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Leaf, Users, Clock} from 'lucide-react';

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('seasonal');
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({
    seasonal: {
      title: "Seasonal Collections",
      description: "Introducing our latest seasonal pieces—where timeless elegance meets contemporary design",
      items: [
        { 
          id: 1,
          name: "Winter Essentials", 
          price: "$299", 
          isNew: true,
          image: '/api/placeholder/600/600'
        },
        { 
          id: 2,
          name: "Spring Collection", 
          price: "$199", 
          isNew: false,
          image: '/api/placeholder/600/601'
        },
        { 
          id: 3,
          name: "Summer Breeze", 
          price: "$249", 
          isNew: true,
          image: '/api/placeholder/600/602'
        }
      ]
    },
    limited: {
      title: "Limited Edition Drops",
      description: "Exclusive pieces available for a limited time only. Don't miss out on these unique designs",
      items: [
        { 
          id: 4,
          name: "Designer Edition", 
          price: "$499", 
          isNew: true,
          image: '/api/placeholder/600/603'
        },
        { 
          id: 5,
          name: "Artisan Series", 
          price: "$399", 
          isNew: true,
          image: '/api/placeholder/600/604'
        },
        { 
          id: 6,
          name: "Heritage Collection", 
          price: "$599", 
          isNew: false,
          image: '/api/placeholder/600/605'
        }
      ]
    },
    designer: {
      title: "Designer Collaborations",
      description: "Unique partnerships with world-renowned designers, creating extraordinary pieces",
      items: [
        { 
          id: 7,
          name: "XYZ Capsule", 
          price: "$899", 
          isNew: true,
          image: '/api/placeholder/600/606'
        },
        { 
          id: 8,
          name: "ABC Limited", 
          price: "$799", 
          isNew: false,
          image: '/api/placeholder/600/607'
        },
        { 
          id: 9,
          name: "DEF Series", 
          price: "$699", 
          isNew: true,
          image: '/api/placeholder/600/608'
        }
      ]
    },
    sustainable: {
      title: "Sustainable Luxury",
      description: "Ethically crafted pieces that combine luxury with environmental consciousness",
      items: [
        { 
          id: 10,
          name: "Eco Essentials", 
          price: "$349", 
          isNew: true,
          image: '/api/placeholder/600/609'
        },
        { 
          id: 11,
          name: "Green Luxury", 
          price: "$449", 
          isNew: false,
          image: '/api/placeholder/600/610'
        },
        { 
          id: 12,
          name: "Earth Collection", 
          price: "$399", 
          isNew: true,
          image: '/api/placeholder/600/611'
        }
      ]
    }
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categoryIcons = {
    seasonal: <Clock className="w-6 h-6" />,
    limited: <Star className="w-6 h-6" />,
    designer: <Users className="w-6 h-6" />,
    sustainable: <Leaf className="w-6 h-6" />
  };

  const ProductCard = ({ product }) => (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            New Arrival
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Quick View
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <button className="mt-3 flex items-center text-blue-600 hover:text-blue-700">
          Shop Now <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900 overflow-hidden">
        <img
          src={img1}
          alt="Collection Hero"
          className="w-full h-full object-cover opacity-70 transform scale-105 animate-slowZoom"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-light mb-6 animate-fadeSlideDown">
            Collections
          </h1>
          <p className="text-xl max-w-2xl text-center px-4 animate-fadeSlideUp">
            Discover our curated collections that blend timeless elegance with contemporary design
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide">
            {Object.entries(products).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {categoryIcons[key]}
                <span>{value.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-4">
                {products[activeCategory].title}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {products[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products[activeCategory].items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

      

      <style jsx global>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes fadeSlideDown {
          0% { 
            opacity: 0;
            transform: translateY(-20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeSlideUp {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slowZoom {
          animation: slowZoom 20s ease-out forwards;
        }
        
        .animate-fadeSlideDown {
          animation: fadeSlideDown 1s ease-out forwards;
        }
        
        .animate-fadeSlideUp {
          animation: fadeSlideUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Collection;