import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App';
import ExtendedForecast from './components/ExtendedForecast';
import PinnedCities from './components/PinnedCities';
import Home from './components/Home';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/extended-forecast" component={ExtendedForecast} />
      <Route path="/pinned-cities" component={PinnedCities} />
    </Route>
  </Router>
);

export default Routes;
