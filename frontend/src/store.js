import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loadingReducer from "./features/loadingSlice";
import logoutReducer from "./features/logoutSlice";
import { apiSlice } from './features/apiSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    logout: logoutReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
