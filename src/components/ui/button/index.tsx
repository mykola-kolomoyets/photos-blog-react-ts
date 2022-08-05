import {FC} from 'react';
import {centerButtonStyles} from '../../layout/photos-list/photos-list.constants';
import {Button} from '@mui/material';

type ButtonProps = {
	title: string;
	onClick: () => void;
}
const ButtonComponent: FC<ButtonProps> = ({ title, onClick }) => (
	<Button
		data-testid='show-more'
		style={centerButtonStyles}
		variant="contained"
		onClick={onClick}
	>
		{title}
	</Button>
);

export default ButtonComponent;