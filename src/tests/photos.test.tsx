import React from 'react';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';

import App from './../App';
import usePhotosStore, {initialState} from '../store/usePhotosStore';

describe('Photos fetching', () => {
	beforeEach(() => {
		usePhotosStore.setState(initialState);
	});
	
	test('fetch first 6 photos onmount', async () => {
		render(<App/>);
		
		await waitFor(() => {
			const listItems = screen.getAllByTestId('photo-item');
			const getMoreButton = screen.getByText('Show more');
			
			expect(listItems).toHaveLength(6);
			expect(getMoreButton).toBeInTheDocument();
		});
		
	});
	
	test('fetch next 6 photos on button click', async () => {
		render(<App/>);
		
		await waitFor(() => {
			const getMoreButton = screen.getByText('Show more');
			
			expect(getMoreButton).toBeInTheDocument();
			
			fireEvent(getMoreButton, new MouseEvent('click', {
				bubbles: true,
				cancelable: true
			}));
			
			const listItems = screen.getAllByTestId('photo-item');
			
			expect(listItems).toHaveLength(12);
			expect(getMoreButton).toBeInTheDocument();
		});
	})
});



