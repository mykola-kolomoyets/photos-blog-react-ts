import {FC, ReactNode} from 'react';
import {Photo} from '../../../utils/types/photos';
import {Grid} from '@mui/material';
import PhotoItem from '../../ui/photo-item';

type GridProps<P> = {
	items: P[];
	renderItem: (item: P) => JSX.Element;
	keyExtractor: (item: P) => string;
}
const GridComponent = <P, >({items, renderItem, keyExtractor}: GridProps<P>) => (
	<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 2, md: 3}} alignItems="stretch">
		{items.map((item) => (
			<Grid item key={keyExtractor(item)} md={1} sm={1} xs={1}>
				{renderItem(item)}
			</Grid>
		))}
	</Grid>
);
export default GridComponent;