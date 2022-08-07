import api from '@api/config';

import {Photo, Response} from '@types';

export default class PhotosService {
	private static defaultLimit = 6;
	
	public static getPhotos = (limit?: number): Response<Photo[]> => {
		const query = limit === undefined ? '' : `?_start=0&_limit=${limit || this.defaultLimit}`;
		
		return api.get(`/photos${query}`);
	}
	
	public static getPhoto = (id: string): Response<Photo> => api.get(`/photos/${id}`);
}