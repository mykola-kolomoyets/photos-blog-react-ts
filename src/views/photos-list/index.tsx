import React, {FC, Fragment, useEffect, useMemo, useState} from 'react';
import {CircularProgress, Typography} from '@mui/material';

import usePhotosStore from '../../store/usePhotosStore';

import Input from '../../components/ui/input';
import PhotosList from '../../components/layout/photos-list';

const PhotosListView: FC = () => {
	const {getPhotos, limit, isFetching, searchValue, searchPhotos, setLimit} = usePhotosStore();
	
	const [isDebounceFetching, setIsDebounceFetching] = useState(false);
	

	
	useEffect(() => {
		searchValue ? searchPhotos() : getPhotos();
	}, [limit, searchValue]);
	
	useEffect(() => {
		setTimeout(() => {
			setIsDebounceFetching(isFetching);
		}, isFetching ? 0 : 350);
	}, [isFetching]);
	
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
				{isDebounceFetching ? <CircularProgress/> : (
					<PhotosList/>
				)}
			</section>
		</Fragment>
	)
};

export default PhotosListView;