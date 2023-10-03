import {
	Accordion as AccordionMui,
	AccordionSummary as AccordionSummaryMui,
	AccordionDetails as AccordionDetailsMui,
	Box,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const MAX_WIDTH_ASIDE: number = 240;

export const StyledAccordion = styled(AccordionMui)(() => ({
	maxWidth: MAX_WIDTH_ASIDE,
	height: '100%',
	width: '100%',
	'&:last-of-type': {
		borderRadius: 0,
	},
	'&:first-of-type': {
		borderRadius: 0,
	},
}));

export const StyledAccordionSummary = styled(AccordionSummaryMui)(() => ({
	minHeight: 44,
	margin: 0,
	padding: '0 10px 0 20px',
	borderBottom: '1px solid rgba(65, 65, 68, 1)',

	'&.Mui-expanded': {
		minHeight: 44,
	},
	'.MuiAccordionSummary-content': {
		margin: 0,
	},
	'.MuiAccordionSummary-expandIconWrapper': {
		color: 'rgba(255, 255, 255, 1)',
	},
}));

export const StyledAccordionDetails = styled(AccordionDetailsMui)(() => ({
	padding: 0,
}));

export const StyledBox = styled(Box)(() => ({
	height: '100%',
	borderRight: '1px solid rgba(65, 65, 68, 1)',
}));

export const StyledTypography = styled(Typography)(() => ({
	fontFamily: 'Roboto',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 0.7,
	letterSpacing: 0
}));
