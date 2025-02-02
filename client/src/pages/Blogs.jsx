// import React, { useState } from 'react';
// import { Search, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';

// // Blog data
// const blogData = {
//   posts: [
//     {
//       id: 1,
//       title: "The Evolution of Street Style",
//       category: "Fashion Trends",
//       image: "/api/placeholder/600/400",
//       date: "Jan 30, 2025",
//       author: "Emma Stone",
//       excerpt: "Discover how street fashion has transformed over the decades and its influence on modern trends.",
//       content: "Full article content here...",
//       featured: true,
//       hero: true
//     },
//     {
//       id: 2,
//       title: "The Return of Y2K Fashion",
//       category: "Fashion Trends",
//       image: "/api/placeholder/600/400",
//       date: "Jan 28, 2025",
//       author: "Sophie Chen",
//       excerpt: "How the 2000s are making a spectacular comeback in today's fashion scene",
//       content: "Full article content here...",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Capsule Wardrobe 101",
//       category: "Styling Tips",
//       image: "/api/placeholder/600/400",
//       date: "Jan 25, 2025",
//       author: "Marcus Rivera",
//       excerpt: "Master the art of minimalist fashion with these essential pieces",
//       content: "Full article content here...",
//       featured: true
//     },
//     {
//       id: 4,
//       title: "Milan Fashion Week Diary",
//       category: "Behind the Scenes",
//       image: "/api/placeholder/600/400",
//       date: "Jan 22, 2025",
//       author: "James Wilson",
//       excerpt: "An insider's look at the most talked-about shows",
//       content: "Full article content here...",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "Sustainable Fabrics Revolution",
//       category: "Fashion Trends",
//       image: "/api/placeholder/400/300",
//       date: "Jan 20, 2025",
//       author: "Emma Stone",
//       excerpt: "The future of eco-friendly fashion materials",
//       content: "Full article content here...",
//       featured: false
//     }
//   ],
//   categories: [
//     { name: "Fashion Trends", description: "Latest styles and seasonal must-haves", posts: 24 },
//     { name: "Styling Tips", description: "Expert advice for your wardrobe", posts: 18 },
//     { name: "Behind the Scenes", description: "Exclusive fashion week coverage", posts: 15 },
//     { name: "Designer Interviews", description: "Conversations with top creators", posts: 12 }
//   ]
// };

// // Header Component
// const Header = ({ onMenuClick }) => {
//   return (
//     <nav className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-serif font-bold">VOGUE</h1>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {blogData.categories.map(category => (
//               <a
//                 key={category.name}
//                 href="#"
//                 className="text-gray-700 hover:text-black transition-colors duration-200"
//               >
//                 {category.name}
//               </a>
//             ))}
//           </div>

//           <div className="flex items-center space-x-4">
//             <button className="p-2 hover:bg-gray-100 rounded-full">
//               <Search className="w-5 h-5" />
//             </button>
//             <button
//               className="md:hidden p-2 hover:bg-gray-100 rounded-full"
//               onClick={onMenuClick}
//             >
//               <Menu className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Footer Component
// // const Footer = () => {
// //   return (
// //     <footer className="bg-white border-t">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         <div className="flex flex-col md:flex-row justify-between items-center">
// //           <div className="mb-8 md:mb-0">
// //             <h1 className="text-2xl font-serif font-bold mb-4">VOGUE</h1>
// //             <p className="text-gray-600">Your premier source for fashion insights</p>
// //           </div>
// //           <div className="flex space-x-6">
// //             <Instagram className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
// //             <Twitter className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
// //             <Facebook className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // Blog Post Component
// // const BlogPost = ({ post, onClick }) => {
// //   return (
// //     <article 
// //       onClick={() => onClick(post)}
// //       className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
// //     >
// //       <div className="relative">
// //         <img
// //           src={post.image}
// //           alt={post.title}
// //           className="w-full h-64 object-cover"
// //         />
// //         <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
// //           {post.category}
// //         </span>
// //       </div>
// //       <div className="p-6">
// //         <time className="text-sm text-gray-500">{post.date}</time>
// //         <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
// //         <p className="text-gray-600 mb-4">{post.excerpt}</p>
// //         <div className="flex items-center text-sm text-gray-600">
// //           <span>{post.author}</span>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // };




