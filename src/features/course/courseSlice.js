import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: null,
  courseUpdate: null
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action
    },
    startUpdateCourse: (state, action) => {
      state.courseUpdate = action.payload
    },
    finishUPdateCourse: (state, action) => {
      state.courseUpdate = null
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, startUpdateCourse, finishUPdateCourse } = courseSlice.actions;

const courseReducer = courseSlice.reducer;
export default courseReducer;
