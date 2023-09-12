import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginAsync } from './authAction';
import { UserState } from '../../../types/authTypes';

export interface UserSliceState {
  user: UserState;
  isLogin: boolean;
  loading: boolean;
  error: string;
}
const initialState: UserSliceState = {
  user: {
    name: '',
    password: '',
    email: '',
    photo: '',
  },
  isLogin: false,
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    logoutUser(state) {
      state.isLogin = false;
      state.loading = false;
      state.user = {
        name: '',
        password: '',
        email: '',
        photo: '',
      };
    },
    googleUser(state, action: PayloadAction<UserState>) {
      state.isLogin = true;
      state.loading = false;
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLogin = true;
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginAsync.pending, (state, action) => {
      state.loading = true;
      state.error = ""
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.isLogin = false;
    });
  },
});
export const { logoutUser, googleUser } = authSlice.actions;

export default authSlice.reducer;
