import { createSlice } from "@reduxjs/toolkit";

import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { DeviceModel } from "../../features/devices/data/devices.model";

export interface DeviceState {
	status: "idle" | "loading" | "success" | "error";
	data: DeviceModel[];
	error: any;
}

const initState: DeviceState = {
	data: [],
	status: "idle",
	error: "",
};

const setData: CaseReducer<DeviceState, PayloadAction<DeviceModel[]>> = (state, action) => ({
	data: action.payload,
	status: "success",
	error: "",
});

const setLoading: CaseReducer<DeviceState> = (state) => ({
	...state,
	status: "loading",
	error: "",
});

const setError: CaseReducer<DeviceState, PayloadAction<any>> = (state, action) => ({
	...state,
	status: "error",
	error: action.payload,
});

const deviceSlice = createSlice({
	name: "devices",
	initialState: initState,
	reducers: {
		setData,
		setLoading,
		setError,
	},
});

export default deviceSlice;
