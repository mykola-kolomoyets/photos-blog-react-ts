import {FC} from 'react';

import {AppBar, Typography} from '@mui/material';

import styles from './navbar.module.scss';

const Navbar: FC = () => (
	<AppBar position="sticky">
		<Typography className={styles.navbar} align="center" variant="h4">
			PhotosBlog
		</Typography>
	</AppBar>
);

export default Navbar;