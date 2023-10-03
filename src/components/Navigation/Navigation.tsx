import DashboardIcon from '@mui/icons-material/Dashboard';
import { useState } from 'react';
import { StyledList, StyledListItem, StyledListItemButton, StyledListItemIcon } from './styled';
import { Typography } from '@mui/material';

const data = [
	{ name: 'По проекту' },
	{ name: 'Объекты' },
	{ name: 'РД' },
	{ name: 'МТО' },
	{ name: 'СМР' },
	{ name: 'График' },
	{ name: 'Мим' },
	{ name: 'Рабочие' },
	{ name: 'Капвложения' },
	{ name: 'Бюджет' },
	{ name: 'Финансирование' },
	{ name: 'Панорамы' },
	{ name: 'Камеры' },
	{ name: 'Поручения' },
	{ name: 'Контрагенты' },
];

export default function Navigation() {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(4);

	const handleListItemClick = (index: number) => {
		setSelectedIndex(index);
	};

	return (
		<nav>
			<StyledList>
				{data?.map(({ name }, index) => (
					<StyledListItem key={index}>
						<StyledListItemButton
							selected={selectedIndex === index}
							onClick={() => handleListItemClick(index)}
						>
							<StyledListItemIcon>
								<DashboardIcon />
							</StyledListItemIcon>
							<Typography variant="body2" noWrap>
								{name}
							</Typography>
						</StyledListItemButton>
					</StyledListItem>
				))}
			</StyledList>
		</nav>
	);
}
