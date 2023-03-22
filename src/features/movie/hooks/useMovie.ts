import { notifyError } from "../../../common/utils/alerts";
import movieSlice from "../../../redux/slices/movies.slice";
import { useAppDispatch } from "../../../redux/store";
import { getSomeMovies } from "../data/movie.service";

export const useMovie = () => {
	const dispatch = useAppDispatch();
	const getMovie = async (): Promise<void> => {
		try {
			dispatch(movieSlice.actions.setLoading());
			const res = await getSomeMovies();
			dispatch(movieSlice.actions.setData(res.Search));
		} catch (error) {
			notifyError("Fetch movies", (error as any).message);
			dispatch(movieSlice.actions.setError(error));
		}
	};

	return { getMovie };
};
