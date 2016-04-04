import { createStore } from 'redux';

import reducers from './reducers';

const initialState = (localStorage.getItem('myTodos'))? JSON.parse(localStorage.getItem('myTodos')) : [];

const store = createStore(
  reducers,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

store.subscribe(() => {
  localStorage.setItem('myTodos', JSON.stringify(store.getState()));
});

export default store;
