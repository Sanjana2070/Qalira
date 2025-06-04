import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchClasses = createAsyncThunk('classes/fetchClasses', async () => {
  // Replace with real API call
  return [
    { id: 1, title: 'Ballet Basics', instructor: 'Asha Rao', price: 500 },
    { id: 2, title: 'Guitar Jam', instructor: 'Rahul Verma', price: 750 },
  ];
});

const classSlice = createSlice({
  name: 'classes',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchClasses.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default classSlice.reducer;