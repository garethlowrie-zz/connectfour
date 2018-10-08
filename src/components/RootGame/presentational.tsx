import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import generateGame from 'utils/generateGame';
import getDataForColumn from 'utils/getDataForColumn';
import getNextSlotAvailableInColumn from 'utils/getNextSlotAvailableInColumn';

interface IPropTypes {

}

const DATA = [{ "x": 0, "y": 0 }, { "x": 1, "y": 0 }, { "x": 2, "y": 0 }, { "x": 3, "y": 0 }, { "x": 4, "y": 0 }, { "x": 5, "y": 0 }, { "x": 6, "y": 0 }, { "x": 0, "y": 1 }, { "x": 1, "y": 1 }, { "x": 2, "y": 1 }, { "x": 3, "y": 1 }, { "x": 4, "y": 1 }, { "x": 5, "y": 1 }, { "x": 6, "y": 1 }, { "x": 0, "y": 2 }, { "x": 1, "y": 2 }, { "x": 2, "y": 2 }, { "x": 3, "y": 2 }, { "x": 4, "y": 2 }, { "x": 5, "y": 2 }, { "x": 6, "y": 2 }, { "x": 0, "y": 3 }, { "x": 1, "y": 3 }, { "x": 2, "y": 3 }, { "x": 3, "y": 3 }, { "x": 4, "y": 3 }, { "x": 5, "y": 3 }, { "x": 6, "y": 3 }, { "x": 0, "y": 4 }, { "x": 1, "y": 4 }, { "x": 2, "y": 4 }, { "x": 3, "y": 4 }, { "x": 4, "y": 4 }, { "x": 5, "y": 4 }, { "x": 6, "y": 4 }, { "x": 0, "y": 5 }, { "x": 1, "y": 5 }, { "x": 2, "y": 5 }, { "x": 3, "y": 5 }, { "x": 4, "y": 5 }, { "x": 5, "y": 5 }, { "x": 6, "y": 5 }];

const RootGame: React.SFC<IPropTypes> = ({

}) => {
	const data = generateGame();
	const colData = getDataForColumn(DATA, 2);
	console.log("Data: ", data)
	console.log("Column 1", getDataForColumn(data, 1))
	console.log("Next Slot", getNextSlotAvailableInColumn(colData))
	return (
		<Flex column justifyCenter alignCenter className={styles.container}>
			<FlexItem>

			</FlexItem>

		</Flex>
	)
};

export default RootGame;
