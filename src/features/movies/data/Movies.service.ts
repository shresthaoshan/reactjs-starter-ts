import { MovieResponseModel, movie } from './Movies.model';
import { localFetch } from '../../../common/utils/fetch';

export const getAllMovies = (search: string, page: number) =>
	localFetch<MovieResponseModel>(`/?page=${page}&s=${search}`, {
		method: 'GET',
	});

export const getmoviedetails = (id: string) =>
	localFetch<movie>(`/?i=${id}`, {
		method: 'GET',
	});
