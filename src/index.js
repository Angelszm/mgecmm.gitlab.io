import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MGEC from './MGEC';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MGEC />, document.getElementById('root'));


serviceWorker.unregister();
