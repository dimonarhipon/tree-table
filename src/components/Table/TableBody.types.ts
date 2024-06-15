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

export interface IError {
	error: string;
	path: string;
	status: number;
	timestamp: number;
};


export interface EntityResponse {
	id: number;
	rowName: string;
}

export interface OutlayRowRequest { // create request
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

export interface OutlayRowUpdateRequest { // update request
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

export interface RecalculatedRows { // create response // delete response
	changed: [RowResponse];
	current: RowResponse;
}

export interface TreeResponse {
	child: TreeResponse[]; // ?
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
