import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductDetailStorage = () => {
  const product = useOutletContext();
  return (
    <>
      <p>
        <strong>Storage instructions:</strong> {product.storage}
      </p>
    </>
  );
};

export default ProductDetailStorage;
