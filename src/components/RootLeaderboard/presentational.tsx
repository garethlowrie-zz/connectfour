import * as React from 'react';
import Dialog from 'components/Dialog/presentational';
import posed from 'react-pose';
import { Query } from "react-apollo";
import gql from "graphql-tag";

interface IPropTypes {
	winner: string;
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
{
	player(id: "5bc1d5d9fea14b246a649fa1") {
	name
	score
	}
}
`;

const Leaderboard: React.SFC<IPropTypes> = ({
	winner,
	onClose,
	...props
}) => {
	return (
		<Container {...props}>
			<Dialog title="🏆 Leaderboard" onClose={onClose}>
				{winner} is the winner!!!!!!!!
				<Query
					query={QUERY}
				>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error :(</p>;
						
						const { name, score } = data.player;
						return (
							<div>{name} {score}</div>
						)
					}}
				</Query>
			
			</Dialog>
		</Container>
	)
};

export default Leaderboard;
