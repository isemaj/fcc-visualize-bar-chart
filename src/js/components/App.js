import React from 'react';
import { hot } from 'react-hot-loader';

import Chart from './Chart';
import '../../styles/app.scss';

const App = () => (
  <div>
    <Chart />
  </div>
);

export default hot(module)(App);
