import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './app.js';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './global/components/notFound/NotFound.component';

const rootId = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterNavigation />
    </Provider>
  </React.StrictMode>,
  rootId,
);

function RouterNavigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/search'} component={App} />
        <Redirect from={'/'} exact to="/search" />
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
