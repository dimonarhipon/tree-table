import {
	Table,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import TableBody from './TableBody';
import { styled } from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)(() => ({
	paddingTop: 4,
	paddingBottom: 9,
	borderTop: 'none',
}));

export const StyledTableCell = styled(TableCell)(() => ({
	color: 'inherit',
}));

export default function Tables() {
	return (
		<Table size="small">
			<TableHead>
				<StyledTableRow>
					<StyledTableCell align="left">Уровень</StyledTableCell>
					<StyledTableCell align="left">Наименование работ</StyledTableCell>
					<StyledTableCell>Основная з/п</StyledTableCell>
					<StyledTableCell>Оборудование</StyledTableCell>
					<StyledTableCell>Накладные расходы</StyledTableCell>
					<StyledTableCell>Сметная прибыль</StyledTableCell>
				</StyledTableRow>
			</TableHead>
			<TableBody />
		</Table>
	);
}
