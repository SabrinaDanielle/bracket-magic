import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  return (
    <h1 className="test">
      <span role="img" aria-label="celebrate">
        🎉
      </span>
      Very Hot React Boilerplate -- by Magickal Bri
      <span role="img" aria-label="celebrate">
        🎉
      </span>
    </h1>
  );
};

export default hot(module)(App);
