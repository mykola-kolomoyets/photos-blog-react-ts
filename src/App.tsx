import React, {FC, useEffect} from 'react';

import {Typography} from '@mui/material';

import Header from './components/layout/header';
import Container from './components/layout/container';

import './App.scss';
import usePhotosStore, {initialState} from './store/usePhotosStore';
import PhotosList from './components/layout/photos-list';

const App: FC = () => {
	
	const { getPhotos, limit } = usePhotosStore();
	
	useEffect(() => {
		getPhotos();
	}, [limit]);
	
	useEffect(() => {
		usePhotosStore.setState(initialState)
	}, []);
	
	return (
		<main>
			<Header />
			
			<Container>
				<Typography align="center"  variant="h5">
					Photos
				</Typography>
				
				<PhotosList />
			</Container>
		</main>
	);
}

export default App;
