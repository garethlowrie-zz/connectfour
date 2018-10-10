import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import RootGame from './presentational';
import checkForWin2 from 'utils/checkForWin2';
import getColumn from 'utils/getColumn';
import getNextSlotAvailableInColumn from 'utils/getNextSlotAvailableInColumn';
import { MAX_COLUMNS } from 'constants/setup';
import generateColumns from 'utils/generateColumns';
import withPropsOnChange from 'recompose/withPropsOnChange';
import findIndex from 'lodash-es/findIndex';
import omitProps from '@hocs/omit-props';

export default compose(
	withPropsOnChange(['data'], ({ data }: any) => ({
			columns: generateColumns(data, MAX_COLUMNS)
	})),
	withHandlers({
		onColumnClick: ({ data, activeTeam, onPlayerTakesTurn }: any) => (column: number) => {
			const colData = getColumn(data, column);
			const nextSlot = getNextSlotAvailableInColumn(colData);
			let winner;
			if (nextSlot) {
				const itemToUpdate = findIndex(data, { x: nextSlot.x, y: nextSlot.y }); // Find the index of item to update
				const newItem = data[itemToUpdate];										// Find the item to update
				newItem.color = activeTeam;												// Add teams color to item
				data[itemToUpdate] = newItem;											// Amend the item in data
				winner = checkForWin2(data, activeTeam);

				onPlayerTakesTurn(data, winner);
			}

		}
	}),
	omitProps('onPlayerTakesTurn')
)(RootGame);
