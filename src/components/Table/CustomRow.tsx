import { API_URL } from '../../constants/constants';
import { v4 as uuidv4 } from 'uuid';
import { TableRow, TableCell } from '@mui/material';
import { useState, KeyboardEventHandler } from 'react';
import { Row, TreeResponse, IError } from './TableBody.types';
import CustomCell from './CustomCell';
import ControlRow from './ControlRow';

type TCustomRow = {
	id: number;
	row?: TreeResponse; // TreeResponse
	isEditing?: boolean;
	onAdd: (id: number) => void;
	isChild?: boolean;
};

export default function CustomRow({ isChild, onAdd, id, row, isEditing = true }: TCustomRow) {
	const [isEdit, setEditToggle] = useState<boolean>(isEditing);
	const [error, setError] = useState<IError | string | null>(null); // ?

	const keyDownHandler: KeyboardEventHandler<HTMLTableRowElement> = (event) => {
		if (event.key === 'Enter') {
			setEditToggle(false);
		}
	};

	const editRowHandler = () => {
		if (!isEdit) setEditToggle(true);
	};


	const deleteRowHandler = () => {
		console.log('delete', id)
	}

	if (error) {
		alert('Пришла ошибка в CustomRow, которую не ждали')
	}

	console.log(row?.child.length)

	return (
		<>
			<TableRow onDoubleClick={editRowHandler} onKeyDown={keyDownHandler}>
				{isChild && 'Я ребёнок! 👶'}
				<TableCell>
					<ControlRow isEdit={isEdit} onAdd={() => onAdd(id)} onRemove={deleteRowHandler} />
				</TableCell>
				<CustomCell isEdit={isEdit} cell={row?.rowName || ''} />
				<CustomCell isEdit={isEdit} cell={row?.salary || 0} />
				<CustomCell isEdit={isEdit} cell={row?.equipmentCosts || 0} />
				<CustomCell isEdit={isEdit} cell={row?.overheads || 0} />
				<CustomCell isEdit={isEdit} cell={row?.estimatedProfit || 0} />
			</TableRow>

			{row?.child && row.child.map((childRow) => (
				<CustomRow
					key={childRow.id}
					id={childRow.id}
					row={childRow}
					isEditing={false}
					onAdd={onAdd}
					isChild
				/>
			))}
		</>
	);
}
