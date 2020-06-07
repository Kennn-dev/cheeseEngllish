import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {Provider} from 'react-redux'
import store from './store'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '10px',
  // you can also just use 'scale'
  transition: transitions.FADE
}

ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
