// export interface Rows { // ???
// 	changed: Row[];
// 	current: Row;
// }

export interface RowParent extends Row {
	parentId: number;
}

export interface Row { // createRowEntity
	child: Row[],
	id: number,
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
	total: number;
}

export type TError = {
	error: string;
	path: string;
	status: number;
	timestamp: number;
};


export interface EntityResponse {
	id: number;
	rowName: string;
}

export interface OutlayRowRequest {
	parentId: number; // parentId
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
	// нет total
}

export interface OutlayRowUpdateRequest {
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


export interface RowResponse {
	id: number;
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
	total: number;
}

export interface RecalculatedRows {
	changed: [RowResponse];
	current: RowResponse;
}

export interface TreeResponse {
	child: [{}];
	id: number;
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
	total: number;
}
