import {TransitionStatus} from 'react-transition-group';

export const duration = 300;

export const defaultStyle = {
	transition: `all ${duration}ms ease-in-out`,
	opacity: 0
};

export const transitionStyles = {
	entering: {opacity: 1},
	entered: {opacity: 1},
	exiting: {opacity: 0},
	exited: {opacity: 0}
};

export const getStyles = (state: TransitionStatus) => ({
	...defaultStyle,
	...transitionStyles[state as keyof typeof transitionStyles]
})