import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { UserState } from '../../../types/authTypes';
import { apiService } from '../../../shared/services/api-services';

export const loginAsync = createAsyncThunk<
  UserState,
  { email: string; password: string },
  {
    state: RootState;
  }
>('auth/login', async (data, thunkAPI) => {
  try {
    const list = thunkAPI.getState().authSlice.userList;
    return await apiService.login(data, list);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || 'An error occurred.');
  }
});
