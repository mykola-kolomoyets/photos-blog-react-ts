import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {CircularProgress} from '@mui/material';

const PhotosListView = lazy(() => import('../../views/photos-list'));
const PhotoDetailsView = lazy(() => import('../../views/photo-details'));

const Router: FC = () => (
	<Suspense fallback={<CircularProgress />}>
		<Routes>
			<Route path='/' element={<PhotosListView />}/>
			<Route path='/:id' element={<PhotoDetailsView />}/>
		</Routes>
	</Suspense>
);

export default Router;