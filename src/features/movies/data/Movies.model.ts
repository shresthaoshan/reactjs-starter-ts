export interface MovieModel {
	Title: string;
	Year: string;
	imdbID: string;
	Type: 'movie' | 'series';
	Poster: string;
}
export interface movies {
	Response: 'True' | 'False';
	Search: MovieModel[];
	totalResults: string;
	error: any;
	status: string;
}

export interface MovieResponseModel {
	Response: 'True' | 'False';
	Search: MovieModel[];
	totalResults: string;
}

export interface AllMovie {
	movies: MovieResponseModel;
	onPageChange: (page: number) => void;
	page: number;
}
