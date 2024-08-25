import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValueCourse: null,
  courseUpdate: null
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setSearchValueCourse: (state, action) => {
      state.searchValueCourse = action.payload
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
export const { setSearchValueCourse, startUpdateCourse, finishUPdateCourse } = courseSlice.actions;

const courseReducer = courseSlice.reducer;
export default courseReducer;
