import {useNavigate} from 'react-router-dom';
import {IconButton, Typography, AppBar, Toolbar} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {grey} from '@mui/material/colors';

import {photoDetailsViewRegex} from '../../../utils/regex';

import styles from './header.module.scss';

const Header = () => {
	const navigate = useNavigate();
	
	const isOnPhotoDetailsView = photoDetailsViewRegex.test(window.location.href);
	
	const onBackToPhotosListClick = () => navigate('/');
	
	return (
		<AppBar position="sticky" sx={{ backgroundColor: grey['800'] }}>
			<Toolbar>
				{isOnPhotoDetailsView && (
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={onBackToPhotosListClick}
					>
						<ArrowBackIcon />
					</IconButton>
				)}
				
				<Typography className={styles.navbar} align="center" variant="h5">
					PhotosBlog
				</Typography>
			
			</Toolbar>
		</AppBar>
	);
}

export default Header;