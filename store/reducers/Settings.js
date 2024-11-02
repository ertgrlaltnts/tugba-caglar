import { createSlice } from "@reduxjs/toolkit";

const SettingsSlice = createSlice({
  name: "Settings",
  initialState: {
    settings: {},
    user: {},
  },

  reducers: {
    fetchSettings: (state, action) => {
      state.settings = { ...action.payload };
    },

    fetchUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { fetchSettings, fetchUser } = SettingsSlice.actions;
export default SettingsSlice.reducer;
