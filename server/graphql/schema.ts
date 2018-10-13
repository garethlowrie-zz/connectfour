import { GraphQLObjectType, GraphQLString, GraphQLSchema  } from 'graphql';
import PlayerType from './PlayerType';
import Player from '../models/Player';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        player: {
            type: PlayerType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Player.findById(args.id);
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery
});