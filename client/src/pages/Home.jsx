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

      <Container sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Find Classes Near You
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
