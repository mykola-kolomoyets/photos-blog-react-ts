import {FC, Fragment, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {CircularProgress, Typography} from '@mui/material';

import usePhotosStore from '../../store/usePhotosStore';

import Button from '../../components/ui/button';

type PhotoDetailsViewParams = 'id';
const PhotoDetailsView: FC = () => {
	const { id } = useParams<PhotoDetailsViewParams>();
	
	const { getPhoto, chosenPhotoDetails, isFetching } = usePhotosStore();
	
	const navigate = useNavigate();
	
	const onReturnToListViewClick = () => navigate('/');
	
	useEffect(() => {
		id && getPhoto(id);
	}, [id]);
	
	if (!isFetching && !chosenPhotoDetails) {
		return (
			<Fragment>
			<Typography variant='h4'>
				Photo was now found...
			</Typography>
			
			<Button title="Show More" onClick={onReturnToListViewClick}/>
			</Fragment>
		)
	}
	
	if (isFetching) {
		return <CircularProgress />
	}
	
	return (
		<Fragment>
			<Typography>
			
			</Typography>
		</Fragment>
	)
};

export default PhotoDetailsView;