import {Alert, Slide, Snackbar as SnackBarComponent} from '@mui/material';
import {FC} from 'react';

type SnackbarProps = {
	show: boolean;
	onClose: () => void;
	text: string;
	type: 'success' | 'info' | 'warning' | 'error'
};

const Snackbar: FC<SnackbarProps> = ({show, onClose, text, type}) => (
	<SnackBarComponent
		open={show}
		autoHideDuration={3000}
		onClose={onClose}
		TransitionComponent={(props) => (
			<Slide {...props} direction="up"/>
		)}
	>
		<Alert onClose={onClose} severity={type} sx={{width: '100%'}}>
			{text}
		</Alert>
	</SnackBarComponent>
);
export {Snackbar};