// src/components/discovery/FilterChips.jsx
import React from 'react';
import { Box, Chip } from '@mui/material';

const filters = ['Hip-Hop', 'Ballet', 'Piano', 'Contemporary', 'Singing', 'Jazz'];

const FilterChips = ({ selected = [], onChange }) => {
  const handleToggle = (filter) => {
    if (!onChange) return;

    if (selected.includes(filter)) {
      onChange(selected.filter((f) => f !== filter));
    } else {
      onChange([...selected, filter]);
    }
  };

  return (
    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          color={selected.includes(filter) ? 'primary' : 'default'}
          onClick={() => handleToggle(filter)}
          clickable
        />
      ))}
    </Box>
  );
};

export default FilterChips;
