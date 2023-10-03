import { Box } from '@mui/material';
import {
	StyledBox,
	StyledAccordion,
	StyledAccordionSummary,
	StyledAccordionDetails,
	StyledTypography,
} from './styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navigation from '../Navigation';

export default function Aside() {
	return (
		<StyledBox component="aside">
			<StyledAccordion defaultExpanded>
				<StyledAccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<StyledTypography variant="h2">
						<Box>Название проекта</Box> <small>Аббревиатура</small>
					</StyledTypography>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<Navigation />
				</StyledAccordionDetails>
			</StyledAccordion>
		</StyledBox>
	);
}
