import {Fragment} from 'react';
import {Box, CircularProgress, Grid} from '@mui/material';

import {
	loadingBoxSX,
	gridContainerLayout,
	gridItemLayout
} from './grid.constants';

type GridProps<P> = {
	items: P[];
	renderItem: (item: P) => JSX.Element;
	keyExtractor: (item: P) => string;
	isFetching: boolean;
}
const GridComponent = <P, >({items, renderItem, keyExtractor, isFetching}: GridProps<P>) => (
	<Fragment>
		<Grid container {...gridContainerLayout}>
			{items.map((item) => (
				<Grid item key={keyExtractor(item)} {...gridItemLayout}>
					{renderItem(item)}
				</Grid>
			))}
		</Grid>
		
		{isFetching && (
			<Box sx={loadingBoxSX}>
				<CircularProgress/>
			</Box>
		)}
	</Fragment>
);
export {GridComponent};