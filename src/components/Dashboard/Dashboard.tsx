import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tables from '../Table/Table';

export default function Dashboard() {
	return (
		<Box
			flexGrow={1}
			component="main"
		>
			<Box flexGrow={1}>
				<Paper>
					<Tables />
				</Paper>
			</Box>
		</Box>
	);
}
