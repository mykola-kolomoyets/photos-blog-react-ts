import {FC} from 'react';

import usePhotosStore from '../../../store/usePhotosStore';

import {limitStep} from './photos-list.constants';
import PhotoItem from '../../ui/photo-item';
import {Grid} from '@mui/material';

const PhotosList: FC = () => {
	const {photos, limit, setLimit} = usePhotosStore();
	
	const onShowMoreClick = () => {
		setLimit(limit + limitStep);
	}
	
	return (
		<section>
			<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 2, md: 3}}>
				{photos.map(photo => (
					<Grid item key={photo.id} md={1} sm={1} xs={1}>
						<PhotoItem data={photo}/>
					</Grid>
				))}
			</Grid>
			
			{photos.length >= 6 ? (
				<button onClick={onShowMoreClick}>Show more</button>
			) : null}
		</section>
	)
};

export default PhotosList;