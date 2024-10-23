import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/counterSlice";
const store=configureStore({
    reducer:{
        counter:counterSlice
    }
})
export default store;