import { AppBar, Typography, IconButton, Box, Toolbar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import { StyledTab, StyledTabs } from './styled';

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Box display="flex" gap="4px">
					<IconButton color="inherit" aria-label="На главную">
						<AppsIcon />
					</IconButton>
					<IconButton color="inherit" aria-label="Назад">
						<ReplyIcon />
					</IconButton>
				</Box>

				<StyledTabs aria-label="control app" value="view">
					<StyledTab value="view" label="Просмотр" />
					<StyledTab value="control" label="Управление" />
				</StyledTabs>
				<Typography component="h1" variant="h6" color="inherit" noWrap hidden>
					Table Tree
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
