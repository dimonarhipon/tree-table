import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header';
import Aside from '../Aside/Aside';
import Grid from '@mui/material/Grid';

export default function Layout() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Aside />
			<Dashboard />
		</Grid>
	);
}
