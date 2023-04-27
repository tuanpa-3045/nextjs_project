import { login, register } from './thunks';

const loginAuth = {
  [login.pending]: (state, action) => {
    state.loading = true;
  },
  [login.fulfilled]: (state, action) => {
    state.loading = false;
    state.token = action.payload;
  },
  [login.rejected]: (state, action) => {
    state.loading = false;
  },
};

const registerAuth = {
  [register.pending]: (state, action) => {
    state.loading = true;
  },
  [register.fulfilled]: (state, action) => {
    state.loading = false;
    state.token = action.payload;
  },
  [register.rejected]: (state, action) => {
    state.loading = false;
  },
};

export default {
  ...loginAuth,
  ...registerAuth,
}