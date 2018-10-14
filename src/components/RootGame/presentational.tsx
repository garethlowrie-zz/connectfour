import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import GameColumn from 'src/components/GameColumn/container';
import { IGridSquare } from 'src/constants/setup';
import Teams from 'src/enums/Teams';
import posed from 'react-pose';
import LANG from 'src/constants/lang';

interface IPropTypes {
	activeTeam: Teams;
	currentPlayer: string;
	columns: IGridSquare[][];
	onColumnClick: React.MouseEventHandler<any>;
}

const Container = posed.div({
	exit: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		delay: 300
	}
});

const RootGame: React.SFC<IPropTypes> = ({
	activeTeam,
	currentPlayer,
	columns,
	onColumnClick,
	...props
}) => {
	return (
		<Container {...props}>
			<div>
				<div className={styles.currentPlayer}>
					{LANG.its} {currentPlayer}'s {LANG.turn}
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
			</div>

		</Container>
	)
};

export default RootGame;
