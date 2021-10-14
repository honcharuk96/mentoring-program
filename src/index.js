import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootId = document.getElementById('root');
if (process.env.NODE_ENV === 'development') {
  // module.hot.accept('./App', () => {
  ReactDOM.render(
    <>
      <App />
    </>,
    rootId,
  );
  // });
} else {
  ReactDOM.render(
    <>
      <App />
    </>,
    rootId,
  );
}
