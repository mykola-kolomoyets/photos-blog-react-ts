import {useEffect, useState} from 'react';

import {Size} from '@types';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<Size>({
		width: 0,
		height: 0
	});
	
	useEffect(() => {
		const onResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		
		window.addEventListener('resize', onResize);
		
		onResize();
		
		return () => window.removeEventListener('resize', onResize);
	}, []);
	
	return windowSize;
};

export {useWindowSize};