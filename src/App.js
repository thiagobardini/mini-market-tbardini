import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/products/Products";
import Cart from "./Pages/Cart";
import Navbar from "./Layout/Navbar";
import BackgroundImage from "./Layout/BackgroundImage";

function App() {
  return (
    <>
      {/* <BackgroundImage
        opacity={0.3}
        image={"https://i.imgur.com/SdOA4Ke.jpg"}
      /> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
