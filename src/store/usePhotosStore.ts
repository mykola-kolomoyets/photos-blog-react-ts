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
	searchValue: string;
	total: number;
	filteredLength: number;
	
	/**
	 * Methods
	 */
	setLimit: (limit: number) => void;
	setSearchValue: (searchValue: string) => void;
	getPhotos: () => void;
	searchPhotos: () => void;
}

export const initialState: Omit<PhotosStore, 'setLimit' | 'getPhotos' | 'searchPhotos' | 'setSearchValue'> = {
	limit: 6,
	photos: [],
	isFetching: false,
	searchValue: '',
	total: 0,
	filteredLength: 0
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
	
	searchPhotos: () => {
		set({isFetching: true});
		
		const {limit, searchValue} = get();
		
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