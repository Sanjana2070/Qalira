// components/layout/Footer.jsx
import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ mt: 8, py: 6, backgroundColor: 'grey.900', color: 'grey.100' }}
    >
      <Stack alignItems="center" spacing={2}>
        <Stack direction="row" spacing={4}>
          <Link href="/about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Stack>
        <Typography variant="body2" color="grey.500">
          © {new Date().getFullYear()} Qalira. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
