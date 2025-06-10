// components/layout/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer' }}
        >
          Qalira
        </Typography>

        <Box display="flex" gap={{ xs: 1, sm: 2 }}>
          <Button color="inherit" onClick={() => navigate('/discover')}>Classes</Button>
          <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
