import RootLeaderboard from './presentational';
import compose from 'recompose/compose';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import lifecycle from 'recompose/lifecycle';

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
            const { player: { player }, incrementScore } = this.props;
            if(player) {
                const result = await incrementScore(player._id);
                console.log('mount ', result)
            }

        },
        async componentDidUpdate(prevProps: any) {
            const { winner, player: { player, loading }, createPlayer, incrementScore } = this.props;
            const hasFetchedNewData = prevProps.player.loading && !loading;
            if(hasFetchedNewData && player) {
                const result = await incrementScore(player._id);
                console.log('update ', result)

            }

            if(hasFetchedNewData && !player) {
                createPlayer(winner, 1);
            }
        }
    }),
)
(RootLeaderboard);
