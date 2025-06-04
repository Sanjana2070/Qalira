// components/layout/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const items = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Bookings', path: '/dashboard/bookings' },
    { label: 'Saved Classes', path: '/dashboard/saved' },
    { label: 'Profile Settings', path: '/dashboard/settings' },
  ];

  return (
    <Drawer open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        {items.map((item) => (
          <ListItem button key={item.label} onClick={() => navigate(item.path)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
