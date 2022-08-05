import {ChangeEvent, FC, useEffect, useState, useTransition} from 'react';
import {TextField} from '@mui/material';

import usePhotosStore from '../../../store/usePhotosStore';

import useDebounce from '../../../utils/hooks/useDebounce';
import {limitStep} from '../../layout/photos-list/photos-list.constants';

const Input: FC = () => {
	const { setLimit, setSearchValue } = usePhotosStore();
	
	const [isPending, startTransition] = useTransition();
	
	const [inputValue, setInputValue] = useState('');
	
	const searchValue = useDebounce(inputValue);
	
	const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		
		setInputValue(value);
		
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
			label="Search by title"
			size="small"
			variant="outlined"
			value={inputValue}
			onChange={onSearchValueChange}
			inputProps={{
			'data-testid': 'input'
		}}
		/>
	)
};

export default Input;