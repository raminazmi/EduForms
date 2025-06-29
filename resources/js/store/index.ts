import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import templatesSlice from './slices/templatesSlice';
import reportsSlice from './slices/reportsSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        templates: templatesSlice,
        reports: reportsSlice,
        ui: uiSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;