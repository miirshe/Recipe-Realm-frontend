import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { userSlice } from './slices/userSlice';
export const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userSlice.middleware)
})
setupListeners(store.dispatch);