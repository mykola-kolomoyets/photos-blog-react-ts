import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './../App';
import usePhotosStore, {initialState} from '../store/usePhotosStore';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

describe('Photos fetching', () => {
	beforeEach(() => {
		usePhotosStore.setState(initialState);
	});
	
	test('search for 2 photos with "reprehenderit est" title', async () => {
		await render((
			<MemoryRouter initialEntries={['/']}>
				<App/>
			</MemoryRouter>
		));
		
		setTimeout(() => {
			
			const input = screen.getByTestId('input');
			
			expect(input).toBeInTheDocument();
			
			userEvent.click(input);
			userEvent.keyboard('reprehenderit est');
			
			// fireEvent.change(input, { target: {value: 'reprehenderit est' } });
			
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
			<MemoryRouter initialEntries={['/']}>
				<App/>
			</MemoryRouter>
		));

		await waitFor(() => {
			const input = screen.getByTestId('input');

			expect(input).toBeInTheDocument();

			userEvent.click(input);
			userEvent.keyboard('henderit d');

			// fireEvent.change(input, { target: {value: 'henderit d' } });

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
			<MemoryRouter initialEntries={['/']}>
				<App/>
			</MemoryRouter>
		));

		await waitFor(() => {
			const input = screen.getByTestId('input');

			expect(input).toBeInTheDocument();

			userEvent.click(input);
			userEvent.keyboard('dsgfhjghdflghkldfgjkldf');

			// fireEvent.change(input, { target: {value: 'dsgfhjghdflghkldfgjkldf' } });

			setTimeout(() => {
				const photos = screen.getAllByTestId('photo-item');
				const emptyText = screen.getAllByTestId('empty-photos');

				expect(photos).toHaveLength(0);
				expect(emptyText).toBeInTheDocument();
			});
		});
	});
});



