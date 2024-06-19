import React from 'react'
import { Container, Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Container
      className="about-layout display-margin"
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
          src="https://i.imgur.com/wsvosXs.png"
          height="auto"
          width="350"
          className="rounded about-image"
          alt="About Us"
        />
      </Box>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'var(--neutral-1)' }}>
        Fresh Produce Guaranteed:
        <br />
        Shop on Our App and Have it Delivered to Your Home
        <br />
        <em>Safe and Secure Payment with Stripe.</em>
      </Typography>
    </Container>
  )
}

export default About
