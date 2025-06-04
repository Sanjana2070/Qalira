// src/components/discovery/ResultGrid.jsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import ClassCard from '../class/ClassCard';

const ResultGrid = ({ results = [] }) => {
  if (results.length === 0) {
    return <Typography>No classes found. Try adjusting your filters.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {results.map((classItem) => (
        <Grid item xs={12} sm={6} md={4} key={classItem.id}>
          <ClassCard classItem={classItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultGrid;
