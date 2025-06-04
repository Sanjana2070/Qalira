// src/components/discovery/SearchBar.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');

  const handleSubmit = () => {
    if (onSearch) onSearch({ location, activity });
  };

  return (
    <Box sx={{ my: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          fullWidth
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          fullWidth
          label="Activity (e.g. Hip-Hop, Piano)"
          variant="outlined"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
