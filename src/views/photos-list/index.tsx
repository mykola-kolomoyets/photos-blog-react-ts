import React, {FC, Fragment, useEffect} from 'react';
import {CircularProgress, Typography} from '@mui/material';

import usePhotosStore from '../../store/usePhotosStore';

import Input from '../../components/ui/input';
import PhotosList from '../../components/layout/photos-list';

const PhotosListView: FC = () => {
	const {getPhotos, limit, isFetching, searchValue, searchPhotos, setLimit} = usePhotosStore();
	
	useEffect(() => {
		searchValue ? searchPhotos() : getPhotos();
	}, [limit, searchValue]);
	
	useEffect(() => {
		setLimit(6);
	}, []);
	
	return (
		<Fragment>
			<Typography align="center" variant="h5">
				Photos
			</Typography>
			
			<Input/>
			
			<section>
				{isFetching ? <CircularProgress/> : (
					<PhotosList/>
				)}
			</section>
		</Fragment>
	)
};

export default PhotosListView;