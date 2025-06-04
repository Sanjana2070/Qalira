// src/pages/Signup.jsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 500, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Create Your Qalira Account
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Already have an account?{' '}
          <Link href="/login" underline="hover">
            Login here
          </Link>
        </Typography>
        <SignupForm />
      </Box>
    </Container>
  );
};

export default Signup;
