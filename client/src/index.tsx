import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { BrowserRouter } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/rootReducer';
import { StoreState } from './types';
import { EnthusiasmAction } from './actions'

import './index.css';
import 'typeface-roboto'

const composeEnhancers = composeWithDevTools({});


const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},
composeEnhancers());

// const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);