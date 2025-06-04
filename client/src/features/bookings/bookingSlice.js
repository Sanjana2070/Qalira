import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
  // Replace with your backend API call
  return [
    { id: 1, title: 'Hip-Hop Basics', date: 'May 25, 2025' },
    { id: 2, title: 'Salsa Night', date: 'June 1, 2025' },
  ];
});

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default bookingSlice.reducer;
