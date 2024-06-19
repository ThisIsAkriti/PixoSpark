import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'App',
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state ) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = true;
        }
    },
});
export const {toggleMenu , closeMenu} = appSlice.actions;
export default appSlice.reducer;