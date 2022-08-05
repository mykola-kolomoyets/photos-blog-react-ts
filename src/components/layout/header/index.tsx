import Toolbar from '@mui/material/Toolbar';
import {Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';

import styles from './header.module.scss';

const Header = () => (
	<AppBar position="sticky">
		<Toolbar>
			<Typography className={styles.navbar} align="center" variant="h4">
				PhotosBlog
			</Typography>
		
		</Toolbar>
	</AppBar>
);

export default Header;