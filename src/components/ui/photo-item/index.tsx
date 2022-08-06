import {FC, useState} from 'react';

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
const PhotoItem: FC<PhotoItemProps> = ({data, onClick}) => {
	const [elevation, setElevation] = useState(3);
	
	const onMouseOver = () => setElevation(6);
	const onMouseOut = () => setElevation(3);
	
	
	return (
		<Paper
			sx={{height: '100%', cursor: 'pointer'}}
			elevation={elevation}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
		>
			<Card data-testid="photo-item" sx={{
				boxShadow: 'none'
			}}>
				<CardMedia
					component="img"
					// image={data.url}
					// src={data.url}
					image={mockImg}
					src={mockImg}
					height={200}
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
}

export default PhotoItem;