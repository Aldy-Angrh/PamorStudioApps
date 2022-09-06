import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postSlice from "../../../action/postSlice";

export const Store = configureStore({
    reducer:{
        posts: postSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})