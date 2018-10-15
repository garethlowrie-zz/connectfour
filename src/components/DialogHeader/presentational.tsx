import * as React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styles from './styles.less';
import LANG from 'src/constants/lang';

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
			<FlexItem className={styles.closeButton} onClick={onClose}>{LANG.close}</FlexItem>
		</Flex>
	)
};

export default DialogHeader;
