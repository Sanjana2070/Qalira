// src/components/class/ClassDetailsCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Divider, Chip } from '@mui/material';

const ClassDetailsCard = ({ classData }) => {
  if (!classData) return null;

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {classData.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Instructor: {classData.instructor}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
          <Chip label={classData.category || 'Dance'} />
          <Chip label={classData.level || 'Beginner'} />
          <Chip label={classData.location} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" paragraph>
          {classData.description}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>Time:</strong> {classData.time}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Price:</strong> ₹{classData.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClassDetailsCard;
