import * as React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styles from './styles.less';
import DialogHeader from 'src/components/DialogHeader/presentational';

interface IPropTypes {
	title: string;
	children: any;
	onClose: React.MouseEventHandler<any>;
}

const Dialog: React.SFC<IPropTypes> = ({
	title,
	children,
	onClose
}) => {
	return (
		<Flex justifyCenter alignCenter className={styles.container}>
			<FlexItem className={styles.modalContainer}>
				<Flex column className={styles.modal}>
					<FlexItem className={styles.header}>
						<DialogHeader onClose={onClose}>{title}</DialogHeader>
					</FlexItem>
					<FlexItem grow={1} className={styles.body}>
						{children}
					</FlexItem>
				</Flex>
			</FlexItem>
		</Flex>
	)
};

export default Dialog;
