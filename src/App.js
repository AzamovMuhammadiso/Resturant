import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./page/home";
import Products from "./page/products";
import Category from "./page/categoyes";
import Info from "./page/info";
import Cart from "./page/cart";
import Chek from "./page/chek";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineHome } from "react-icons/ai";
import { GiTable } from "react-icons/gi";

function App() {
  return (
    <div className="App bg-dark d-flex row align-items-end justify-content-center">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Category />} />
          <Route path="/info" element={<Info />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chek" element={<Chek />} />
        </Routes>
      </div>
      <div className="nav-container border-top d-flex align-items-center mt- justify-content-evenly">
        <Link className="icon-nav my-3 px-4"  to="/cart">
          <TiShoppingCart />
        </Link>
        <Link className="icon-nav my-3 px-4"  to="/category"><AiOutlineHome /></Link>
        <Link className="icon-nav my-3 px-4"  to="/"><GiTable /></Link>
      </div>
    </div>
  );
}

export default App;
