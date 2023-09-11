import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, fetchPosts } from './homeAction';
import { HomeSliceState } from '../../../types/homeTypes';


const initialState: HomeSliceState = {
  dataType: 'todos',
  posts: [],
  loading: false,
  error: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.dataType = 'todos';
      state.loading = false;
    });
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.dataType = 'todos';
      state.loading = true;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.dataType = 'posts';
      state.loading = false;
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.dataType = 'posts';

      state.loading = true;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default homeSlice.reducer;
