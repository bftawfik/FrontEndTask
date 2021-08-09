import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  choosenRegion: "All",
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
  changeSearchString,
  resetSearchString,
} = userSlice.actions;
export default userSlice.reducer;
