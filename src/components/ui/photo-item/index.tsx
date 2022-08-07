import {FC, useState, MouseEvent} from 'react';
import {Paper, Typography, Card, CardMedia, CardContent, Tooltip, Snackbar} from '@mui/material';

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
}
const PhotoItem: FC<PhotoItemProps> = ({data, onClick}) => {
	const [isNameCopied, setIsNameCopied] = useState(false);
	const [elevation, setElevation] = useState(3);
	
	const onMouseOver = () => setElevation(6);
	const onMouseOut = () => setElevation(3);
	
	const onNameCopy = async (event: MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		
		await navigator.clipboard.writeText(data.title);
		
		setIsNameCopied(true);
	}
	
	const onSnackbarClose = () => setIsNameCopied(false);
	
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
						<Typography variant="body2" onClick={onNameCopy}>
							{data.title}
						</Typography>
					</Tooltip>
				</CardContent>
			</Card>
			
			<Snackbar
				open={isNameCopied}
				autoHideDuration={3000}
				onClose={onSnackbarClose}
				message="Name copied"
			/>
		</Paper>
	);
}

export {PhotoItem};