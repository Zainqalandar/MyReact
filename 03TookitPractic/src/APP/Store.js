import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Store/Slaics/TodoSlaics";

let Store=configureStore({
    reducer: todoSlice.reducer 
})
export default Store