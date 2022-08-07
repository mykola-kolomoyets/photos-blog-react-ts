import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Typography, AppBar, Toolbar} from '@mui/material';
import {grey} from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {photoDetailsViewRegex} from '@regex';

import styles from './header.module.scss';

const Header: FC = () => {
	const navigate = useNavigate();
	
	const isOnPhotoDetailsView = photoDetailsViewRegex.test(window.location.href);
	
	const onBackToPhotosListClick = () => navigate('/photos-blog-react-ts');
	
	return (
		<AppBar position="sticky" sx={{backgroundColor: grey['800']}}>
			<Toolbar>
				{isOnPhotoDetailsView && (
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={onBackToPhotosListClick}
					>
						<ArrowBackIcon/>
					</IconButton>
				)}
				
				<Typography className={styles.header} variant="h5" align="center">
					PhotosBlog
				</Typography>
			
			</Toolbar>
		</AppBar>
	);
}

export {Header};