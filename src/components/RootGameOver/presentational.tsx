import * as React from 'react';
import Dialog from 'src/components/Dialog/presentational';
import posed from 'react-pose';
import LANG from 'src/constants/lang';
import styles from './styles.less';
import Button from 'src/components/Button/container';

interface IPropTypes {
	onClose: React.MouseEventHandler<any>;
}

const Container = posed.div({
	exit: {
		opacity: 0,
		delay: 300
	},
	enter: {
		opacity: 1,
		delay: 300
	}
});

const RootGameOver: React.SFC<IPropTypes> = ({
	onClose,
	...props
}) => {
	return (
		<Container {...props}>
			<Dialog title={`🎮 ${LANG.gameOver}`} onClose={onClose}>
				<div className={styles.dialogBodyContainer}>
					<p>{LANG.gameOverIntro}</p>
					<p>{LANG.tryAgain}</p>
					<Button tabIndex={1} className={styles.button} onClick={onClose}>{LANG.playAgain}</Button>
				</div>
			</Dialog>
		</Container>
	)
};

export default RootGameOver;
