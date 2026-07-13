import { createSlice } from "@reduxjs/toolkit";

const interfaceSlice = createSlice({
  name: "interface",
  initialState: { menuOpen: false, lightMode: true },
  reducers: {
    toggleMenu: (state) => { state.menuOpen = !state.menuOpen; },
    closeMenu: (state) => { state.menuOpen = false; },
    toggleTheme: (state) => { state.lightMode = !state.lightMode; },
  },
});

export const { toggleMenu, closeMenu, toggleTheme } = interfaceSlice.actions;
export default interfaceSlice.reducer;
