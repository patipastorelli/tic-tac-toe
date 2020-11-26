import { combineReducers } from "@reduxjs/toolkit";
import squareReducer from './square.slice';
import boardReducer from './board.slice';

const rootReducer = combineReducers({
    board: boardReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;