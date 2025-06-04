// src/pages/Login.jsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 500, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Don’t have an account?{' '}
          <Link href="/signup" underline="hover">
            Sign up here
          </Link>
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;
