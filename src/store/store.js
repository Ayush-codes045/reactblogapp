import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

//store only wants saare reducers ke baare me bto
const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;