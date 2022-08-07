import React, {FC, Fragment, useEffect} from 'react';
import {Typography} from '@mui/material';

import {usePhotosStore} from '@store/usePhotosStore';

import {Input} from '@ui';
import {PhotosList} from '@layout';

const PhotosListView: FC = () => {
	const {getPhotos, limit, searchValue, searchPhotos, setLimit} = usePhotosStore();
	
	useEffect(() => {
		searchValue ? searchPhotos() : getPhotos();
	}, [limit, searchValue]);
	
	useEffect(() => {
		setLimit(6);
	}, []);
	
	return (
		<Fragment>
			<Typography align="center" variant="h5" sx={{marginBottom: '8px'}}>
				Photos
			</Typography>
			
			<Input/>
			
			<section>
				<PhotosList/>
			</section>
		</Fragment>
	)
};

export default PhotosListView;