import createStore from 'zustand';

import {Photo, PhotoDetails} from '../utils/types/photos';
import PhotosService from '../api/services/photos.service';
import AlbumsService from '../api/services/albums.service';

interface PhotosStore {
	/**
	 * Fields
	 */
	limit: number;
	photos: Photo[];
	chosenPhotoDetails: PhotoDetails | null;
	isFetching: boolean;
	searchValue: string;
	total: number;
	filteredLength: number;
	
	/**
	 * Methods
	 */
	setLimit: (limit: number) => void;
	setSearchValue: (searchValue: string) => void;
	
	getPhotos: () => void;
	getPhoto: (id: string) => void;
	searchPhotos: () => void;
}

type PhotosStoreFields = Omit<PhotosStore,
	'setLimit' | 'getPhotos' | 'searchPhotos' | 'setSearchValue' | 'getPhoto'>;

export const initialState: PhotosStoreFields = {
	limit: 6,
	photos: [],
	isFetching: false,
	searchValue: '',
	total: 0,
	filteredLength: 0,
	chosenPhotoDetails: null
}

const usePhotosStore = createStore<PhotosStore>((set, get) => ({
	...initialState,
	
	setLimit: (limit) => {
		set({limit});
	},
	
	setSearchValue: (searchValue) => {
		set({searchValue});
	},
	
	getPhotos: async () => {
		const limit = get().limit;
		
		set({isFetching: true});
		
		PhotosService.getPhotos(limit)
			.then(({data: photos}) => set({
				photos,
				total: photos.length,
				filteredLength: photos.length
			}))
			.catch((err) => {
				console.log(err);
				
				set({
					photos: [],
					total: 0,
					filteredLength: 0
				});
			})
			.finally(() => set({isFetching: false}));
	},
	
	getPhoto: async (id) => {
		set({isFetching: true});
		
		PhotosService.getPhoto(id)
			.then(({data}) => data)
			.then(async (data) => {
				const chosenPhotoDetails: PhotoDetails = {...data, albumTitle: ''};
				
				await AlbumsService.getAlbum(data.albumId)
					.then(({data: {title: albumTitle}}) => {
						chosenPhotoDetails.albumTitle = albumTitle;
					});
				
				set({chosenPhotoDetails});
			})
			.catch(err => {
				console.log(err);
				
				set({chosenPhotoDetails: null})
			})
			.finally(() => set({isFetching: false}));
	},
	
	searchPhotos: () => {
		const {limit, searchValue} = get();
		
		if (!searchValue || !searchValue.trim().length) return;
		
		set({isFetching: true});
		
		PhotosService.getPhotos()
			.then(({data}) => {
				const filteredPhotos = data
					.filter(photo => photo.title.includes(searchValue.toLowerCase()));
				
				set({
					photos: filteredPhotos.slice(0, limit),
					total: data.length,
					filteredLength: filteredPhotos.length
				});
			})
			.catch(err => {
				console.log(err);
				
				set({
					photos: [],
					total: 0,
					filteredLength: 0
				});
			})
			.finally(() => set({isFetching: false}));
	}
}));

export default usePhotosStore;