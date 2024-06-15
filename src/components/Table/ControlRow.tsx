import { useState } from 'react';
import { IconButton, ButtonGroup } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DeleteIcon from '@mui/icons-material/Delete';

type TCellProps = {
	isEdit: boolean;
	onAdd: () => void;
	onRemove: () => void;
};

export default function ControlRow({ onAdd, onRemove, isEdit }: TCellProps) {
	const [isControlRow, setControlRow] = useState<boolean>(false);

	const mouseEnterHandler = () => {
		if (!isEdit) setControlRow(true);
	};
	const mouseLeaveHandler = () => {
		if (!isEdit) setControlRow(false);
	};

	return (
		<ButtonGroup
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			variant="outlined"
			aria-label="Управление строкой"
			disableRipple={true}
			disableFocusRipple={true}
		>
			<IconButton aria-label="Создать" size="small" onClick={onAdd}>
				<TextSnippetIcon color="secondary" fontSize="small" />
			</IconButton>
			{isControlRow && (
				<IconButton aria-label="Удалить" size="small" onClick={onRemove}>
					<DeleteIcon color="error" fontSize="small" />
				</IconButton>
			)}
		</ButtonGroup>
	);
}
