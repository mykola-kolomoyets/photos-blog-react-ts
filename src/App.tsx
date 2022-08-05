import React, {FC, useEffect} from 'react';
import {CircularProgress, Typography} from '@mui/material';

import usePhotosStore from './store/usePhotosStore';

import Header from './components/layout/header';
import Container from './components/layout/container';
import PhotosList from './components/layout/photos-list';

import Input from './components/ui/input';

import './App.scss';

const App: FC = () => {
	const {getPhotos, limit, isFetching, searchValue, searchPhotos} = usePhotosStore();
	
	useEffect(() => {
		searchValue ? searchPhotos() : getPhotos();
	}, [limit, searchValue]);
	
	return (
		<main>
			<Header/>
			
			<Container>
				<Typography align="center" variant="h5">
					Photos
				</Typography>
				
				<Input/>
				
				<section>
					{isFetching ? <CircularProgress/> : (
						<PhotosList/>
					)}
				</section>
			
			</Container>
		</main>
	);
}

export default App;
