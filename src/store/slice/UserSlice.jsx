
import {createSlice} from "@reduxjs/toolkit";
import userSlice from "./UserSlice.jsx";

const UserSlice = createSlice({
    name: "User",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push( action.payload )
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        removeAllUser(state, action) {
            return []
        },
    }
})

export const { addUser, removeUser, removeAllUser } = UserSlice.actions

export default UserSlice.reducer
