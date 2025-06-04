// components/layout/Footer.jsx
import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ mt: 8, py: 4, backgroundColor: '#f9f9f9' }}>
      <Stack alignItems="center" spacing={1}>
        <Typography variant="body2">DanJan Creative © {new Date().getFullYear()} Qalira</Typography>
        <Stack direction="row" spacing={2}>
          <Link href="/about" underline="hover">About</Link>
          <Link href="/contact" underline="hover">Contact</Link>
          <Link href="/privacy" underline="hover">Privacy Policy</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
