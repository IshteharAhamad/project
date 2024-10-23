import { createSlice, nanoid } from "@reduxjs/toolkit";
import {counterSlice} from '../Features/counterSlice'
const counterSlice=createSlice({
   
    name:"counter",
    // initialState:{
    //     id:1,
    //     Text:"Hello world", for todo APP

    // },
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementByValue:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {increment,decrement,incrementByValue}=counterSlice.actions;
export default counterSlice.reducer;