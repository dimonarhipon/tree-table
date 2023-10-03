import { TableBody as MuiTableBody, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { RowParent } from './TableBody.types';

const StyledTableBody = styled(MuiTableBody)(() => ({
	padding: 0,
}));

const eID = 63697;
const API_URL = `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row`;

export default function TableBody() {
	const [rows, setRows] = useState<RowParent[] | null>(null);

	const fetchDataGet = async () => {
		try {
			const response = await fetch(`${API_URL}/list`);
			const data = await response.json();

			setRows(data);
			localStorage.setItem('rows', JSON.stringify(data));
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
	}, []);

	return (
		<StyledTableBody>
			{rows?.map((row, index) => (
				<TableRow key={index}>
					<TableCell>{row.child}</TableCell>
					<TableCell>{row.rowName}</TableCell>
					<TableCell>{row.salary}</TableCell>
					<TableCell>{row.equipmentCosts}</TableCell>
					<TableCell>{row.overheads}</TableCell>
					<TableCell>{row.estimatedProfit}</TableCell>
				</TableRow>
			))}
		</StyledTableBody>
	);
}
