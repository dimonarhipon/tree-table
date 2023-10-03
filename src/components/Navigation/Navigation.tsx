import DashboardIcon from '@mui/icons-material/Dashboard';
import { useState } from 'react';
import {
	StyledList,
	StyledListItem,
	StyledListItemButton,
	StyledListItemIcon,
} from './styled';
import { Typography } from '@mui/material';

const data = [
	{ name: 'По проекту', active: false },
	{ name: 'Объекты', active: false },
	{ name: 'РД', active: false },
	{ name: 'МТО', active: false },
	{ name: 'СМР', active: true },
	{ name: 'График', active: false },
	{ name: 'Мим', active: false },
	{ name: 'Рабочие', active: false },
	{ name: 'Капвложения', active: false },
	{ name: 'Бюджет', active: false },
	{ name: 'Финансирование', active: false },
	{ name: 'Панорамы', active: false },
	{ name: 'Камеры', active: false },
	{ name: 'Поручения', active: false },
	{ name: 'Контрагенты', active: false },
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
							<Typography variant="body2" noWrap>{name}</Typography>
						</StyledListItemButton>
					</StyledListItem>
				))}
			</StyledList>
		</nav>
	);
}
