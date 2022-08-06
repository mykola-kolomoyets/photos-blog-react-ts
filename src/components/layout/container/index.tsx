import {FC} from 'react';
import {Container} from '@mui/material';

import {WithChildren} from '../../../utils/types/layout';

import styles from './container.module.scss';

const ContainerComponent: FC<WithChildren> = ({ children }) => (
	<Container className={styles.container}>
		{children}
	</Container>
);

export default ContainerComponent;