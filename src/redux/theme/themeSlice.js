import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["light", "dark"],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
