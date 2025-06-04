// src/components/user/DashboardWidgets.jsx
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const DashboardWidgets = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6">3</Typography>
          <Typography variant="body2">Upcoming Classes</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6">12</Typography>
          <Typography variant="body2">Classes Attended</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6">4</Typography>
          <Typography variant="body2">Saved Classes</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6">₹1800</Typography>
          <Typography variant="body2">Spent This Month</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardWidgets;
