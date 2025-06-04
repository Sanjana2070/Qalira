// src/components/user/SavedClasses.jsx
import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const SavedClasses = () => {
  const saved = [
    { id: 101, title: 'Hip-Hop Basics' },
    { id: 102, title: 'Classical Vocal Level 1' },
  ];

  return (
    <List>
      {saved.map((item) => (
        <ListItem
          key={item.id}
          secondaryAction={
            <Button size="small" variant="outlined" href={`/class/${item.id}`}>
              Book Now
            </Button>
          }
        >
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default SavedClasses;
