import {FC} from 'react';
import {Button, Grid, Typography} from '@mui/material';

import usePhotosStore from '../../../store/usePhotosStore';

import PhotoItem from '../../ui/photo-item';

import {centerButtonStyles, limitStep} from './photos-list.constants';

import styles from './photos-list.module.scss';

const PhotosList: FC = () => {
	const {photos, limit, setLimit, searchValue, filteredLength, total} = usePhotosStore();
	
	const onShowMoreClick = () => setLimit(limit + limitStep);
	
	if (!photos.length) {
		return (
			<section data-testid='empty-photos' className={styles.list}>
				<Typography variant="body1">
					Photos by title{' '}
					
					<strong>{searchValue}</strong>
				
				{' '}were not found...
			</Typography>
			</section>
		)
	}
	
	const isPluralPhotos = photos.length > 1;
	
	return (
		<section className={styles.list}>
			{searchValue && (
				<Typography variant="body1">
					Found {filteredLength} photo{isPluralPhotos ? 's' : ''} from {total}
				</Typography>
			)}
			
			<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 2, md: 3}} alignItems="stretch">
				{photos.map(photo => (
					<Grid item key={photo.id} md={1} sm={1} xs={1}>
						<PhotoItem data={photo}/>
					</Grid>
				))}
			</Grid>
			
			{photos.length >= limit ? (
				<Button
					data-testid='show-more'
					style={centerButtonStyles}
					variant="contained"
					onClick={onShowMoreClick}
				>
					Show More
				</Button>
			) : null}
		</section>
	)
};

export default PhotosList;