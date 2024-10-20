import { configureStore } from '@reduxjs/toolkit'
import textReducer from '../features/textSlice';
export const store = configureStore({
    reducer: {
        textStore: textReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = typeof store.dispatch;