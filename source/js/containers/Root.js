import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';

// containers
import App from './App';
import Game from './Game';

const store = configureStore();

export default class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Game} />
          </Route>
        </Router>
      </Provider>
    );

  }

}
