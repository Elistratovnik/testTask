import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { tableReducer } from './redux/tableReducer';
import thunk from 'redux-thunk';

const store = createStore(tableReducer, applyMiddleware(thunk))

const app = 
<Provider store={store}>
  <App />
</Provider>

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

