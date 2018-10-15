import RootLeaderboard from './presentational';
import compose from 'recompose/compose';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';

const findPlayerQuery = gql`
    query Player($name: String) {
        player(name: $name) {
            _id
        }
    }
`;

const createPlayerQuery = gql`
    mutation CreatePlayer($name: String, $score: Int) {
        createPlayer (name: $name, score: $score) {
            name
            score
        }
    }
`;

const incrementScoreQuery = gql`
    mutation IncrementScore($_id: String) {
        incrementScore (_id: $_id) {
            name
            score
        }
    }
`;

export default compose(
    withState('winningScore', 'setWinningScore'),
    graphql(findPlayerQuery, {
        name: 'player',
        options: (props: any) => ({
            variables: {
                name: props.winner
            }
        })
    }),
    graphql(createPlayerQuery, {
        props: ({ mutate }: any) => ({
            createPlayer: (name: string, score: number) => mutate({
                variables: {
                    name,
                    score
                }
            })
        })
    }),
    graphql(incrementScoreQuery, {
        options: {
            refetchQueries: [
                'TopPlayers'
            ]
        },
        props: ({ mutate }: any) => ({
            incrementScore: (_id: string) => mutate({
                variables: {
                    _id
                }
            })
        })
    }),
    lifecycle({
        async componentDidMount() {
            const { winner, player: { player }, incrementScore, setWinningScore } = this.props;

            if (!winner) {
                return; // If just viewing the leaderboard and there is no winner - we do not update the scores.
            }

            if(player) {
                const {data: { incrementScore: { score } }} = await incrementScore(player._id);
                setWinningScore(score);
            }

        },
        async componentDidUpdate(prevProps: any) {
            const { winner, player: { player, loading }, createPlayer, incrementScore, setWinningScore } = this.props;

            if (!winner) {
                return;  // If just viewing the leaderboard and there is no winner - we do not update the scores.
            }

            const hasFetchedNewData = prevProps.player.loading && !loading;
            if(hasFetchedNewData && player) {
                const {data: { incrementScore: { score } }} = await incrementScore(player._id);
                setWinningScore(score);
            }

            if(hasFetchedNewData && !player) {
                createPlayer(winner, 1);
                setWinningScore(1);
            }
        }
    })
)
(RootLeaderboard);
