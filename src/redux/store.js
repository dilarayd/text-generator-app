import { configureStore } from "@reduxjs/toolkit";
import textSlice from './textSlice'

export const store = configureStore({
    reducer: {
        paras: textSlice
    }
})

