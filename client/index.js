import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import SongList from './Components/Songlist';
import App from './Components/App';
import SongCreate from './Components/SongCreate';

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
          <Route path="/new" component={SongCreate}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
