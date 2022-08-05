import React from 'react';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';

import App from './../App';
import usePhotosStore, {initialState} from '../store/usePhotosStore';

describe('Photos fetching', () => {
	beforeEach(() => {
		usePhotosStore.setState(initialState);
	});
	
	test('fetch first 6 photos onmount', async () => {
		await render(<App/>);
		
		
		await waitFor(() => {
			const listItems = screen.getAllByTestId('photo-item');
			const getMoreButton = screen.getByText('Show More');
			
			expect(listItems).toHaveLength(6);
			expect(getMoreButton).toBeInTheDocument();
		});
		
	});
	
	test('fetch next 6 photos on button click', async () => {
		await render(<App/>);
		
		setTimeout(async () => {
			await waitFor(() => {
				const getMoreButton = screen.getByText('Show More');
				
				expect(getMoreButton).toBeInTheDocument();
				
				fireEvent(getMoreButton, new MouseEvent('click', {
					bubbles: true,
					cancelable: true
				}));
				
				const listItems = screen.getAllByTestId('photo-item');
				
				expect(listItems).toHaveLength(12);
				expect(getMoreButton).toBeInTheDocument();
			});
			
		}, 300);
	});
	
	test('search for 2 photos with "reprehenderit est" title', async () => {
		await render(<App/>);
		
		await waitFor(() => {
			const input = screen.getByTestId('input');
			
			expect(input).toBeInTheDocument();
			
			fireEvent.change(input, { target: {value: 'reprehenderit est' } });
			
			setTimeout(() => {
				const listItems = screen.getAllByTestId('photo-item');
				const button = screen.getByText('Show More');
				
				expect(listItems).toHaveLength(2);
				expect(button).not.toBeInTheDocument();
			});
		});
	});
	
	test('search for photo with non-existing title', async () => {
		await render(<App/>);
		
		await waitFor(() => {
			const input = screen.getByTestId('input');
			
			expect(input).toBeInTheDocument();
			
			fireEvent.change(input, { target: {value: 'dsgfhjghdflghkldfgjkldf' } });
			
			setTimeout(() => {
				const photos = screen.getAllByTestId('photo-item');
				const emptyText = screen.getAllByTestId('empty-photos');
				
				expect(photos).toHaveLength(0);
				expect(emptyText).toBeInTheDocument();
			});
		});
	});
});



