import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import usePhotosStore, {initialState} from '../store/usePhotosStore';

import App from './../App';

describe('Photos fetching', () => {
	beforeEach(() => {
		usePhotosStore.setState(initialState);
	});
	
	test('fetch first 6 photos onmount', async () => {
		await render((
			<MemoryRouter initialEntries={['/']}>
				<App/>
			</MemoryRouter>
		));
		
		setTimeout(() => {
			const listItems = screen.getAllByTestId('photo-item');
			const getMoreButton = screen.getByText('Show More');
			
			expect(listItems).toHaveLength(6);
			expect(getMoreButton).toBeInTheDocument();
		}, 0);
	});
	
	test('fetch next 6 photos on button click', async () => {
		await render((
			<MemoryRouter initialEntries={['/']}>
				<App/>
			</MemoryRouter>
		));
		
		setTimeout(async () => {
			await waitFor(() => {
				const getMoreButton = screen.getByText('Show More');
				
				expect(getMoreButton).toBeInTheDocument();
				
				userEvent.click(getMoreButton)
				
				setTimeout(() => {
					const listItems = screen.getAllByTestId('photo-item');
					
					expect(listItems).toHaveLength(12);
					expect(getMoreButton).toBeInTheDocument();
				}, 0);
			});
		}, 0);
	});
});



