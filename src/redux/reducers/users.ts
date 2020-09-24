import { createSlice } from '@reduxjs/toolkit';

const usersInitialState: UsersProps = {
  users: [],
  loading: false,
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUsersRequest(state) {
      state.loading = true;
    },
    getUsersSuccess(state, action) {
      state.users = action.payload;
      state.loading = false;
    },
    getUsersFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersFail,
} = usersSlice.actions;

export default usersSlice.reducer;
