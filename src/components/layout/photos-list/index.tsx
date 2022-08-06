import {FC, useMemo, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {Typography} from '@mui/material';

import usePhotosStore from '../../../store/usePhotosStore';

import Grid from '../grid';

import Button from '../../ui/button';
import PhotoItem from '../../ui/photo-item';

import {limitStep} from './photos-list.constants';

import styles from './photos-list.module.scss';

const PhotosList: FC = () => {
	const {
		isFetching,
		photos,
		limit,
		total,
		searchValue,
		filteredLength,
		setLimit
	} = usePhotosStore();
	
	const navigate = useNavigate();
	
	const isPluralPhotos = useMemo(() => photos.length > 1, [photos]);
	
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
				isFetching={isFetching}
			/>
			
			{photos.length >= limit ? (
				<Button title="Show More" onClick={onShowMoreClick}/>
			) : null}
		</section>
	)
};

export default memo(PhotosList);