// // Updated BlogPost Component
// const BlogPost = ({ post, onClick, view = 'grid' }) => {
//     if (view === 'grid') {
//       return (
//         <article 
//           onClick={() => onClick(post)}
//           className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
//         >
//           <div className="relative">
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-64 object-cover"
//             />
//             <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
//               {post.category}
//             </span>
//           </div>
//           <div className="p-6">
//             <time className="text-sm text-gray-500">{post.date}</time>
//             <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
//             <p className="text-gray-600 mb-4">{post.excerpt}</p>
//             <div className="flex items-center text-sm text-gray-600">
//               <span>{post.author}</span>
//             </div>
//           </div>
//         </article>
//       );
//     }
  
//     return (
//       <article 
//         onClick={() => onClick(post)}
//         className="flex gap-6 items-center bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
//       >
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-32 h-32 object-cover rounded"
//         />
//         <div className="flex-1">
//           <span className="text-sm text-gray-500">{post.category}</span>
//           <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
//           <div className="flex items-center text-sm text-gray-600">
//             <span>{post.author}</span>
//             <span className="mx-2">·</span>
//             <time>{post.date}</time>
//           </div>
//         </div>
//       </article>
//     );
//   };




// // Post Modal Component
// // const PostModal = ({ post, onClose }) => {
// //   if (!post) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //       <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
// //         <div className="flex justify-between items-start mb-6">
// //           <div>
// //             <span className="text-sm text-gray-500">{post.category}</span>
// //             <h2 className="text-3xl font-serif mt-2">{post.title}</h2>
// //             <div className="flex items-center mt-2 text-sm text-gray-600">
// //               <span>{post.author}</span>
// //               <span className="mx-2">·</span>
// //               <time>{post.date}</time>
// //             </div>
// //           </div>
// //           <button 
// //             onClick={onClose}
// //             className="text-gray-500 hover:text-black"
// //           >
// //             ✕
// //           </button>
// //         </div>
// //         <img
// //           src={post.image}
// //           alt={post.title}
// //           className="w-full h-64 object-cover rounded-lg mb-6"
// //         />
// //         <p className="text-gray-600 leading-relaxed">{post.content}</p>
// //       </div>
// //     </div>
// //   );
// // };




// // Updated PostModal Component
// const PostModal = ({ post, onClose }) => {
//     if (!post) return null;
  
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
//         <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <span className="text-sm text-gray-500">{post.category}</span>
//               <h2 className="text-3xl font-serif mt-2">{post.title}</h2>
//               <div className="flex items-center mt-2 text-sm text-gray-600">
//                 <span>{post.author}</span>
//                 <span className="mx-2">·</span>
//                 <time>{post.date}</time>
//               </div>
//             </div>
//             <button 
//               onClick={onClose}
//               className="text-gray-500 hover:text-black text-xl font-semibold"
//             >
//               ✕
//             </button>
//           </div>
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-64 object-cover rounded-lg mb-6"
//           />
//           <p className="text-gray-600 leading-relaxed">{post.content}</p>
//         </div>
//       </div>
//     );
//   };





// // Main Blog Component
// const FashionBlog = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [view, setView] = useState('grid');

//   const heroPost = blogData.posts.find(post => post.hero);
//   const featuredPosts = blogData.posts.filter(post => post.featured && !post.hero);
//   const latestPosts = blogData.posts.filter(post => !post.featured && !post.hero);

//   const filteredPosts = selectedCategory === "All"
//     ? blogData.posts
//     : blogData.posts.filter(post => post.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-white">
//       <Header onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-b">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {blogData.categories.map(category => (
//               <a
//                 key={category.name}
//                 href="#"
//                 className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//               >
//                 {category.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <section className="relative mb-16">
//         <div className="h-[70vh] relative">
//           <img
//             src={heroPost.image}
//             alt={heroPost.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30">
//             <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-center text-center">
//               <div className="text-white">
//                 <span className="text-sm font-medium bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
//                   Featured Article
//                 </span>
//                 <h1 className="text-5xl font-serif mt-6 mb-4">{heroPost.title}</h1>
//                 <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
//                   {heroPost.excerpt}
//                 </p>
//                 <button 
//                   onClick={() => setSelectedPost(heroPost)}
//                   className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition-colors"
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Category Filters */}
//       <section className="max-w-5xl mx-auto px-4 py-8">
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <button
//             onClick={() => setSelectedCategory("All")}
//             className={`px-4 py-2 rounded-full transition-colors ${
//               selectedCategory === "All"
//                 ? 'bg-black text-white'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             All
//           </button>
//           {blogData.categories.map(category => (
//             <button
//               key={category.name}
//               onClick={() => setSelectedCategory(category.name)}
//               className={`px-4 py-2 rounded-full transition-colors ${
//                 selectedCategory === category.name
//                   ? 'bg-black text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//         <div className="flex justify-end mb-6">
//           <button
//             onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
//             className="text-gray-600 hover:text-black transition-colors"
//           >
//             {view === 'grid' ? 'List View' : 'Grid View'} →
//           </button>
//         </div>
//       </section>

