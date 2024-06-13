import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chatMsgs",
    initialState : {
        messages : []
    },
    reducers: {
        addMsg : (state , action) => {
            state.messages.splice(LIVE_CHAT_COUNT,1)
            state.messages.unshift(action.payload);
        },
    },
});
export const {addMsg} = chatSlice.actions;
export default chatSlice.reducer;