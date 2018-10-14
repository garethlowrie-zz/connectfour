import Teams from 'src/enums/Teams';

export const NUMBER_OF_ROWS = 6;
export const NUMBER_OF_COLUMNS = 7;

export interface IGridSquare {
	x: number;
	y: number;
	color?: Teams;
}
