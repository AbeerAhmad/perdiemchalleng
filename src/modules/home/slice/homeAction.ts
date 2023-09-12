import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../../shared/services/api-services';

export const fetchTodos = createAsyncThunk(
  'home/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const list = await apiService.getTodos();

      return list.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'An error occurred.');
    }
  },
);

export const fetchPosts = createAsyncThunk(
  'home/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const list = await apiService.fetchPosts();

      return list.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'An error occurred.');
    }
  },
);
