// src/components/class/ClassCardGrid.jsx
import React from 'react';
import { Grid } from '@mui/material';
import ClassCard from './ClassCard';

const dummyClasses = [
  { id: 1, title: 'Beginner Ballet', instructor: 'Asha Rao', price: 500 },
  { id: 2, title: 'Guitar Jam', instructor: 'Rahul Verma', price: 750 },
  { id: 3, title: 'Salsa Night', instructor: 'Rina Patel', price: 600 },
];

const ClassCardGrid = ({ classes = dummyClasses }) => {
  return (
    <Grid container spacing={3}>
      {classes.map((classItem) => (
        <Grid item xs={12} sm={6} md={4} key={classItem.id}>
          <ClassCard classItem={classItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClassCardGrid;
