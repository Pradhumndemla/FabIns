import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem("token") ? localStorage.getItem("token") :  false ;

const initialState = { token } 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },

    register: (state, action) => {
      state.token = action.payload;
    },

    logout: (state) => {
      state.token = false;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
