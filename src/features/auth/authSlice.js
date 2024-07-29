
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, isAdmin } = action.payload;
      state.user = { email };
      state.isAuthenticated = true;
      state.isAdmin = isAdmin;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
