import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: {},
  searchResults: {},
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addAllCountries: (state, action) => {
      state.all = action.payload;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { addAllCountries, addSearchResults } = countriesSlice.actions;
export default countriesSlice.reducer;
