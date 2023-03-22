import { MovieResponseModel } from './Movies.model';
import { localFetch } from '../../../common/utils/fetch';

export const getAllMovies = (search: string, page: number) =>
	localFetch<MovieResponseModel>(`/?page=${page}&s=${search}`, {
		method: 'GET',
	});

export const getmoviedetails = (id: string) =>
	localFetch<any>(`/?i=${id}`, {
		method: 'GET',
	});
