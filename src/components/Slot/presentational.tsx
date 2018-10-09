import * as React from 'react';
import styles from './styles.less';

const Slot: React.SFC<{}> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.slot}>
			</div>
		</div>
	);
};

export default Slot;
