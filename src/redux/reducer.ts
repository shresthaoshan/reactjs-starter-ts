import { combineReducers } from "@reduxjs/toolkit";
// slices
import deviceSlice from "./slices/devices.slice";
import movieSlice from "./slices/movies.slice";

// reducer
const reducer = combineReducers({
	devices: deviceSlice.reducer,
	movies: movieSlice.reducer,
});

export default reducer;
