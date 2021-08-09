import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  choosenRegion: "Filter by Region",
  searchString: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeThemeName: (state, action) => {
      state.theme = action.payload;
    },
    changeChoosenRegionName: (state, action) => {
      state.choosenRegion = action.payload;
    },
    resetChoosenRegionName: (state) => {
      state.choosenRegion = "Filter by Region";
    },
    changeSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    resetSearchString: (state) => {
      state.searchString = "";
    },
  },
});

export const {
  changeThemeName,
  changeChoosenRegionName,
  resetChoosenRegionName,
  changeSearchString,
  resetSearchString,
} = userSlice.actions;
export default userSlice.reducer;
