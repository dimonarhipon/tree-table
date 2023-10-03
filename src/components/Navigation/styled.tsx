import { List as MuiList, ListItemButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItemButton = styled(ListItemButton)(() => ({
	padding: '4px 20px',

	'&.Mui-selected': {
		background: 'rgba(161, 161, 170, 1)',
		'&:hover': {
			background: 'rgba(161, 161, 170, 1)',
		},
	},
}));

export const StyledListItem = styled(ListItem)(() => ({
	padding: 0,
}));

export const StyledList = styled(MuiList)(() => ({
	padding: 0,
}));

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
	minWidth: 34,
}));

export const StyledListItemText = styled(ListItemText)(() => ({
	fontFamily: 'Roboto',
	letterSpacing: 0,
	fontSize: '14px',
}));
