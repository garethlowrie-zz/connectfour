import * as React from 'react';
import Flex from 'styled-flex-component';
import { IGridSquare } from 'src/constants/setup';
import GameDisc from 'src/components/GameDisc/container';
import styles from './styles.less';
import Teams from 'src/enums/Teams';

interface IPropTypes {
	id: number;
	isHovering: boolean;
	activeTeam: Teams;
	data: IGridSquare[];
	onClick: React.MouseEventHandler<any>;
	onColumnEnter: React.MouseEventHandler<any>;
	onColumnLeave: React.MouseEventHandler<any>;
}

const GameColumn: React.SFC<IPropTypes> = ({
	isHovering,
	activeTeam,
	data,
	onClick,
	onColumnEnter,
	onColumnLeave
}) => {
	return (
		<>
			<Flex
				column
				className={styles.column}
				onClick={onClick}
				onMouseEnter={onColumnEnter}
				onMouseLeave={onColumnLeave}
			>
				<GameDisc variant={isHovering ? activeTeam : undefined} />

				{data.map(
					({ x, y, color }) => <GameDisc key={`${x},${y}`} row={y} variant={color} />
				)}
			</Flex>
			<div className={styles.overlayColumn}></div>
		</>
	)
};

export default GameColumn;
