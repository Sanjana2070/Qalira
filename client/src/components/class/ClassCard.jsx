// src/components/class/ClassCard.jsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
  const { id, title, instructor, price, image } = classItem;
  const navigate = useNavigate();

  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={image || 'https://source.unsplash.com/random/400x300?music'}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Instructor: {instructor}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }} color="primary">
          ₹{price}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto', p: 2, pt: 0 }}>
        <Button
          fullWidth
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
