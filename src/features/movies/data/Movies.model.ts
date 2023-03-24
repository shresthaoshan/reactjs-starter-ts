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

export interface Rating {
	Source: string;
	Value: string;
}
[];

export interface MovieDetailsProps {
	Actors: string;
	Awards: string;
	BoxOffice: string;
	Country: string;
	DVD: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Production: string;
	Rated: string;
	Ratings: {
		Source: string;
		Value: string;
	}[];
	Released: string;
	Response: boolean;
	Runtime: string;
	Title: string;
	Type: string;
	Website: string;
	Writer: string;
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
}

export interface movie {
	data: MovieDetailsProps;
	status: string;
	error: string;
}
