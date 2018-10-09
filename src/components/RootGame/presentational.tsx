import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import GameColumn from 'components/GameColumn/container';
import { IGridSquare } from 'constants/setup';
import Teams from 'enums/Teams';

interface IPropTypes {
	data: IGridSquare[];
	activeTeam: Teams;
	currentPlayer: string;
	columns: IGridSquare[][];
	onColumnClick: React.MouseEventHandler<any>;
}

const RootGame: React.SFC<IPropTypes> = ({
	activeTeam,
	currentPlayer,
	columns,
	onColumnClick
}) => {
	return (
		<>
			<div className={styles.currentPlayer}>
				IT'S {currentPlayer}'s turn
			</div>
			<Flex justifyCenter alignCenter>
				{columns.map(
					(column, index) => (
						<FlexItem key={`column-${index}`} className={styles.columnContainer}>
							<GameColumn data={column} id={index} activeTeam={activeTeam} onClick={onColumnClick} />
						</FlexItem>
					)
				)}
			</Flex>
		</>
	)
};

export default RootGame;
