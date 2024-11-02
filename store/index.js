import { configureStore } from "@reduxjs/toolkit";
import Settings from "./reducers/Settings";

const store = configureStore({
  reducer: {
    Settings,
  },
});

export default store;
