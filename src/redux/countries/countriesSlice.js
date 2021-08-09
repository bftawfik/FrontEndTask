import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addAllCountries: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const { addAllCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
