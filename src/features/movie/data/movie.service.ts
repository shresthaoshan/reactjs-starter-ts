import { MovieResponseModel } from "./movie.model";
import { localFetch } from "../../../common/utils/fetch";

export const getSomeMovies = () =>
	localFetch<MovieResponseModel>(`/?page=1&s=${encodeURI("beautiful")}`, {
		method: "GET",
	});
