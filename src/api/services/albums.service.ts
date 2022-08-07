import api from '@api/config';

import {Album, Response} from '@types';

export default class AlbumsService {
	public static getAlbum = (id: string): Response<Album> => api.get(`/albums/${id}`);
}