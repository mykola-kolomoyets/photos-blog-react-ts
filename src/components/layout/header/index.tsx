import Toolbar from '@mui/material/Toolbar';
import {Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';

import styles from './header.module.scss';
import {grey} from '@mui/material/colors';

const Header = () => (
	<AppBar position="sticky" sx={{ backgroundColor: grey['800'] }}>
		<Toolbar>
			<Typography className={styles.navbar} align="center" variant="h4">
				PhotosBlog
			</Typography>
		
		</Toolbar>
	</AppBar>
);

export default Header;