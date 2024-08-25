import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lessonUpdate: null,
    getLessonById: null
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
        getDetailLesson: (state, action) => {
            state.getLessonById = action.payload
        },
        increaseLesson: (state) => {
            state.getLessonById = ++state.getLessonById
        }
    },
});

export const { startUpdateLesson, finishUpdateLesson, getDetailLesson, increaseLesson } = lessonSlice.actions;

const lessonReducer = lessonSlice.reducer;
export default lessonReducer;
