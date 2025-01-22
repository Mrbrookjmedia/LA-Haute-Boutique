import React, { Suspense, lazy, useEffect, useState } from "react";

import './styles/App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

import { ToastContainer } from "react-toastify";

// Lazy loading all route components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./pages/About.jsx"));
const AiTools = lazy(() => import("./pages/AiTools.jsx"));
const Collections = lazy(() => import("./pages/Collections.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));




function AppContent(){
  const location = useLocation();
  //We can hide navbar in the pages we don't want it using this way ->
  const [showNavbar, setShowNavbar] = useState(true);
  // Hide the Navbar on /dashboard route
  useEffect(() => {
    setShowNavbar(location.pathname !== "/dashboard");
  }, [location.pathname]);


  return(
    <>
     {showNavbar && <Navbar />}
    <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aitools" element={<AiTools />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/support" element={<Support />} />
            </Routes>
            <Footer />
            </main>
    </>
  )

}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

 

export default App
