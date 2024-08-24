import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: null,
    categoryUpdate: null
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSearchCategory: (state, action) => {
            state.searchValue = action.payload
        },
        startUpdateCategory: (state, action) => {
            state.categoryUpdate = action.payload
        },
        finishUPdateCategory: (state, action) => {
            state.categoryUpdate = null
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchCategory, startUpdateCategory, finishUPdateCategory } = categorySlice.actions;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
