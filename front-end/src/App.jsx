import "./App.css";
import { NavBar } from "./components/navBar.jsx/NavBar";
import { Home } from "./screens/home/Home";
import { Routes, Route } from "react-router-dom";
import { Products } from "./screens/products/Products";
import { CartContent } from "./components/cartContent/CartContent";
import { About } from "./screens/about/About";
import { Footer } from "./components/footer/Footer";
import { Orders } from "./screens/orders/Orders";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
