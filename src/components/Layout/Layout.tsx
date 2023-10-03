import Dashboard from '../Dashboard';
import Header from '../Header';
import Aside from '../Aside';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)(() => ({
	display: 'grid',
	gridTemplateColumns: '240px 1fr',
	gridTemplateRows: 'minmax(44px, auto) 1fr',
	height: '100dvh',
}));

export default function Layout() {
	return (
		<StyledGrid
			container
			columns={12}
			gridTemplateAreas={`
				"header header"
				"aside content"
			`}
		>
			<Grid item xs={12} gridArea="header">
				<Header />
			</Grid>

			<Grid item gridArea="aside">
				<Aside />
			</Grid>

			<Grid item gridArea="content">
				<Dashboard />
			</Grid>
		</StyledGrid>
	);
}
