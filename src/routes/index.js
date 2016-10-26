import React from 'react';
import { Route } from 'react-router';
import App from 'components/app';
import Search from 'components/search';
import Queue from 'components/queue';
import About from 'components/about';

const routes = () =>
  <Route path="/" component={App} >
    <Route path="/search" component={Search} />
    <Route path="/queue" component={Queue} />
    <Route path="/about" component={About} />
  </Route>;

export default routes;
