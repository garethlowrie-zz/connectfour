import * as React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styles from './styles.less';

interface IPropTypes {
	winner: string;
	onClose: React.MouseEventHandler<any>;
}

const Leaderboard: React.SFC<IPropTypes> = ({
	winner,
	onClose
}) => {
	return (
		<Flex justifyCenter alignCenter className={styles.container}>
			<FlexItem className={styles.modalContainer}>
				<Flex column className={styles.modal}>
					<FlexItem className={styles.header}>
						<Flex alignCenter className={styles.header}>
							<FlexItem grow={1}>Leaderboard</FlexItem>
							<FlexItem onClick={onClose}>CLOSE</FlexItem>
						</Flex>
					</FlexItem>
					<FlexItem grow={1} className={styles.body}>
						{winner} is the winner!!!!!!!!
					</FlexItem>
					<FlexItem shrink className={styles.footer}>

					</FlexItem>
				</Flex>
			</FlexItem>
		</Flex>
	)
};

export default Leaderboard;
