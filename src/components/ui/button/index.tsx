import {FC, MouseEvent} from 'react';
import {centerButtonStyles} from '../../layout/photos-list/photos-list.constants';
import {Button} from '@mui/material';

type ButtonProps = {
	title: string;
	onClick: () => void;
}
const ButtonComponent: FC<ButtonProps> = ({ title, onClick }) => {
	const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		
		onClick();
	}
	
	return (
		<Button
			data-testid='show-more'
			style={centerButtonStyles}
			variant="contained"
			onClick={onButtonClick}
		>
			{title}
		</Button>
	);
}

export default ButtonComponent;