import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeThemeName: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeThemeName } = userSlice.actions;
export default userSlice.reducer;
