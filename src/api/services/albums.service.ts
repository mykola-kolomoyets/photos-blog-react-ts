import api from '../config';

import {Album} from '../../utils/types/albums';
import {Response} from '../../utils/types/services';

export default class AlbumsService {
	public static getAlbum = (id: string): Response<Album> => api.get(`/albums/${id}`);
}