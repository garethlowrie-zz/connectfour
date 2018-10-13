import { GraphQLObjectType, GraphQLString, GraphQLSchema  } from 'graphql';
import PlayerType from './PlayerType';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        player: {
            type: PlayerType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // Logic for serving data
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery
});