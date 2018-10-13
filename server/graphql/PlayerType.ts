import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        number: { type: GraphQLInt }
    })
});