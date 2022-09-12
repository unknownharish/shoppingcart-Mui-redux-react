import { configureStore } from '@reduxjs/toolkit'
import myReducer from './actionSlice'


export const store = configureStore({
    reducer: {
        mystore: myReducer
    }
})
