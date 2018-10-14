import * as React from 'react';
import Dialog from 'components/Dialog/presentational';
import posed from 'react-pose';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';

interface IPropTypes {
	winner: string;
	getQuery: any
	onClose: React.MouseEventHandler<any>;
}

const Container = posed.div({
	exit: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		delay: 300
	}
});

const QUERY = gql`
	query TopPlayers($quantity: Int = 10){
		topPlayers(quantity: $quantity) {
			name
			score
		}
	}
`;


const Leaderboard: React.SFC<IPropTypes> = ({
	winner,
	getQuery,
	onClose,
	...props
}) => {
	const vars = { quantity: null };
	return (
		<Container {...props}>
			<Dialog title="🏆 Leaderboard" onClose={onClose}>
				{winner} is the winner!!!!!!!!
				<Query
					query={QUERY}
					variables={vars}
				>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error :(</p>;

						return [
							data.topPlayers.length > 0 && (
								<Flex key="header" className={styles.header}>
									<FlexItem grow={1}>Player Name</FlexItem>
									<FlexItem >Score</FlexItem>
								</Flex>
							),
							data.topPlayers.map(({ name, score }: any) => (
								<Flex key={`${name}-${score}`} className={styles.row}>
									<FlexItem grow={1} className={styles.name}>{name}</FlexItem>
									<FlexItem className={styles.score}>{score}</FlexItem>
								</Flex>
							))
						];
					}}
				</Query>
			
			</Dialog>
		</Container>
	)
};

export default Leaderboard;
