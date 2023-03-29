export type Area = {
	'post code': string;
	country: string;
	'country abbreviation': string;
	places: Array<Place>;
};

export type Place = {
	'location name': string;
	longitude: string;
	state: string;
	'state abbreviation': string;
	latitude: string;
};
