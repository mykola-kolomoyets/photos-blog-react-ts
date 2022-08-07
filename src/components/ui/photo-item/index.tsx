import {FC, useState, MouseEvent} from 'react';
import {Paper, Typography, Card, CardMedia, CardContent, Tooltip} from '@mui/material';

import {Photo} from '@types';

import {sliceString} from '@functions';

/**
 * ! Images URLs from jsonPlaceholder don`t load
 * ! correctly, so I added mock image to display it.
 */
import {mockImage} from '@assets/images';

type PhotoItemProps = {
	data: Photo;
	onClick: () => void;
	onTitleCopy: () => void;
}
const PhotoItem: FC<PhotoItemProps> = ({data, onClick, onTitleCopy}) => {
	const [elevation, setElevation] = useState(3);
	
	const onMouseOver = () => setElevation(6);
	const onMouseOut = () => setElevation(3);
	
	const onPhotoTitleCopyClick = (event: MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		
		onTitleCopy();
	}
	
	return (
		<Paper
			sx={{height: '100%', cursor: 'pointer'}}
			elevation={elevation}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onClick={onClick}
		>
			<Card data-testid="photo-item" sx={{
				boxShadow: 'none'
			}}>
				<CardMedia
					component="img"
					// image={data.url}
					// src={data.url}
					image={mockImage}
					src={mockImage}
					height={200}
					alt={sliceString(data.title, 10)}
				/>
				
				<CardContent>
					<Tooltip title="Click to copy" placement="top-start">
						<Typography variant="body2" onClick={onPhotoTitleCopyClick}>
							{data.title}
						</Typography>
					</Tooltip>
				</CardContent>
			</Card>
		
		
		</Paper>
	);
}

export {PhotoItem};