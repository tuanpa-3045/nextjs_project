import { createAsyncThunk } from '@reduxjs/toolkit';

import * as services from '../../services'

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await services.login(data);
      return res;
    } catch (error) {
      console.log(error);
      if (error.status) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);