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
	const [error, setError] = useState<string | null>(null);

	const fetchDataGet = async () => {
		try {
			const response = await fetch(`${API_URL}/list`);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(`Ошибка ${errorData.message || response.status}`);
			}

			const data = await response.json();

			if (data.length) {
				localStorage.setItem('rows', JSON.stringify(data));
			}

			setRows(data);
			throw new Error(`${data.status} ${data.error}`);

		} catch (error: unknown) {
			setError(`Ошибка! ${error}`);
			throw new Error(`Ошибка! ${error}`);
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

	if (error) {
		alert('Пришла ошибка, которую не ждали')
	}

	return (
		<StyledTableBody>
			{rows?.length ? (
				rows?.map((row) => <CustomRow key={row.id} row={row} isEditing={false} />)
			) : (
				<CustomRow isEditing />
			)}
		</StyledTableBody>
	);
}
