import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    preferences: {
      activityType: '',
      preferredLocation: '',
    },
  },
  reducers: {
    updatePreferences: (state, action) => {
      state.preferences = action.payload;
    },
  },
});

export const { updatePreferences } = userSlice.actions;
export default userSlice.reducer;