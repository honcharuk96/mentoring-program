import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './app.js';

const rootId = document.getElementById('root');
if (process.env.NODE_ENV === 'development') {
  // module.hot.accept('./App', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
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
