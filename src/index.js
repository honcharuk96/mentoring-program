import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootId = document.getElementById('root');
ReactDOM.render(
  <>
    <h1>I'm configuring setting up Webpack!!!</h1>
  </>,
  rootId,
);
console.log('module.hot' + module.hot);
console.log(' process.env.NODE_ENV' + process.env.NODE_ENV);
if (module.hot && process.env.NODE_ENV === 'development') {
  // module.hot.accept("./App", () => {
  ReactDOM.render(
    <>
      <App />
    </>,
    rootId,
  );
  // });
}
