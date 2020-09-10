import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditReducer from './redditSlice';

export default configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    reddit: redditReducer,
  }),
});
