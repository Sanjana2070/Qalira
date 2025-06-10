// src/pages/Home.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import HeroBanner from '../components/home/HeroBanner';
import SearchBar from '../components/discovery/SearchBar';
import ClassCardGrid from '../components/class/ClassCardGrid';

const dummyClasses = [
  {
    id: 1,
    title: 'Hip-Hop Basics',
    instructor: 'Asha Rao',
    price: 500,
  },
  {
    id: 2,
    title: 'Beginner Guitar',
    instructor: 'Rahul Verma',
    price: 600,
  },
  {
    id: 3,
    title: 'Ballet for Beginners',
    instructor: 'Meera Iyer',
    price: 750,
  },
];

const Home = () => {
  return (
    <Box>
      <HeroBanner />

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Find Classes Near You
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Browse popular dance and music sessions from verified studios.
        </Typography>

        <SearchBar />

        <Box sx={{ mt: 4 }}>
          {/* ✅ Pass class data into the grid */}
          <ClassCardGrid classes={dummyClasses} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
