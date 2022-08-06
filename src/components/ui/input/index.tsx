import {ChangeEvent, FC, useEffect, useState, useTransition} from 'react';
import {useMediaQuery, TextField, InputAdornment} from '@mui/material';

import usePhotosStore from '../../../store/usePhotosStore';

import useDebounce from '../../../utils/hooks/useDebounce';
import {limitStep} from '../../layout/photos-list/photos-list.constants';
import {Search} from '@mui/icons-material';

const Input: FC = () => {
	const {setLimit, setSearchValue} = usePhotosStore();
	
	const [isPending, startTransition] = useTransition();
	
	const [inputValue, setInputValue] = useState('');
	
	const searchValue = useDebounce(inputValue);
	
	const isTextFieldFullWidth = useMediaQuery('(max-width:900px)');
	
	const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		
		startTransition(() => {
			setInputValue(value);
		});
	}
	
	useEffect(() => {
		setSearchValue(searchValue);
	}, [searchValue]);
	
	useEffect(() => {
		setLimit(limitStep);
	}, [searchValue]);
	
	return (
		<TextField
			fullWidth={isTextFieldFullWidth}
			label="Search by title"
			size={isTextFieldFullWidth ? 'medium' : 'small'}
			variant="standard"
			value={inputValue}
			onChange={onSearchValueChange}
			inputProps={{
				'data-testid': 'input'
			}}
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