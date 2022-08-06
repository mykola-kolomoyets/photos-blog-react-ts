import {FC, useEffect, useState} from 'react';
import {IconButton} from '@mui/material';
import {ExpandLess} from '@mui/icons-material';
import {Transition} from 'react-transition-group';

import {duration, getStyles} from './scroll-to-top.constants';

import styles from './scroll-to-top.module.scss';

type ScrollToTopProps = {
	breakpoint: number;
}
const ScrollToTop: FC<ScrollToTopProps> = ({breakpoint}) => {
	const [isShown, setIsShown] = useState(false);
	
	const onScroll = () => setIsShown(window.scrollY > breakpoint * 1.5);
	
	const onClick = () => window.scrollTo({top: 0, behavior: 'smooth'});
	
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	
	return (
		<div className={styles.scrollToTop}>
			<Transition in={isShown} timeout={duration}>
				{state => (
					<IconButton style={getStyles(state)} onClick={onClick}>
						<ExpandLess/>
					</IconButton>
				)}
			</Transition>
		</div>
	);
};

export default ScrollToTop;