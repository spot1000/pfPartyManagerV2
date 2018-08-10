import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BasicExample from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { EnthusiasmAction } from './actions/index';

const composeEnhancers = composeWithDevTools({});

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
  }, 
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BasicExample />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
