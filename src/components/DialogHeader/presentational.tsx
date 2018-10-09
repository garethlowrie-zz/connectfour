import * as React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styles from './styles.less';

interface IPropTypes {
	children: any;
	onClose: React.MouseEventHandler<any>;
}

const DialogHeader: React.SFC<IPropTypes> = ({
	children,
	onClose
}) => {
	return (
		<Flex alignCenter className={styles.container}>
			<FlexItem grow={1}>{children}</FlexItem>
			<FlexItem className={styles.closeButton} onClick={onClose}>CLOSE</FlexItem>
		</Flex>
	)
};

export default DialogHeader;
