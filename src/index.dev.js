import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

let root = document.getElementById('app');

const hotRender = App => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    root
  );
};

hotRender(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { hotRender(App) });
}
