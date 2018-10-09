import { IGridSquare } from 'constants/setup';
import { MAX_ROWS, MAX_COLUMNS } from "constants/setup";

export default (rows: number = MAX_ROWS, cols: number = MAX_COLUMNS) => {
	let xCounter = 0;
	let yCounter = 0;

	const data:IGridSquare[] = [];

	while (xCounter !== cols && yCounter !== rows) {
		const newItem: IGridSquare = {
			x: xCounter,
			y: yCounter
		};

		data.push(newItem);

		if (xCounter < cols - 1) {
			xCounter++;
		}
		else {
			xCounter = 0;
			yCounter++;
		}
	}

	return data;
}
