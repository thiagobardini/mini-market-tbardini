import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../Components/Button";

const ProductDetailInfo = ({ onProductAdd }) => {
  const product = useOutletContext();

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
};

export default ProductDetailInfo;
