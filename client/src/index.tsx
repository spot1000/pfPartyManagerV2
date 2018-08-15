import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { EnthusiasmAction } from './actions/index'

import './index.css';

const composeEnhancers = composeWithDevTools({});


const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},
composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);