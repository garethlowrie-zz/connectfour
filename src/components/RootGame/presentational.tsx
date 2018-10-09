import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';

import GameDisc from 'components/GameDisc/presentational';
import Teams from 'enums/Teams';

import getRow from 'utils/getRow';
import checkForWin2 from 'utils/checkForWin2';
// import generateGame from 'utils/generateGame';
// import getColumn from 'utils/getColumn';
// import getNextSlotAvailableInColumn from 'utils/getNextSlotAvailableInColumn';

interface IPropTypes {

}

const DATA = [{ "x": 0, "y": 0, color: Teams.Yellow }, { "x": 1, "y": 0, color: Teams.Red }, { "x": 2, "y": 0, color: Teams.Yellow }, { "x": 3, "y": 0, color: Teams.Yellow }, { "x": 4, "y": 0, color: Teams.Red }, { "x": 5, "y": 0, color: Teams.Yellow }, { "x": 6, "y": 0, color: Teams.Red }, { "x": 0, "y": 1 }, { "x": 1, "y": 1, color: Teams.Red }, { "x": 2, "y": 1, color: Teams.Yellow }, { "x": 3, "y": 1, color: Teams.Yellow }, { "x": 4, "y": 1, color: Teams.Red }, { "x": 5, "y": 1, color: Teams.Red }, { "x": 6, "y": 1, color: Teams.Red }, { "x": 0, "y": 2 }, { "x": 1, "y": 2, color: Teams.Red }, { "x": 2, "y": 2, color: Teams.Red }, { "x": 3, "y": 2, color: Teams.Red }, { "x": 4, "y": 2, color: Teams.Yellow }, { "x": 5, "y": 2, color: Teams.Yellow }, { "x": 6, "y": 2, color: Teams.Yellow }, { "x": 0, "y": 3 }, { "x": 1, "y": 3 }, { "x": 2, "y": 3, color: Teams.Red }, { "x": 3, "y": 3, color: Teams.Red }, { "x": 4, "y": 3, color: Teams.Red }, { "x": 5, "y": 3, color: Teams.Yellow }, { "x": 6, "y": 3 }, { "x": 0, "y": 4 }, { "x": 1, "y": 4 }, { "x": 2, "y": 4 }, { "x": 3, "y": 4 }, { "x": 4, "y": 4 }, { "x": 5, "y": 4 }, { "x": 6, "y": 4 }, { "x": 0, "y": 5 }, { "x": 1, "y": 5 }, { "x": 2, "y": 5 }, { "x": 3, "y": 5 }, { "x": 4, "y": 5 }, { "x": 5, "y": 5 }, { "x": 6, "y": 5 }];

const RootGame: React.SFC<IPropTypes> = ({

}) => {
	// const data = generateGame();
	// const colData = getColumn(DATA, 2);
	// console.log("Data: ", data)
	// console.log("Column 1", getColumn(data, 1))
	// console.log("Next Slot", getNextSlotAvailableInColumn(colData))

	const rowZero = getRow(DATA, 0);
	const rowOne = getRow(DATA, 1);
	const rowTwo = getRow(DATA, 2);
	const rowThree = getRow(DATA, 3);
	const rowFour = getRow(DATA, 4);
	const rowFive = getRow(DATA, 5);

	const rows = [rowFive, rowFour, rowThree, rowTwo, rowOne, rowZero];


	//CHECK
	const lastMove = { "x": 1, "y": 3, color: Teams.Yellow };
	const win = checkForWin2(DATA, lastMove);
	console.log(win);
	return (
		<Flex column justifyCenter alignCenter className={styles.container}>
			<FlexItem>
				{rows.map(
					(row, index) => (
						<FlexItem key={`row-${index}`}>
							{row.map(
								({ x, y, color }) => (
									<GameDisc key={`${x},${y}`} variant={color} />
								)
							)}
						</FlexItem>
					)
				)}
			</FlexItem>
		</Flex>
	)
};

export default RootGame;
