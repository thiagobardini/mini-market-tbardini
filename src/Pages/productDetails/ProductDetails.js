import React, { useState, useEffect } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Loader from "../../Components/Loader";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { get, loading } = useFetch("https://react-projetcs.firebaseio.com/");
  const params = useParams();

  useEffect(() => {
    get(`projectinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const activeLink = ({ isActive }) => (isActive ? "tab-active" : undefined);

  return (
    <>
      <div className="product-details-layout">
        <div>
          <h2>{product.name}</h2>
          <img
            width="125"
            height="125"
            className="product-details-image"
            alt={product.name}
            src={product.image}
          />
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li>
                <NavLink className={activeLink} to="" end>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="nutrition">
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="storage">
                  Storage
                </NavLink>
              </li>
            </ul>
          </div>
          {loading ? <Loader /> : <Outlet context={product} />}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
