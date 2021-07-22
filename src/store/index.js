import { configureStore } from '@reduxjs/toolkit'
import formSlice from './form-slice'




const store = configureStore ({
    reducer: formSlice.reducer,
});

export const formActions = formSlice.actions;

export default store;