import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./authSlice";
import citiesReducer from "./cities";
import { citiesApiReducer } from "./citiesAPI";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cities: citiesReducer,
    citiesAPI: citiesApiReducer,
  },
});
