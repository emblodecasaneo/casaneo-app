// store.js
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice, // Ajoutez d'autres slices ici si nécessaire
    },
});

export default store;
