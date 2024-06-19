import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { Link } from "react-router-dom";
import { Typography, Box, List, ListItem, ListItemText, Divider, Modal } from "@mui/material";
import ButtonMui from "@mui/material/Button";

const stripeLoadedPromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const Cart = ({ cart, setCart }) => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

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
          console.log(response.error);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='cart-layout'>
        <div>
          <Typography variant='h3' gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
            Your Cart
          </Typography>
          {cart.length === 0 ? (
            <p>You have not added any product to your cart yet.</p>
          ) : (
            <>
              <table className='table table-cart'>
                <thead>
                  <tr>
                    <th width='25%' className='th-product'>
                      Product
                    </th>
                    <th width='20%'>Unit price</th>
                    <th width='10%'>Quantity</th>
                    <th width='25%'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} width='30' height='30' alt='' />
                        <Link to='/products' className='item-link'>
                          {product.name}
                        </Link>
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${parseFloat(product.quantity * product.price).toFixed(2)}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan='2'></th>
                    <th className='cart-highlight'>Total</th>
                    <th className='cart-highlight'>${parseFloat(totalValue).toFixed(2)}</th>
                  </tr>
                </tfoot>
              </table>
              <div>
                <form className='pay-form' onSubmit={handleFormSubmit}>
                  <Typography variant='body1' paragraph>
                    Enter your email and then click on pay and your products will be delivered to you on the same day!
                  </Typography>
                  <Input autocomplete='email' placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <Box sx={{ display: "flex", flexDirection: {xs:"column", md: "row"}, gap: 2 }}>
                    <Button type='submit' className='btn btn-accent'>
                      Pay
                    </Button>
                    <ButtonMui
                      variant='outlined'
                      color='primary'
                      onClick={handleOpen}
                      sx={{
                        textTransform: "none",
                        borderColor: "var(--primary-1)",
                        color: "var(--primary-1)",
                      }}
                    >
                      <Typography variant='body2'>View Payment Instructions</Typography>
                    </ButtonMui>
                  </Box>
                </form>
                <div className='cart-credit-card' style={{ marginTop: "16px" }}>
                  <Modal open={open} onClose={handleClose} aria-labelledby='payment-instructions-title' aria-describedby='payment-instructions-description'>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "80vw", md: 400 },
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        color: "black",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <Typography
                        // id="payment-instructions-title"
                        variant='h6'
                        component='h2'
                        gutterBottom
                      >
                        Payment Instructions
                      </Typography>
                      <Typography id='payment-instructions-description' variant='body2' paragraph>
                        To process a purchase, please use the following instructions:
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemText primary='Card number: 4242 4242 4242 4242 (test card)' />
                        </ListItem>
                        <Divider />
                        <ListItem>
                          <ListItemText primary='Expiration date: Any date greater than today' />
                        </ListItem>
                        <Divider />
                        <ListItem>
                          <ListItemText primary='CVC: 3 digits (any number)' />
                        </ListItem>
                      </List>
                      <Typography variant='body2' paragraph sx={{ marginTop: 2 }}>
                        <em>
                          Please note that the expiration date, CVC, and cardholder name can be entered as any value as it is a test card. Keep in mind that this is a test credit card and no real
                          transactions will be processed or charged. This card number should only be used for testing purposes.
                        </em>
                      </Typography>
                    </Box>
                  </Modal>
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
