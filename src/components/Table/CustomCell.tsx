import {
	TableCell,
	InputBase,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)(() => ({
	padding: '6px 0',
}));

type TCellProps = {
	cell?: string | number,
	isEdit: boolean,
};

export default function CustomCell(props: TCellProps) {
	const { isEdit = true, cell } = props;
	return (
		<TableCell>
			{!isEdit ? (
				<StyledTypography variant="body1">{cell}</StyledTypography>
			) : (
				<InputBase size="small" fullWidth value={cell} title="Нажмите Enter для Отправки" />
			)}
		</TableCell>
	);
}
