
// const NEEDED_TO_WIN = 4;

// DIRECTION IDENTIFIERS
const TOP = 'TOP';
const BOTTOM = 'BOTTOM';
const LEFT = 'LEFT';
const RIGHT = 'TOP';
const TOP_LEFT = 'TOP_LEFT';
const TOP_RIGHT = 'TOP_RIGHT';
const BOTTOM_LEFT = 'BOTTOM_LEFT';
const BOTTOM_RIGHT = 'BOTTOM_RIGHT';

interface ISurroundingSquares {
	TOP?: IGridSquare;
	BOTTOM?: IGridSquare;
	LEFT?: IGridSquare;
	RIGHT?: IGridSquare;
	TOP_LEFT?: IGridSquare;
	TOP_RIGHT?: IGridSquare;
	BOTTOM_LEFT?: IGridSquare;
	BOTTOM_RIGHT?: IGridSquare;
}

function keys<O>(o: O) {
	return Object.keys(o) as (keyof O)[];
};

export default (data: IGridSquare[], lastMove: IGridSquare) => {
	const { x: lastMoveX, y: lastMoveY, color: lastMoveColor } = lastMove;

	// Get the GridSquares around the lastMove
	const SURROUNDING_SQUARES: ISurroundingSquares = {
		[TOP]: data.find(({ x, y }) => x === lastMoveX && y === lastMoveY + 1),
		[BOTTOM]: data.find(({ x, y }) => x === lastMoveX && y === lastMoveY - 1),
		[LEFT]: data.find(({ x, y }) => x === lastMoveX - 1 && y === lastMoveY),
		[RIGHT]: data.find(({ x, y }) => x === lastMoveX + 1 && y === lastMoveY),
		[TOP_LEFT]: data.find(({ x, y }) => x === lastMoveX - 1 && y === lastMoveY + 1),
		[TOP_RIGHT]: data.find(({ x, y }) => x === lastMoveX + 1 && y === lastMoveY + 1),
		[BOTTOM_LEFT]: data.find(({ x, y }) => x === lastMoveX - 1 && y === lastMoveY - 1),
		[BOTTOM_RIGHT]: data.find(({ x, y }) => x === lastMoveX + 1 && y === lastMoveY - 1)
	};

	// Remove empty grid squares and those taken by the other player
	keys(SURROUNDING_SQUARES).forEach((key) => {
		const item = SURROUNDING_SQUARES[key];
		if (item === undefined || item && item.color !== lastMoveColor) {
			delete SURROUNDING_SQUARES[key];
		}
	});
};
