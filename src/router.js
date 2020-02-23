import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/indexPage/IndexPage';
import ProductPage from './routes/ProductPage/ProductPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" exact component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
