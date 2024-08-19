import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: null,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = courseSlice.actions;

const courseReducer = courseSlice.reducer;
export default courseReducer;
