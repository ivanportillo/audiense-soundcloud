import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

const App = () => (
  <Router history={browserHistory}>
    {routes()}
  </Router>
);

render(<App />, document.getElementById('root'));
