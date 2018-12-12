import React from 'react';
import ReactDOM from 'react-dom';
import AppolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import SongList from './Components/SongList'
import './style/style.css'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './Components/App';
import SongCreate from './Components/SongCreate';
import SongDetail from './Components/SongDetail';

const client = new AppolloClient({
  dataIdFromObject:o=>o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory} component={App} >
        <Route path="/"  >
          <IndexRoute component={SongList}  ></IndexRoute>
        </Route>
        <Route path= "/song/new" component={SongCreate} ></Route>
        <Route path="/song/:id" component={SongDetail} ></Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
