// src/components/booking/BookingForm.jsx
import React from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';

const BookingForm = ({ classId, price }) => {
  const [loading, setLoading] = React.useState(false);

  const handleBooking = async () => {
    setLoading(true);

    try {
      // Replace this with your API call to initiate Razorpay order
      const response = await fetch('/api/payments/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classId, amount: price }),
      });

      const data = await response.json();

      const options = {
        key: data.key, // Razorpay Key
        amount: data.amount,
        currency: 'INR',
        name: 'Qalira',
        description: 'Class Booking Payment',
        order_id: data.orderId,
        handler: async (res) => {
          // Send success to backend
          await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              classId,
              paymentId: res.razorpay_payment_id,
              orderId: res.razorpay_order_id,
              signature: res.razorpay_signature,
            }),
          });
          alert('Booking Successful!');
        },
        prefill: {
          name: '',
          email: '',
        },
        theme: {
          color: '#EF476F',
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error('Booking error:', err);
      alert('Something went wrong during booking.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Ready to book this class?
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBooking}
        disabled={loading}
        startIcon={loading && <CircularProgress size={20} />}
      >
        {loading ? 'Processing...' : `Book Now – ₹${price}`}
      </Button>
    </Box>
  );
};

export default BookingForm;
