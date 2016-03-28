import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

require ('../stylesheets/app.scss');

import store from './store';
import AppContainer from './containers';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
