import React from 'react';

import {Typography} from '@mui/material';

import Header from './components/layout/header';
import Container from './components/layout/container';

import './App.scss';

function App() {
	return (
		<main>
			<Header />
			
			<Container>
				<Typography align="center"  variant="h5">
					Photos
				</Typography>
			</Container>
		</main>
	);
}

export default App;
