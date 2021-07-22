import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    formState: 0,
    loginFormState: {} 
};

const formSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setStateInRedux(state, action) {
        state.formState = action.payload;
        },
        setLoginState(state, action) {
            state.loginFormState = action.payload;
        }
    }
});

export default formSlice