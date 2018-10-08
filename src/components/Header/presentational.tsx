import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';

interface IPropTypes {
	name: any;
	children?: any;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.SFC<IPropTypes> = ({
	name,
	onChange
}) => {
	return (
		<Flex className={styles.container} alignCenter>
			<FlexItem shrink>
				<input value={name} onChange={onChange} className={styles.nameInput}/>
			</FlexItem>
		</Flex>
	)
};

export default Header;
