import { configureStore } from '@reduxjs/toolkit';
import AllInOneReducer from '../features/movieList/AllInOneSlice';

export default configureStore({
  reducer: {
    movieList: AllInOneReducer,
  },
});
