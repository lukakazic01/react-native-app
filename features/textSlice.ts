import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store";

const textSlice = createSlice({
    name: 'textStore',
    initialState: {
        text: ''
    },
    reducers: {
        updateText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    },
})


export const { updateText } = textSlice.actions;
export const selectText = (state: RootState) => state.textStore.text;
export default textSlice.reducer;