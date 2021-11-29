require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { App } from './App';

import './App.scss';
import './Fonts.scss'

ReactDOM.render(<App />, document.getElementById('root'))
