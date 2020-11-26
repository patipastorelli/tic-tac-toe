import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    value: '',
};

const squareSlice = createSlice({
    name: 'square',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.value = action.payload;
        }
    }
});

export const {setValue} = squareSlice.actions;

export default squareSlice.reducer;