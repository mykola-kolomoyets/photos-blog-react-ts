import React, {FC} from 'react';

import useWindowSize from './utils/hooks/useWidowSize';

import ScrollToTop from './components/ui/scroll-to-top';
import Header from './components/layout/header';
import Container from './components/layout/container';
import Router from './components/router';

import styles from './App.module.scss';

const App: FC = () => {
	const {height} = useWindowSize();
	
	return (
		<main className={styles.app}>
			<Header/>
			
			<Container>
				<Router/>
			</Container>
			
			<ScrollToTop breakpoint={height!}/>
		</main>
	);
}

export default App;
