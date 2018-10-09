import { IGridSquare } from 'constants/setup';

const sortFn = (itemA: IGridSquare, itemB: IGridSquare) => {
	if (itemA.y < itemB.y) {
		return - 1;
	}
	else if (itemA.y > itemB.y) {
		return 1;
	}
	else {
		return 0;
	}
}

export default (columnData: IGridSquare[]) => {
	columnData.sort(sortFn);
	const nextItemAvailable = columnData.find(({ color }: IGridSquare) => color == null);
	return nextItemAvailable;
}
