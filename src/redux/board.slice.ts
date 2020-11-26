import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    history: [{
        squares: Array(9).fill('')
    }],
    xIsNext: true,
    stepNumber: 0
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setSquareHistory(state, action: PayloadAction<string[]>) {
            state.history = state.history.concat([{squares: action.payload}]);
            state.xIsNext = !state.xIsNext;
            state.stepNumber = state.history.length-1;
        },
        jumpTo(state, action: PayloadAction<number>){
            state.stepNumber = action.payload;
            state.xIsNext = (action.payload % 2) === 0;
        },
        resetHistory(state, action: PayloadAction){
            state.history = initialState.history;
            state.stepNumber = initialState.stepNumber;
            state.xIsNext = initialState.xIsNext;
        }
    }
});

export const {setSquareHistory, jumpTo, resetHistory} = boardSlice.actions;

export default boardSlice.reducer;