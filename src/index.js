import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from "styled-components"

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    background-color: #ff9800;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  }
  html {
    padding: 0;
    margin: 0;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
