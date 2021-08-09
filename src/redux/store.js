import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./theme/themeSlice";
import userReducer from "./user/userSlice";
import countriesReducer from "./countries/countriesSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    countries: countriesReducer,
  },
});

export default store;
