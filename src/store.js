import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(
  reducers,
  JSON.parse(localStorage.getItem('myTodos')),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

store.subscribe(() => {
  localStorage.setItem('myTodos', JSON.stringify(store.getState()));
});

export default store;
