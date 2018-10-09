import { IGridSquare } from 'constants/setup';
import Teams from 'enums/Teams';

// HORIZONTAL
const HORIZONTAL_SOLUTION_START_POINTS = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17, 21, 22, 23, 24, 28, 29, 30, 31, 35, 36, 37, 38];
const HORIZONTAL_BUFFER = 1;

// VERTICAL
const VERTICAL_SOLUTION_START_POINTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const VERTICAL_BUFFER = 7;

// BOTTOM LEFT TO TOP RIGHT
const BOTTOM_LEFT_TOP_RIGHT_SOLUTION_START_POINTS = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17];
const BOTTOM_LEFT_TOP_RIGHT_BUFFER = 8;

// BOTTOM RIGHT TO TOP LEFT
const BOTTOM_RIGHT_TOP_LEFT_SOLUTION_START_POINTS = [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20];
const BOTTOM_RIGHT_TOP_LEFT_BUFFER = 6;


// SOLUTION CHECKER
const solutionChecker = (data: IGridSquare[], activeTeam: Teams, startPoints: number[], buffer: number): Teams|undefined => {
	let winner;
	startPoints.forEach((index: number) => {
		const item1 = data[index];
		const item2 = data[index + buffer];
		const item3 = data[index + (buffer * 2)];
		const item4 = data[index + (buffer * 3)];

		if (
			item1.color === activeTeam &&
			item2.color === activeTeam &&
			item3.color === activeTeam &&
			item4.color === activeTeam
		) {
			winner = activeTeam;
		}
	});

	return winner;
};


// TODO: DRY
export default (data: IGridSquare[], activeTeam: Teams): Teams|undefined => {
	const HORIZONTAL_RESULT = solutionChecker(data, activeTeam, HORIZONTAL_SOLUTION_START_POINTS, HORIZONTAL_BUFFER);

	if (HORIZONTAL_RESULT) {
		return HORIZONTAL_RESULT;
	}

	const VERTICAL_RESULT = solutionChecker(data, activeTeam, VERTICAL_SOLUTION_START_POINTS, VERTICAL_BUFFER);

	if (VERTICAL_RESULT) {
		return VERTICAL_RESULT;
	}

	const BOTTOM_LEFT_TOP_RIGHT_RESULT = solutionChecker(data, activeTeam, BOTTOM_LEFT_TOP_RIGHT_SOLUTION_START_POINTS, BOTTOM_LEFT_TOP_RIGHT_BUFFER);

	if (BOTTOM_LEFT_TOP_RIGHT_RESULT) {
		return BOTTOM_LEFT_TOP_RIGHT_RESULT;
	}

	const BOTTOM_RIGHT_TOP_LEFT_RESULT = solutionChecker(data, activeTeam, BOTTOM_RIGHT_TOP_LEFT_SOLUTION_START_POINTS, BOTTOM_RIGHT_TOP_LEFT_BUFFER);

	if (BOTTOM_RIGHT_TOP_LEFT_RESULT) {
		return BOTTOM_RIGHT_TOP_LEFT_RESULT;
	}

	return;
};


