import React from "react";
import { useAppSelector } from "../../redux/store";
import { useMovie } from "./hooks/useMovie";
import { MovieViewWrapper } from "./styles";

const MovieView = () => {
	const movies = useAppSelector((state) => state.movies);

	const { getMovie } = useMovie();

	React.useEffect(() => {
		getMovie();
	}, []);

	return (
		<MovieViewWrapper>
			<ul>
				{movies.data.map((mov) => (
					<li key={mov.Title}>{mov.Title}</li>
				))}
			</ul>
		</MovieViewWrapper>
	);
};

export default MovieView;
