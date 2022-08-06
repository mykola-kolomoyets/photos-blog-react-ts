import {ChangeEvent, FC, useEffect, useMemo, useState, useTransition} from 'react';
import {useMediaQuery, TextField, InputAdornment} from '@mui/material';
import {TextFieldProps} from '@mui/material/TextField/TextField';
import {Search} from '@mui/icons-material';

import usePhotosStore from '../../../store/usePhotosStore';

import useDebounce from '../../../utils/hooks/useDebounce';
import {limitStep} from '../../layout/photos-list/photos-list.constants';

import {defaultInputProps} from './input.constants';

const Input: FC = () => {
	const {setLimit, setSearchValue} = usePhotosStore();
	
	const [_, startTransition] = useTransition();
	
	const [inputValue, setInputValue] = useState('');
	
	const searchValue = useDebounce(inputValue);
	
	const isTextFieldFullWidth = useMediaQuery('(max-width:900px)');
	
	const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		
		startTransition(() => {
			setInputValue(value);
		});
	}
	
	const textInputProps = useMemo<TextFieldProps>(() => ({
		...defaultInputProps,
		fullWidth: isTextFieldFullWidth,
		size: isTextFieldFullWidth ? 'medium' : 'small',
		value: inputValue,
		onChange: onSearchValueChange
	}),  [isTextFieldFullWidth, inputValue]);
	
	useEffect(() => {
		setSearchValue(searchValue);
	}, [searchValue]);
	
	useEffect(() => {
		setLimit(limitStep);
	}, [searchValue]);
	
	return (
		<TextField
			{...textInputProps}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<Search/>
					</InputAdornment>
				)
			}}
		/>
	)
};

export default Input;