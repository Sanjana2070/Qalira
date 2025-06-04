// src/components/booking/BookingHistory.jsx
import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const BookingHistory = () => {
  const bookings = [
    { id: 1, title: 'Contemporary Fusion', date: 'May 25, 2025' },
    { id: 2, title: 'Beginner Guitar', date: 'May 20, 2025' },
  ];

  return (
    <List>
      {bookings.map((booking) => (
        <React.Fragment key={booking.id}>
          <ListItem>
            <ListItemText
              primary={booking.title}
              secondary={`Date: ${booking.date}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default BookingHistory;
