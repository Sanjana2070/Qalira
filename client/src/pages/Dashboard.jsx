// src/pages/Dashboard.jsx
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import DashboardWidgets from '../components/user/DashboardWidgets';
import BookingHistory from '../components/booking/BookingHistory';
import SavedClasses from '../components/user/SavedClasses';

const Dashboard = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Your Dashboard
      </Typography>

      <DashboardWidgets />

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your Bookings
            </Typography>
            <BookingHistory />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Saved Classes
            </Typography>
            <SavedClasses />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
