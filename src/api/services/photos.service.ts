import {AxiosResponse} from 'axios';

import api from '../config';

import {Photo} from '../../utils/types/photos';

export default class PhotosService {
	private static defaultLimit = 6;
	
	public static getPhotos = (limit?: number): Promise<AxiosResponse<Photo[]>> => {
		const query = limit === undefined ? '' : `?_start=0&_limit=${limit || this.defaultLimit}`;
		
		return api.get(`/photos${query}`);
	}
}