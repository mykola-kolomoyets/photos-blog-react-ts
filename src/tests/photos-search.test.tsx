import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import {initialState, usePhotosStore} from '@store/usePhotosStore';

import App from './../App';

describe('Photos searching', () => {
	beforeEach(() => {
		usePhotosStore.setState(initialState);
	});
	
	test('search for 2 photos with "reprehenderit est" title', async () => {
		await render((
			<MemoryRouter initialEntries={['/photos-blog-react-ts']}>
				<App/>
			</MemoryRouter>
		));
		
		setTimeout(() => {
			
			const input = screen.getByTestId('input');
			
			expect(input).toBeInTheDocument();
			
			userEvent.click(input);
			userEvent.keyboard('reprehenderit est');
			
			setTimeout(() => {
				const listItems = screen.getAllByTestId('photo-item');
				const button = screen.getByText('Show More');
				
				expect(listItems).toHaveLength(2);
				expect(button).not.toBeInTheDocument();
			});
		});
	});
	
	test('search for photos with more then 6 results', async () => {
		await render((
			<MemoryRouter initialEntries={['/photos-blog-react-ts']}>
				<App/>
			</MemoryRouter>
		));
		
		await waitFor(() => {
			const input = screen.getByTestId('input');
			
			expect(input).toBeInTheDocument();
			
			userEvent.click(input);
			userEvent.keyboard('henderit d');
			
			setTimeout(() => {
				const listItems = screen.getAllByTestId('photo-item');
				const button = screen.getByText('Show More');
				
				expect(listItems).toHaveLength(6);
				expect(button).not.toBeInTheDocument();
			});
		});
	});
	
	test('search for photo with non-existing title', async () => {
		await render((
			<MemoryRouter initialEntries={['/photos-blog-react-ts']}>
				<App/>
			</MemoryRouter>
		));
		
		await waitFor(() => {
			const input = screen.getByTestId('input');
			
			expect(input).toBeInTheDocument();
			
			userEvent.click(input);
			userEvent.keyboard('dsgfhjghdflghkldfgjkldf');
			
			setTimeout(() => {
				const photos = screen.getAllByTestId('photo-item');
				const emptyText = screen.getAllByTestId('empty-photos');
				
				expect(photos).toHaveLength(0);
				expect(emptyText).toBeInTheDocument();
			});
		});
	});
});



