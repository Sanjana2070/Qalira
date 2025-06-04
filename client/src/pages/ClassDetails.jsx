// src/pages/ClassDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Divider } from '@mui/material';
import BookingForm from '../components/booking/BookingForm';

const ClassDetails = () => {
  const { id } = useParams(); // assuming /class/:id route
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    // Replace with actual API call
    setClassData({
      id,
      title: 'Contemporary Fusion',
      instructor: 'Ritika Sharma',
      description: 'A blend of modern, lyrical and jazz styles.',
      location: 'Mumbai',
      price: 600,
      time: 'Sat, 5 PM - 6 PM',
    });
  }, [id]);

  if (!classData) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {classData.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Instructor: {classData.instructor}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Time: {classData.time} | Location: {classData.location}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" paragraph>
        {classData.description}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Price: ₹{classData.price}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <BookingForm classId={classData.id} price={classData.price} />
      </Box>
    </Container>
  );
};

export default ClassDetails;
