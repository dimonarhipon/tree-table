
import Tables from '../Table/Table';
import { styled } from '@mui/material/styles';
import {
	Typography,
	Box,
	Toolbar,
} from '@mui/material';

const StyledBox = styled(Box)(() => ({
	height: '100%',
	backgroundColor: 'rgba(32, 33, 36, 1)',
	color: 'rgba(161, 161, 170, 1)',
}));

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
