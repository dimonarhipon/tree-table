import { TableRow, TableCell } from '@mui/material';
import { useState, KeyboardEventHandler } from 'react';
import { Row } from './TableBody.types';
import CustomCell from './CustomCell';
import ControlRow from './ControlRow';

type TCustomRow = {
	row?: Row;
	isEditing?: boolean;
};

export default function CustomRow({ row, isEditing = true }: TCustomRow) {
	const [isEdit, setEditToggle] = useState<boolean>(isEditing);

	const keyDownHandler: KeyboardEventHandler<HTMLTableRowElement> = (event) => {
		if (event.key === 'Enter') {
			setEditToggle(false);
		}
	};

	const editRowHandler = () => {
		if (!isEdit) setEditToggle(true);
	};

	return (
		<TableRow onDoubleClick={editRowHandler} onKeyDown={keyDownHandler}>
			<TableCell>
				<ControlRow isEdit={isEdit} />
			</TableCell>
			<CustomCell isEdit={isEdit} cell={row?.rowName || ''} />
			<CustomCell isEdit={isEdit} cell={row?.salary || 0} />
			<CustomCell isEdit={isEdit} cell={row?.equipmentCosts || 0} />
			<CustomCell isEdit={isEdit} cell={row?.overheads || 0} />
			<CustomCell isEdit={isEdit} cell={row?.estimatedProfit || 0} />
		</TableRow>
	);
}
