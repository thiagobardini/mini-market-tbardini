import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Container } from '@mui/material'

const Home = () => {
  return (
    <Container
      className="home-layout"
      maxWidth="lg"
      sx={{ textAlign: 'center', padding: '2rem' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mb: 4,
        }}
      >
        <img
          src="https://i.imgur.com/j974h5I.png"
          width="350"
          height="auto"
          className="rounded home-image"
          alt="Convenient Grocery Shopping"
        />
      </Box>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        Simulate Your Shopping
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'var(--neutral-1)' }}>
        Experience the convenience of online grocery shopping with Mini Market's
        App. This project simulates an e-commerce platform with seamless online
        payments using Stripe. Order your items and have them delivered right to
        your doorstep.
      </Typography>
      <Link
        to="/products"
        className="btn btn-accent"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        Start Shopping
      </Link>
    </Container>
  )
}

export default Home
