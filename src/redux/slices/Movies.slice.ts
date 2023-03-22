import { createSlice } from '@reduxjs/toolkit';

import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
// import { any } from '../../features/movies/data/Movies.model';

export interface MovieState {
	status: 'idle' | 'loading' | 'success' | 'error';
	data: any;
	error: any;
}

const initState: MovieState = {
	data: [],
	status: 'idle',
	error: '',
};

const setData: CaseReducer<MovieState, PayloadAction<any>> = (
	state,
	action
) => ({
	data: action.payload,
	status: 'success',
	error: '',
});

const setLoading: CaseReducer<MovieState> = (state) => ({
	...state,
	status: 'loading',
	error: '',
});

const setError: CaseReducer<MovieState, PayloadAction<any>> = (
	state,
	action
) => ({
	...state,
	status: 'error',
	error: action.payload,
});

const deviceSlice = createSlice({
	name: 'movies',
	initialState: initState,
	reducers: {
		setData,
		setLoading,
		setError,
	},
});

export default deviceSlice;
