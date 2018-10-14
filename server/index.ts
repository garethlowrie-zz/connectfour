import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';

// Implementation of the GraphQL schema.
const resolvers = {
  Query,
  Mutation
};

// Bundle Schema and Resolvers
const server = new GraphQLServer({
    typeDefs: 'server/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: 'server/generated/prisma.graphql',
            endpoint: 'https://eu1.prisma.sh/gareth-lowrie-271717/database/dev',
            secret: 'mysecret123',
            debug: true
            })
        })
});

server.start();
console.log(`Server is running on http://localhost:4000`)