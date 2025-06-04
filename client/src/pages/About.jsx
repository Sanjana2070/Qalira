// src/pages/About.jsx
import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        About Qalira
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="body1" paragraph>
        Qalira is a platform that helps people discover and book dance and music classes from top studios and instructors across metro cities.
      </Typography>

      <Typography variant="body1" paragraph>
        Our mission is to make performing arts education more accessible, organized, and inspiring for everyone—from beginners to professionals.
      </Typography>

      <Typography variant="body1" paragraph>
        We are building a community where learning, expression, and connection can flourish through curated classes, seamless bookings, and supportive networks.
      </Typography>
    </Container>
  );
};

export default About;
