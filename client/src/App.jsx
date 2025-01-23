import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

// Lazy loading all route components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./pages/About.jsx"));
const AiTools = lazy(() => import("./pages/AiTools.jsx"));
const Collections = lazy(() => import("./pages/Collections.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aitools" element={<AiTools />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Suspense>
        <Footer />
        <ToastContainer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;