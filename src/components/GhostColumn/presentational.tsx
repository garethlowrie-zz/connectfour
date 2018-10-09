import * as React from 'react';
import Flex from 'styled-flex-component';
import GameDisc from 'components/GameDisc/presentational';
import styles from './styles.less';
import { range } from 'lodash-es';

interface IPropTypes {
	cols: number;
}

const GameColumn: React.SFC<IPropTypes> = ({
	cols
}) => {
	return (
		<Flex
			className={styles.column}
		>
			{range(cols).map(
				(col) => (
					<GameDisc key={col} />
				)
			)}

			<GameDisc />
		</Flex>
	)
};

export default GameColumn;
