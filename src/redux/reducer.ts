import { combineReducers } from "@reduxjs/toolkit";
// slices
import deviceSlice from "./slices/devices.slice";

// reducer
const reducer = combineReducers({
	devices: deviceSlice.reducer,
});

export default reducer;
