export interface MovieModel {
	Title: string;
	Year: string;
	imdbID: string;
	Type: "movie" | "series";
	Poster: string;
}

export interface MovieResponseModel {
	Response: "True" | "False";
	Search: MovieModel[];
	totalResults: string;
}
