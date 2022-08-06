import {FC} from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import {Photo} from '../../../utils/types/photos';
import {sliceString} from '../../../utils/functions';
import {Paper, Typography} from '@mui/material';

/**
 * Images URLs from jsonPlaceholder don`t load
 * correctly, so I added mock image to display it.
 */
import {mockImg} from './photo-item.constants';

type PhotoItemProps = {
	data: Photo;
	onClick: () => void;
}
const PhotoItem: FC<PhotoItemProps> = ({data, onClick}) => (
	<Paper sx={{height: '100%'}} elevation={4} onClick={onClick}>
		<Card data-testid="photo-item" sx={{
			boxShadow: 'none'
		}}>
			<CardMedia
				component="img"
				// image={data.url}
				// src={data.url}
				image={mockImg}
				src={mockImg}
				height="150"
				alt={sliceString(data.title, 10)}
			/>
			
			<CardContent>
				<Typography variant="body2">
					{data.title}
				</Typography>
			</CardContent>
		</Card>
	
	</Paper>
);

export default PhotoItem;