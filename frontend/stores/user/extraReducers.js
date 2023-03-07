import { login } from './thunks';

const getAuth = {
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

export default {
  ...getAuth,
}