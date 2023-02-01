import { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import Product from "./Product";
import Loader from "../../Components/Loader";

export default function Products(props) {
  const { cart, onProductAdd, onProductDelete } = props;
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch("https://react-projetcs.firebaseio.com/");

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="products-layout">
      <div className="display-margin">
        <h1>Products</h1>
        <p>Take a look at our products</p>
      </div>
      {loading && (
        <div className="box-loader">
          <div>
            <Loader />
          </div>
        </div>
      )}
      <div className="products-grid">
        {/* <!-- render the products --> */}
        {products.map((product) => {
          return (
            <Product
              details={product}
              cart={cart}
              onProductAdd={onProductAdd}
              onProductDelete={onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
