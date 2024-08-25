import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import courseReducer from './features/course/courseSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import adminReducer from './features/admin/adminSlice';
import categoryReducer from './features/category/categorySlice';
import lessonReducer from './features/lesson/lessonSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    course: courseReducer,
    admin: adminReducer,
    category: categoryReducer,
    lesson: lessonReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },

});
setupListeners(store.dispatch);
