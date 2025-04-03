import { createSlice } from "@reduxjs/toolkit";

//authentication ka track rakne ke liye ye store bna rhe h
const initialState = {
    //false means not authenticated 
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //state me value update hota h intial state ke baad 
        //action me hamara payload hota h

        // payload is the name of data that you are sending to your store to update the corresponding reducer. 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;