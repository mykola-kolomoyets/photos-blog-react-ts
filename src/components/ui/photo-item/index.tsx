import {FC} from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import {Photo} from '../../../utils/types/photos';
import {sliceString} from '../../../utils/functions';
import {Typography} from '@mui/material';

type PhotoItemProps = {
	data: Photo;
}

const PhotoItem: FC<PhotoItemProps> = ({data}) => (
	<Card data-testid="photo-item">
		<CardMedia
			component="img"
			image={data.url}
			src={data.url}
			height="150"
			alt={sliceString(data.title, 10)}
		/>
		
		<CardContent>
			<Typography variant="body2">
				{data.title}
			</Typography>
		</CardContent>
	</Card>
);

export default PhotoItem;