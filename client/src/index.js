import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import listBuilderReducer from './store/reducers/listBuilderReducer'
import registerServiceWorker from './registerServiceWorker'   

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// You can import and place any/all of your reducers here
const reducer = combineReducers({ listReducer: listBuilderReducer() })

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') 
)

registerServiceWorker();
