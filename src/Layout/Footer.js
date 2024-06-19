import React from 'react'
import { Box, Typography, Link, Grid } from '@mui/material'
import tbLogo from '../Assets/TBardini-dot-light.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        marginTop: '30px',
        backgroundColor: 'var(--neutral-1)',
        padding: '20px 0',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={0.5}>
        <Grid item>
          <Link
            href="https://www.tbardini.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tbLogo} alt="TBardini navigation logo" width={100} />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://www.tbardini.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Typography
              variant="body2"
              sx={{ color: '#fbf8f9', fontWeight: 200, margin: 0 }}
            >
              © {year}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
