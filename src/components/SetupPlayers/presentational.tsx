import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import Input from 'components/Input/container';
import Button from 'components/Button/container';
import LANG from 'constants/lang';

interface IPropTypes {
	playerOneName: string;
	playerTwoName: string;
	children?: any;
	isStartDisabled: boolean;
	onPlayerOneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onPlayerTwoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onStart: React.MouseEventHandler<any>;
}

const SetupPlayers: React.SFC<IPropTypes> = ({
	playerOneName,
	playerTwoName,
	isStartDisabled,
	onPlayerOneChange,
	onPlayerTwoChange,
	onStart
}) => {
	return (
		<Flex column justifyCenter alignCenter className={styles.container}>
			<FlexItem >
				<Input tabIndex={1} placeholder={LANG.playerOne} value={playerOneName} spellCheck={false} className={styles.input} onChange={onPlayerOneChange} />
			</FlexItem>
			<FlexItem>
				<Input tabIndex={2} placeholder={LANG.playerTwo} value={playerTwoName} spellCheck={false} className={styles.input} onChange={onPlayerTwoChange} />
			</FlexItem>
			<FlexItem>
				<Button tabIndex={3} isDisabled={isStartDisabled} title={isStartDisabled ? LANG.youMustEnterNames : ''} onClick={onStart}>{LANG.start}</Button>
			</FlexItem>
		</Flex>
	)
};

export default SetupPlayers;
