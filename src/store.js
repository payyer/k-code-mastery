import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import courseReducer from './features/course/courseSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import adminReducer from './features/admin/adminSlice';
import categoryReducer from './features/category/categorySlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    course: courseReducer,
    admin: adminReducer,
    category: categoryReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },

});
setupListeners(store.dispatch);
