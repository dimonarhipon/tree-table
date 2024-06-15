import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { API_URL } from '../../constants/constants';
import { TableBody as MuiTableBody, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IError, OutlayRowRequest, RecalculatedRows, TreeResponse } from './TableBody.types';
import CustomRow from './CustomRow';

const StyledTableBody = styled(MuiTableBody)(() => ({
	padding: 0,
}));

const rowRequest: OutlayRowRequest = {
	parentId: 0, // parentId
	equipmentCosts: 0,
	estimatedProfit: 0,
	machineOperatorSalary: 0,
	mainCosts: 0,
	materials: 0,
	mimExploitation: 0,
	overheads: 0,
	rowName: '',
	salary: 0,
	supportCosts: 0,
}

export default function TableBody() {
	const [loading, setLoading] = useState<boolean>(true);
	const [rows, setRows] = useState<TreeResponse[] | null>(null);
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

	const createRowChildHandler = async (id: number) => {
		try {
			const body = rowRequest;
			body.parentId = id;

			const response = await fetch(`${API_URL}/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(body)
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(`Ошибка ${errorData.message || response.status}`);
			}

			const data: RecalculatedRows = await response.json();

			console.log(data)

			// setRows((prev) => {prev, data})

			console.log('create', data);
		} catch (error: unknown) {
			setError(`Ошибка! ${error}`);
			throw new Error(`Ошибка! ${error}`);
		}
	}

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
		alert('Пришла ошибка в TableBody, которую не ждали')
	}

	return (
		<StyledTableBody>
			{rows?.length ? (
				rows?.map((row) => <CustomRow
					key={uuidv4()}
					id={row.id}
					row={row}
					isEditing={false}
					onAdd={createRowChildHandler}
				/>)
			) : (
				<CustomRow
					key={uuidv4()}
					id={uuidv4()}
					isEditing
					onAdd={createRowChildHandler}
				/>
			)}
		</StyledTableBody>
	);
}
