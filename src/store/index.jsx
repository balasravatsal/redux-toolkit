import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice.jsx";

const Store = configureStore({
    reducer: {
        user: userSlice
    }
})

export default Store
