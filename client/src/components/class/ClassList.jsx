// src/components/class/ClassList.jsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import ClassCard from './ClassCard';

const ClassList = ({ classes = [] }) => {
  if (!classes.length) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        No classes available at the moment.
      </Typography>
    );
  }

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

export default ClassList;
