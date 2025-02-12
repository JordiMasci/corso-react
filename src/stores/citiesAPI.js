import { createSlice } from "@reduxjs/toolkit";

const citiesApiSlice = createSlice({
  name: "citiesAPI",
  initialState: {
    value: [],
  },
  reducers: {
    setCitiesAPI: (state, action) => {
      state.value = action.payload;
    },
    removeCityAPI: (state, action) => {
      state.value = state.value.filter(
        (cityAPI) => cityAPI.id !== action.payload
      );
    },
  },
});

const citiesApiReducer = citiesApiSlice.reducer;
export const { setCitiesAPI, removeCityAPI } = citiesApiSlice.actions;
export { citiesApiReducer };
