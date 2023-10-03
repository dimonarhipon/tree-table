import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@mui/material';

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