//       {/* Posts Grid */}
//       {/* <section className="max-w-5xl mx-auto px-4 mb-16">
//         <div className={
//           view === 'grid'
//             ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             : "space-y-8"
//         }>
//           {filteredPosts.map(post => (
//             <BlogPost
//               key={post.id}
//               post={post}
//               onClick={setSelectedPost}
//             />
//           ))}
//         </div>
//       </section> */}


//  {/* Posts Grid/List */}
//  <section className="max-w-5xl mx-auto px-4 mb-16">
//         <div className={
//           view === 'grid'
//             ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             : "space-y-8"
//         }>
//           {filteredPosts.map(post => (
//             <BlogPost
//               key={post.id}
//               post={post}
//               onClick={setSelectedPost}
//               view={view}
//             />
//           ))}
//         </div>
//       </section>


//       {/* Post Modal */}
//       <PostModal
//         post={selectedPost}
//         onClose={() => setSelectedPost(null)}
//       />

       
//     </div>
//   );
// };

// export default FashionBlog;











import React from 'react';
import img1 from "../assets/images/collection2.png"
import img2 from "../assets/images/collection3.png"

const FashionBlog = () => {
  const categories = [
    { name: "Fashion Trends", description: "Latest styles and seasonal must-haves", posts: 24 },
    { name: "Styling Tips", description: "Expert advice for your wardrobe", posts: 18 },
    { name: "Behind the Scenes", description: "Exclusive fashion week coverage", posts: 15 },
    { name: "Designer Interviews", description: "Conversations with top creators", posts: 12 }
  ];

  const featuredPosts = [
    {
      title: "The Return of Y2K Fashion",
      category: "Fashion Trends",
      image: "/api/placeholder/600/400",
      date: "Jan 28, 2025",
      excerpt: "How the 2000s are making a spectacular comeback in today's fashion scene"
    },
    {
      title: "Capsule Wardrobe 101",
      category: "Styling Tips",
      image: "/api/placeholder/600/400",
      date: "Jan 25, 2025",
      excerpt: "Master the art of minimalist fashion with these essential pieces"
    },
    {
      title: "Milan Fashion Week Diary",
      category: "Behind the Scenes",
      image: "/api/placeholder/600/400",
      date: "Jan 22, 2025",
      excerpt: "An insider's look at the most talked-about shows"
    }
  ];

  const latestPosts = [
    {
      title: "Sustainable Fabrics Revolution",
      category: "Fashion Trends",
      image: "/api/placeholder/400/300",
      author: "Emma Stone",
      date: "Jan 30, 2025"
    },
    {
      title: "Interview with Stella McCartney",
      category: "Designer Interviews",
      image: "/api/placeholder/400/300",
      author: "James Wilson",
      date: "Jan 29, 2025"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="h-[70vh] relative">
          <img
            src={img1}
            alt="Latest Fashion Trends"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30">
            <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-center text-center">
              <div className="text-white">
                <span className="text-sm font-medium bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  Featured Article
                </span>
                <h1 className="text-5xl font-serif mt-6 mb-4">
                  The Evolution of Street Style
                </h1>
                <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
                  Discover how street fashion has transformed over the decades and its influence on modern trends.
                </p>
                <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl font-serif mb-12">Explore Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div 
              key={category.name}
              className="group cursor-pointer bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <span className="text-sm text-gray-500 mt-2">{category.posts} posts</span>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="text-black font-medium group-hover:underline inline-block">
                Explore →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-12">Editor's Picks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <article 
                key={post.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-black font-medium hover:underline">
                    Continue Reading →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-center">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Latest Articles</h2>
          <button className="text-gray-600 hover:text-black transition-colors">
            View All Posts →
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {latestPosts.map(post => (
            <article 
              key={post.title}
              className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="text-center md:text-left">
                <span className="text-sm text-gray-500">{post.category}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{post.title}</h3>
                <div className="flex items-center justify-center md:justify-start text-sm text-gray-600">
                  <span>{post.author}</span>
                  <span className="mx-2">·</span>
                  <time>{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FashionBlog;