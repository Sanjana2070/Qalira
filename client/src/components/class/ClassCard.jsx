// src/components/class/ClassCard.jsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
  const { id, title, instructor, price } = classItem;
  const navigate = useNavigate();

  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Instructor: {instructor}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          ₹{price}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/class/${id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ClassCard;
