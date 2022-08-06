import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import usePhotosStore, {initialState} from '../store/usePhotosStore';

import App from './../App';

describe('Photo details', () => {
	beforeEach(() => {
		usePhotosStore.setState(initialState);
	});
	
	test('open photo with id 1', async () => {
		await render((
			<MemoryRouter initialEntries={['/']}>
				<App/>
			</MemoryRouter>
		));
		
		
		setTimeout(() => {
			const listItems = screen.getAllByTestId('photo-item');
			
			expect(listItems).toHaveLength(6);
			
			userEvent.click(listItems[0]);
			
			setTimeout(() => {
				expect(window.location.href).toEqual('/1');
				
				const photoDetailsCard = screen.getByTestId('photo-details');
				
				expect(photoDetailsCard).toBeInTheDocument();
			});
		});
		
	});
});



