import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { BrowserRouter } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { rootState } from './types';
import { AllActions } from './actions/allActions'

import './index.css';
import 'typeface-roboto'

const composeEnhancers = composeWithDevTools({});


const store = createStore<rootState, AllActions, any, any>(rootReducer, {},
composeEnhancers());

// const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);