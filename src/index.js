import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './app.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NotFound from './global/components/notFound/NotFound.component';

const rootId = document.getElementById('root');
if (process.env.NODE_ENV === 'development') {
  // module.hot.accept('./App', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <Router>
                      <Route exact path={'/'} component={App}/>
                      < Route path={'*'} component={NotFound} />
          </Router>
      </Provider>
     </React.StrictMode>,
    rootId,
  );
  // });
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootId,
  );
}
