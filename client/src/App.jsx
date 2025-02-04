import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
// import {CartContextProvider} from "./context/CartContext";
import { ToastContainer } from "react-toastify";

import { CartProvider } from "./context/CartContext";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./pages/About"));
const Shop = lazy(() => import("./pages/Shop"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Support = lazy(() => import("./pages/Support"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Collection = lazy(() => import("./pages/Collections"));
const Blogs = lazy(() => import("./pages/Blogs"));
const AiTools = lazy(() => import("./pages/AiTools"));
const UserPage = lazy(() => import("./pages/UserPage"));
const UserSettings = lazy(() => import("./pages/UserSettings"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminUser = lazy(() => import("./pages/AdminUser"));
const AdminOrder = lazy(() => import("./pages/AdminOrder"));
const CreateNewProduct = lazy(() => import("./pages/CreateNewProduct"));
const AdminEditProdut = lazy(() => import("./pages/AdminEditProdut"));
const AdminHomepage = lazy(() => import("./pages/AdminHomepage"));
const AdminAllProducts = lazy(() => import("./pages/AdminAllProducts"));
//protect routes component
import ProtectRoute from "./components/ProtectRoute";
import ProtectAdminRoute from "./components/ProtectAdminRoute";
// import CreateNewProduct from "./pages/CreateNewProduct";

function App() {
  return (
    <AuthContextProvider>
    <CartProvider>
        <Router> 
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/collections" element={<Collection />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/aitools" element={<AiTools />} />
              <Route element={<ProtectRoute />}></Route>


            {/* <Route element={<ProtectAdminRoute />}> */}
            <Route path="/admin" element={<AdminHomepage />}>
              <Route index element={<AdminDashboard />} />{" "}
              {/* Default admin page */}
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUser />} />
              <Route path="createproducts" element={<CreateNewProduct />} />
              <Route path="allproducts" element={<AdminAllProducts />} />
              <Route path="/admin/products/edit/:id" element={<AdminEditProdut />} />

              <Route path="orders" element={<AdminOrder />} />
            </Route>
            {/* </Route> */}
            <Route element={<ProtectRoute />}>

              <Route path="/user-dash" element={<UserPage />} />
              <Route path="/setting" element={<UserSettings />} />
            </Route>

            </Routes>
          </Suspense>
          <Footer />
          <ToastContainer />
        </Router>
    </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
