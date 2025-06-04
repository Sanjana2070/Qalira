import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStudios = createAsyncThunk('studios/fetchStudios', async () => {
  // Replace with real API call
  return [
    { id: 1, name: 'Dance Inc.', location: 'Mumbai' },
    { id: 2, name: 'Studio Vibe', location: 'Bangalore' },
  ];
});

const studioSlice = createSlice({
  name: 'studios',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudios.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudios.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchStudios.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default studioSlice.reducer;
