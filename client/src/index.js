import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);