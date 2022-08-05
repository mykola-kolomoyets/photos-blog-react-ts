import {FC} from 'react';
import {Typography} from '@mui/material';

import usePhotosStore from '../../../store/usePhotosStore';

import {centerButtonStyles, limitStep} from './photos-list.constants';

import styles from './photos-list.module.scss';
import Grid from '../grid';
import Button from '../../ui/button';
import PhotoItem from '../../ui/photo-item';
import {Photo} from '../../../utils/types/photos';

const PhotosList: FC = () => {
	const {photos, limit, setLimit, searchValue, filteredLength, total} = usePhotosStore();
	
	const onShowMoreClick = () => setLimit(limit + limitStep);
	
	if (!photos.length) {
		return (
			<section data-testid="empty-photos" className={styles.list}>
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
			
			<Grid
				items={photos}
				renderItem={(photo) => <PhotoItem data={photo} />}
				keyExtractor={(photo) => photo.id}
			/>
			
			{photos.length >= limit ? (
				<Button title="Show More" onClick={onShowMoreClick}/>
			) : null}
		</section>
	)
};

export default PhotosList;