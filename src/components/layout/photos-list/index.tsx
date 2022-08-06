import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Typography} from '@mui/material';

import usePhotosStore from '../../../store/usePhotosStore';

import Grid from '../grid';
import Button from '../../ui/button';
import PhotoItem from '../../ui/photo-item';

import {limitStep} from './photos-list.constants';

import styles from './photos-list.module.scss';

const PhotosList: FC = () => {
	const {photos, limit, setLimit, searchValue, filteredLength, total} = usePhotosStore();
	
	const navigate = useNavigate();
	
	const onShowMoreClick = () => setLimit(limit + limitStep);
	
	const onPhotoCLick = (id: string) => navigate(`/${id}`);
	
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
			{searchValue && !!searchValue.trim() && (
				<Typography variant="body1">
					Found {filteredLength} photo{isPluralPhotos ? 's' : ''} from {total}
				</Typography>
			)}
			
			<Grid
				items={photos}
				renderItem={(photo) => <PhotoItem data={photo} onClick={() => onPhotoCLick(photo.id)}/>}
				keyExtractor={(photo) => photo.id}
			/>
			
			{photos.length >= limit ? (
				<Button title="Show More" onClick={onShowMoreClick}/>
			) : null}
		</section>
	)
};

export default PhotosList;