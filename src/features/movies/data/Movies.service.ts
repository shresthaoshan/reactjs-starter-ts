import localAxios from '../../../common/utils/localAxios';
import {
	MoviesCreateModel,
	MoviesUpdateModel,
	MovieModel,
} from './Movies.model';

const apikey = 'f62c421f';
localStorage.setItem('apiKey', apikey);
export const getAllMovies = (search: string): Promise<any> =>
	localAxios.get(`&s=${search}`);

// export const postNewDevice = (payload: MoviesCreateModel): Promise<void> =>
// 	localAxios.post(`/device`, payload);

// export const putUpdateDevice = (
// 	macAddress: string,
// 	payload: MoviesUpdateModel
// ) => localAxios.put(`/device/${macAddress}`, payload);
