import {
	Accordion as AccordionMui,
	AccordionSummary as AccordionSummaryMui,
	AccordionDetails as AccordionDetailsMui,
	Box,
	ListItemIcon,
	List as MuiList,
	ListItemText,
	ListItem as ListItemMui,
	Drawer as MuiDrawer,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			position: 'relative',
			whiteSpace: 'nowrap',
			minWidth: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
);

const Accordion = styled(AccordionMui)(() => ({
	maxWidth: drawerWidth,
	width: '100%',
}));

const AccordionSummary = styled(AccordionSummaryMui)(() => ({
	padding: 0,
}));

const AccordionDetails = styled(AccordionDetailsMui)(() => ({
	padding: 0,
}));

const ListItem = styled(ListItemMui)(() => ({
	padding: '0 20px',
}));

const List = styled(MuiList)(() => ({
	padding: 0,
}));

const data = [
	'По проекту',
	'Объекты',
	'РД',
	'МТО',
	'СМР',
	'График',
	'Мим',
	'Рабочие',
	'Капвложения',
	'Бюджет',
	'Финансирование',
	'Панорамы',
	'Камеры',
	'Поручения',
	'Контрагенты',
];

export default function Aside() {
	return (
		<aside>
			<Accordion defaultExpanded>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Box display={'flex'} flexDirection={'column'}>
						<h6>Название проекта</h6>
						<small>Аббревиатура</small>
					</Box>
				</AccordionSummary>
				<AccordionDetails>
					<Drawer variant="permanent">
						<List>
							{data?.map((item) => {
								return (
									<ListItem>
										<ListItemIcon>
											<DashboardIcon />
										</ListItemIcon>
										<ListItemText>{item}</ListItemText>
									</ListItem>
								);
							})}
						</List>
					</Drawer>
				</AccordionDetails>
			</Accordion>
		</aside>
	);
}
