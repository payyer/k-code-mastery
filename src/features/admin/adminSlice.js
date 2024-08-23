import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tab: "course", // "category" | "lesson"
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.tab = action.payload
        },
    },
});

export const { setTab } = adminSlice.actions;

const adminReducer = adminSlice.reducer;
export default adminReducer;
