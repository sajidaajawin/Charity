
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/Redux/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


