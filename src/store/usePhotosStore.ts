import createStore from 'zustand';

import {Photo} from '../utils/types/photos';
import PhotosService from '../api/services/photos.service';

interface PhotosStore {
	/**
	 * Fields
	 */
	limit: number;
	photos: Photo[];
	isFetching: boolean;
	
	/**
	 * Methods
	 */
	setLimit: (limit: number) => void;
	getPhotos: () => void;
	searchPhotos: (searchValue: string) => void;
}

export const initialState: Omit<PhotosStore, 'setLimit' | 'getPhotos' | 'searchPhotos'> = {
	limit: 6,
	photos: [],
	isFetching: false
}

const usePhotosStore = createStore<PhotosStore>((set, get) => ({
	...initialState,
	
	setLimit: (limit) => {
		set({limit});
	},
	
	getPhotos: async () => {
		const limit = get().limit;
		
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

export default usePhotosStore;