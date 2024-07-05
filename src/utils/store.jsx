import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chatMsgs: chatSlice,
        profile: profileSlice,
    }
})
export default store;