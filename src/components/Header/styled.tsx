import { styled } from '@mui/material/styles';
import { Toolbar, Tabs, Tab } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(() => ({
	flexWrap: 'wrap',
	'@media all': {
		minHeight: 44,
		paddingLeft: 12,
		paddingRight: 12,
	},
}));

export const StyledTab = styled(Tab)(() => ({
	textTransform: 'none',
	minHeight: 'auto',
	minWidth: 'auto',
	padding: '13px 3px',
	marginLeft: 20,
}));

export const StyledTabs = styled(Tabs)(() => ({
	minHeight: 'auto',
}));
