import { IGridSquare } from 'client/constants/setup';
import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from 'client/constants/setup';

export default (rows: number = NUMBER_OF_ROWS, cols: number = NUMBER_OF_COLUMNS) => {
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
