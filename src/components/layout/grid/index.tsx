import {Fragment} from 'react';
import {Box, CircularProgress, Grid} from '@mui/material';

type GridProps<P> = {
	items: P[];
	renderItem: (item: P) => JSX.Element;
	keyExtractor: (item: P) => string;
	isFetching: boolean;
}
const GridComponent = <P, >({items, renderItem, keyExtractor, isFetching}: GridProps<P>) => (
	<Fragment>
		<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 2, md: 3}} alignItems="stretch">
			{items.map((item) => (
				<Grid item key={keyExtractor(item)} md={1} sm={1} xs={1}>
					{renderItem(item)}
				</Grid>
			))}
		</Grid>
		
		{isFetching && (
			<Box sx={{display: 'flex', justifyContent: 'center', padding: '16px'}}>
				<CircularProgress/>
			</Box>
		)}
	</Fragment>
);
export default GridComponent;