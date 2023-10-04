import Tables from '../Table/Table';
import { Typography, Toolbar } from '@mui/material';
import { StyledBox } from './styled';

export default function Dashboard() {
	return (
		<StyledBox flexGrow={1} component="main">
			<Toolbar>
				<Typography component="h2" variant="h6">
					Строительно-монтажные работы
				</Typography>
			</Toolbar>
			<Tables />
		</StyledBox>
	);
}
