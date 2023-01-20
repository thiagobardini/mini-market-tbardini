import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/products/Products";
import Cart from "./Pages/Cart";
import Navbar from "./Layout/Navbar";
import ProductDetails from "./Pages/productDetails/ProductDetails";
import ProductDetailInfo from "./Pages/productDetails/ProductDetailInfo";
import ProductDetailNutrition from "./Pages/productDetails/ProductDetailNutrition";
import ProductDetailStorage from "./Pages/productDetails/ProductDetailStorage";
import StripeSuccess from "./Pages/StripeSuccess";
import StripeFailed from "./Pages/StripeFailed";

function App() {
  const [cart, setCart] = useState(
    // LocalStorage - get //
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  // LocalStorage - set //
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adding product //
  const handleProductAdd = (newProduct) => {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  // Deleting Product //
  const handleProductDelete = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar cart={cart} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/success"
            element={<StripeSuccess setCart={setCart} />}
          />
          <Route path="/failed" element={<StripeFailed setCart={setCart} />} />
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails onProductAdd={handleProductAdd} />}
          >
            <Route
              path=""
              element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
            ></Route>
            <Route
              path="nutrition"
              element={<ProductDetailNutrition />}
            ></Route>
            <Route path="storage" element={<ProductDetailStorage />}></Route>
          </Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
