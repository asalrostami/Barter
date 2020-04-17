import React from 'react';
import ReactDOM from 'react-dom';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
