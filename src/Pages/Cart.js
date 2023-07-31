import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { Link } from "react-router-dom";

const stripeLoadedPromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const Cart = ({ cart, setCart }) => {
  const [email, setEmail] = useState("");

  const totalValue = cart.reduce((accumulator, currPrice) => {
    return currPrice.price * currPrice.quantity + accumulator;
  }, 0);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "https://mini-market-tbardini.vercel.app/success",
          cancelUrl: "https://mini-market-tbardini.vercel.app/failed",
          customerEmail: email,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  };

  return (
    <>
      <div className="cart-layout">
        <div>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>You have not added any product to your cart yet.</p>
          ) : (
            <>
              <table className="table table-cart">
                <thead>
                  <tr>
                    <th width="25%" className="th-product">
                      Product
                    </th>
                    <th width="20%">Unit price</th>
                    <th width="10%">Quanity</th>
                    <th width="25%">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <img
                            src={product.image}
                            width="30"
                            height="30"
                            alt=""
                          />
                          <Link to="/products" className="item-link">
                            {product.name}
                          </Link>
                        </td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <strong>
                            $
                            {parseFloat(
                              product.quantity * product.price
                            ).toFixed(2)}
                          </strong>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="2"></th>
                    <th className="cart-highlight">Total</th>
                    <th className="cart-highlight">
                      ${parseFloat(totalValue).toFixed(2)}
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div>
                <form className="pay-form" onSubmit={handleFormSubmit}>
                  <p>
                    Enter your email and then click on pay and your products
                    will be delivered to you on the same day!
                  </p>
                  <Input
                    autocomplete="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="btn btn-accent">
                    Pay
                  </Button>
                </form>
                <div className="cart-credit-card">
                  <p>
                    To process a purchase, please use the following instruction
                    below:
                  </p>
                  <ul>
                    <li>Card number: 4242 4242 4242 4242 (test card)</li>
                    <li>Expiration date: Any date greater than today </li>
                    <li>CVC: 3 digits (any number)</li>
                  </ul>
                  <p>
                    <em>
                      Please note that the expiration date, CVC, and cardholder
                      name can be entered as any value as it is a test card.
                      Keep in mind that this is a test credit card and no real
                      transactions will be processed or charged. This card
                      number should only be used for testing purposes.
                    </em>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
