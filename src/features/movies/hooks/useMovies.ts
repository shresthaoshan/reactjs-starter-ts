import { notifyError } from '../../../common/utils/alerts';
import MoviesSlice from '../../../redux/slices/Movies.slice';
import { useAppDispatch } from '../../../redux/store';
import { getAllMovies } from '../data/Movies.service';

export const useMovies = () => {
	const dispatch = useAppDispatch();

	const GetMovies = async (search: string) => {
		try {
			dispatch(MoviesSlice.actions.setLoading());
			const res = await getAllMovies('how');
			dispatch(MoviesSlice.actions.setData(res));
		} catch (error: any) {
			dispatch(MoviesSlice.actions.setError(error.message));
			notifyError('Fetch Devices', error.message);
		}
	};

	return { GetMovies };
};
