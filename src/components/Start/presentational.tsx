import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import SetupPlayers from 'components/SetupPlayers/container';

interface IPropTypes {
	isPlaying: boolean;
	onStart: React.MouseEventHandler<any>;
}

const Start: React.SFC<IPropTypes> = ({
	isPlaying,
	onStart
}) => {
	return (
		<Flex column justifyCenter alignCenter contentCenter className={styles.container} >
			<FlexItem shrink className={styles.wrapper}>
				{!isPlaying && <SetupPlayers onStart={onStart} />}
			</FlexItem>
		</Flex>
	)
};

export default Start;
