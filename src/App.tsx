import React, {FC} from 'react';

import Header from './components/layout/header';
import Container from './components/layout/container';
import Router from './components/router';

import './App.scss';

const App: FC = () => (
	<main>
		<Header/>
		
		<Container>
			<Router />
		</Container>
	</main>
);

export default App;
