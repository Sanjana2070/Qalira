// src/pages/Discovery.jsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import SearchBar from '../components/discovery/SearchBar';
import FilterChips from '../components/discovery/FilterChips';
import ResultGrid from '../components/discovery/ResultGrid';

const Discovery = () => {
  const [filters, setFilters] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Call API to fetch filtered classes (you'll replace this with real API call)
    setResults([
      // demo data
      { id: 1, name: 'Hip-Hop Basics', location: 'Bangalore' },
      { id: 2, name: 'Classical Vocal', location: 'Mumbai' },
    ]);
  }, [filters]);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Explore Dance & Music Classes
      </Typography>

      <SearchBar />
      <FilterChips selected={filters} onChange={setFilters} />

      <Box sx={{ mt: 4 }}>
        <ResultGrid results={results} />
      </Box>
    </Container>
  );
};

export default Discovery;
