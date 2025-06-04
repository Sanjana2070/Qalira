// components/layout/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          Qalira
        </Typography>

        <Box display="flex" gap={2}>
          <Button color="inherit" onClick={() => navigate('/discover')}>Explore Classes</Button>
          <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          <Button variant="outlined" onClick={() => navigate('/login')}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
