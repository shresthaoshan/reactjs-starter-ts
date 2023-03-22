import { notifyError } from '../../../common/utils/alerts';
import movieSlice from '../../../redux/slices/movies.slice';
import { useAppDispatch } from '../../../redux/store';
import { getAllMovies, getmoviedetails } from '../data/Movies.service';

export const useMovies = () => {
	const dispatch = useAppDispatch();

	const GetMovies = async (search: string, page: number): Promise<void> => {
		try {
			dispatch(movieSlice.actions.setLoading());
			const res = await getAllMovies(search, page);
			dispatch(movieSlice.actions.setData(res));
		} catch (error: any) {
			notifyError('Fetch Movies', error.message);
			dispatch(movieSlice.actions.setError(error.message));
		}
	};

	const GetMovieDetails = async (id: string | undefined): Promise<void> => {
		try {
			dispatch(movieSlice.actions.setLoading());
			const res = await getmoviedetails(id);
			dispatch(movieSlice.actions.setData(res));
		} catch (error: any) {
			notifyError('Fetch Movies', error.message);
			dispatch(movieSlice.actions.setError(error.message));
		}
	};

	return { GetMovies, GetMovieDetails };
};
