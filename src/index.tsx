import React from 'react';
import { render } from 'react-dom';
import Game from './components/game';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

  