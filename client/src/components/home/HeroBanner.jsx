// src/components/home/HeroBanner.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 10,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Discover Dance & Music Classes Near You
        </Typography>
        <Typography variant="h6" gutterBottom>
          Book high-quality classes and workshops from top studios and instructors.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }} onClick={() => navigate('/discover')}>
          Start Exploring
        </Button>
      </Container>
    </Box>
  );
};

export default HeroBanner;
