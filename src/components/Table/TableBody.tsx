import { TableBody as MuiTableBody, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { RowParent } from './TableBody.types';
import CustomRow from './CustomRow';

const StyledTableBody = styled(MuiTableBody)(() => ({
	padding: 0,
}));

const eID = 63697;
const API_URL = `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row`;

export default function TableBody() {
	const [loading, setLoading] = useState<boolean>(true);
	const [rows, setRows] = useState<RowParent[] | null>(null);

	const fetchDataGet = async () => {
		try {
			const response = await fetch(`${API_URL}/list`);
			const data = await response.json();

			if (data.length) {
				localStorage.setItem('rows', JSON.stringify(data));
			}
			setRows(data);
		} catch (error) {
			throw new Error('Ошибка');
		}
	};

	useEffect(() => {
		const cachedRows = localStorage.getItem('rows');

		if (cachedRows) {
			setRows(JSON.parse(cachedRows));
		} else {
			fetchDataGet();
		}
		setLoading(false);
	}, []);

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<StyledTableBody>
			{rows?.length ? (
				rows?.map((row, index) => <CustomRow key={index} row={row} isEditing={false} />)
			) : (
				<CustomRow isEditing />
			)}
		</StyledTableBody>
	);
}
