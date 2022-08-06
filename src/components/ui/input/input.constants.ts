import {TextFieldProps} from '@mui/material/TextField/TextField';

export const defaultInputProps = {
	variant: 'standard' as TextFieldProps['variant'],
	label: 'Search by title',
	inputProps: {
		'data-testid': 'input'
	}
}