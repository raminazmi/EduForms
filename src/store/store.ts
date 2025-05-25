
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import reportsSlice from './slices/reportsSlice';
import sidebarSlice from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    reports: reportsSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
