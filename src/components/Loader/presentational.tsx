import * as React from 'react';
import styles from './styles.less';
import posed from "react-pose";
import logo from 'images/logo.png';

interface IPropTypes {
	on: boolean;
	children: any;
}

const LoadingBar = posed.div({
	right: {
		x: 200,
		transition: {
			duration: 1000
		}
	},
	left: {
		x: -50,
		transition: {
			duration: 1000
		}
	}
});

const Loader: React.SFC<IPropTypes> = ({
	children,
	on
}) => {
	return (
		<div className={styles.container}>
			<img src={logo} />
			{children && <div className={styles.text}>{children}</div>}
			<div className={styles.loadingBarContainer}>
				<LoadingBar pose={on ? 'left' : 'right'} className={styles.loadingBar} />
			</div>
		</div>
	)
};

export default Loader;
