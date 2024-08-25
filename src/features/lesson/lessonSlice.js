import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lessonUpdate: null
};

export const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
        startUpdateLesson: (state, action) => {
            state.lessonUpdate = action.payload
        },
        finishUpdateLesson: (state, action) => {
            state.lessonUpdate = null
        },
    },
});

export const { startUpdateLesson, finishUpdateLesson } = lessonSlice.actions;

const lessonReducer = lessonSlice.reducer;
export default lessonReducer;
