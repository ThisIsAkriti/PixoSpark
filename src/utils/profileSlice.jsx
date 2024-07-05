import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        isProfileOpen: false,
    },
    reducers : {
        toggleProfile : (state) => {
            state.isProfileOpen = !state.isProfileOpen;
        },
        closeProfile : (state) => {
            state.isProfileOpen = false;
        }
    }
})
export const {toggleProfile, closeProfile} = profileSlice.actions;
export default profileSlice.reducer;