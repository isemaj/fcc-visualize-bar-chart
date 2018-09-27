import * as d3 from 'd3';

import '../styles/app.scss';

const api = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

let svg = d3.select('#chart')
  .append('svg')
  .attr('width', 500)
  .attr('height', 900);

document.addEventListener("DOMContentLoaded", (event) => {
  fetch(api)
    .then(res => res.json())
    .then(data => {

    })
});


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import App from './components/App';
import rootReducer from './reducers';
import timerMiddleware from './middlewares/timerMiddleware';

const middleware = [logger, timerMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, {}, composedEnhancers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
