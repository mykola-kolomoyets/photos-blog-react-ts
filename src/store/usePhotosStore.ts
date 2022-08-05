import createStore from 'zustand';

import {Photo} from '../utils/types/photos';
import PhotosService from '../api/services/photos.service';

interface PhotosStore {
	/**
	 * Fields
	 */
	photos: Photo[];
	isFetching: boolean;
	
	/**
	 * Methods
	 */
	getPhotos: (limit: number) => void;
	searchPhotos: (searchValue: string) => void;
}

const usePhotosStore = createStore<PhotosStore>((set, get) => ({
	photos: [],
	isFetching: false,
	
	getPhotos: async (limit) => {
		set({isFetching: true});
		
		PhotosService.getPhotos(limit)
			.then(({data: photos}) => set({photos}))
			.catch((err) => {
				console.log(err);
				
				set({photos: []});
			})
			.finally(() => set({isFetching: false}));
	},
	
	searchPhotos: (searchValue) => {
		set({isFetching: true});
		
		PhotosService.getPhotos()
			.then(({data}) => {
				const filteredPhotos = data.filter(photo => photo.title.includes(searchValue.toLowerCase()));
				
				set({photos: filteredPhotos});
			})
			.catch(err => {
				console.log(err);
				
				set({photos: []});
			})
			.finally(() => set({isFetching: false}));
	}
}));