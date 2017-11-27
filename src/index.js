import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasicForm from './Form'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicForm />, document.getElementById('root'));
registerServiceWorker();
