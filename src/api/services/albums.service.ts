import {AxiosResponse} from 'axios';

import api from '../config';

import {Album} from '../../utils/types/albums';

export default class AlbumsService {
	public static getAlbum = (id: string): Promise<AxiosResponse<Album>> => api.get(`/albums/${id}`);
}