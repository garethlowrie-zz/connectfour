import * as React from 'react';
import Flex from 'styled-flex-component';
import { IGridSquare } from 'constants/setup';
import GameDisc from 'components/GameDisc/container';
import styles from './styles.less';
import Teams from 'enums/Teams';

interface IPropTypes {
	id: number;
	top?: number;
	isHovering: boolean;
	activeTeam: Teams;
	data: IGridSquare[];
	onClick: React.MouseEventHandler<any>;
	onColumnEnter: React.MouseEventHandler<any>;
	onColumnLeave: React.MouseEventHandler<any>;
}

const GameColumn: React.SFC<IPropTypes> = ({
	top,
	isHovering,
	activeTeam,
	data,
	onClick,
	onColumnEnter,
	onColumnLeave
}) => {
	return (
		<Flex
			column
			className={styles.column}
			onClick={onClick}
			onMouseEnter={onColumnEnter}
			onMouseLeave={onColumnLeave}
		>
			<GameDisc variant={isHovering ? activeTeam : undefined}></GameDisc>

			{data.map(
				({ x, y, color }) => (
					<GameDisc key={`${x},${y}`} row={y} variant={color} />
				)
			)}
		</Flex>
	)
};

export default GameColumn;
