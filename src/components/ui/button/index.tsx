import {FC, MouseEvent} from 'react';
import {Button} from '@mui/material';

import {centerButtonStyles} from '@layout/photos-list/photos-list.constants';

type ButtonProps = {
	title: string;
	onClick: () => void;
}
const ButtonComponent: FC<ButtonProps> = ({title, onClick}) => {
	const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		
		onClick();
	}
	
	return (
		<Button
			variant="contained"
			style={centerButtonStyles}
			onClick={onButtonClick}
			data-testid="show-more"
		>
			{title}
		</Button>
	);
}

export {ButtonComponent};