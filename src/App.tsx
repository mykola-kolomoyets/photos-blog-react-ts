import React, {FC} from 'react';

import {useWindowSize} from '@hooks';

import {ScrollToTop} from '@ui';
import {Header, ContainerComponent as Container} from '@layout';
import Router from '@router';

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
