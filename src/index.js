import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

require ('../stylesheets/app.scss');

import store from './store';
import App from './containers';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
