import * as React from 'react';
import { render } from 'react-dom';
import Root from 'src/components/Root/container';
import 'src/less/index.less';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>
);

render(<App />, document.getElementById('root'));
