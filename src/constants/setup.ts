import Teams from 'enums/Teams';

export const MAX_ROWS = 6;
export const MAX_COLUMNS = 7;

export interface IGridSquare {
	x: number;
	y: number;
	color?: Teams;
}
