import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = redditSlice.actions;

export default redditSlice.reducer;
