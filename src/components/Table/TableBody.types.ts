export interface Rows {
	changed: Row[];
	current: Row;
}

export interface RowParent extends Row {
	child: [null],
	id: number,
	total: number
}

export interface Row {
	equipmentCosts: number;
	estimatedProfit: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	rowName: string;
	salary: number;
	supportCosts: number;
}

export type TError = {
	error: string;
	path: string;
	status: number;
	timestamp: number;
};
