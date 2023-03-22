export interface MoviesCreateModel {
	name: string;
	macAddress: string;
	description: string;
}

export interface MoviesUpdateModel
	extends Omit<MoviesCreateModel, 'macAddress'> {
	// status: boolean
}

export interface MovieModel {
	status: boolean;
}
