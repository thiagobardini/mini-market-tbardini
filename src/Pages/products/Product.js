import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Product = (props) => {
  const { details, onProductDelete, onProductAdd, cart } = props;

  const existingProduct = cart.find((product) => product.id === details.id);

  const quantity = existingProduct ? existingProduct.quantity : 0;

  return (
    <>
      <div className="product">
        <div className="product-image-container">
          <Link to={`${details.id}`}>
            <img
              width="100"
              height="100"
              className="product-image"
              alt={details.name}
              src={details.image}
            />
          </Link>
          <div className="product-quantity-container">
            {quantity !== 0 && (
              <div className="product-quantity">{quantity}</div>
            )}
          </div>
        </div>
        <div className="product-info">
          <h3>{details.name}</h3>
          <p>{details.description}</p>
        </div>
        <div className="product-checkout">
          <div>
            {quantity !== 0 && (
              <Button
                outline
                class="product-delete"
                onClick={() => onProductDelete(details.id)}
              >
                x
              </Button>
            )}
          </div>
          <Button outline onClick={() => onProductAdd(details)}>
            ${details.price}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Product;
