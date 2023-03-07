import { createSlice } from '@reduxjs/toolkit';

import reducers from './reducers';
import extraReducers from './extraReducers';

const initialState = {
  loading: false,
  token: null,
  name: '',
  cookie: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
  extraReducers,
});

export const { setCookie } = userSlice.actions;

export default userSlice.reducer;
