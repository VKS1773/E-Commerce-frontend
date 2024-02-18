import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import men_banner from "./components/Assests/banner_mens.png";
import women_banner from "./components/Assests/banner_women.png";
import kid_banner from "./components/Assests/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shoap" element={<Shop />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/Men"
            element={<ShopCategory banner={men_banner} category="Men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/Kid"
            element={<ShopCategory banner={kid_banner} category="Kid" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
