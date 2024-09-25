import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../reducers/todo.Slice'


export const store = configureStore({
    reducer:{
        todo:todoReducer
    }
})

