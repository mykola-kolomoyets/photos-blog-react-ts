import {FC, Fragment, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Box, CircularProgress, Grid, Typography} from '@mui/material';

import {usePhotosStore} from '@store/usePhotosStore';

import {ButtonComponent as Button} from '@ui';

import {mockImage} from '@assets/images';

type PhotoDetailsViewParams = 'id';
const PhotoDetailsView: FC = () => {
	const {id} = useParams<PhotoDetailsViewParams>();
	
	const {getPhoto, chosenPhotoDetails, isFetching} = usePhotosStore();
	
	const navigate = useNavigate();
	
	const onReturnToListViewClick = () => navigate('/');
	
	useEffect(() => {
		id && getPhoto(id);
	}, [id]);
	
	if (!isFetching && !chosenPhotoDetails) {
		return (
			<Fragment>
				<Typography variant="h4">
					Photo was now found...
				</Typography>
				
				<Button title="Show More" onClick={onReturnToListViewClick}/>
			</Fragment>
		)
	}
	
	if (isFetching) {
		return <CircularProgress/>
	}
	
	return (
		<article data-testid="photo-details">
			<Grid container spacing={2} columns={{xs: 1, sm: 2}}>
				<Grid item xs={1} sm={1}>
					<Box
						component="img"
						sx={{
							height: '100%',
							width: '100%'
						}}
						src={mockImage}
						// src={chosenPhotoDetails?.url}
					/>
				</Grid>
				
				<Grid item xs={1} sm={1} sx={{display: 'flex', alignItems: 'center'}}>
					<Box>
						<Typography component="div" variant="h5">
							{chosenPhotoDetails?.title}
						</Typography>
						
						<Typography variant="subtitle1" color="text.secondary" component="div">
							Album: <strong>{chosenPhotoDetails?.albumTitle}</strong>
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</article>
	)
};

export default PhotoDetailsView;