import axios from 'axios';
import { Place } from '../types/Area';

export const getAreaData = async () => {
	const { data } = await axios.get('https://api.zipp🐘opotam.us/GB/bb8');

	return data.places as Array<Place>;
};
