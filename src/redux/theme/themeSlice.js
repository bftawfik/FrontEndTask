import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      label: "Light Mode",
      value: "light",
    },
    {
      label: "Dark Mode",
      value: "dark",
    },
  ],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
